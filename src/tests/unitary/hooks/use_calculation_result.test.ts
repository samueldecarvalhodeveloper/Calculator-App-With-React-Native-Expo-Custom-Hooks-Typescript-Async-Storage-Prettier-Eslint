import { describe, beforeAll, beforeEach, test, expect } from "@jest/globals";
import { act, renderHook } from "@testing-library/react-native";
import useCalculationResult from "../../../hooks/use_calculation_result";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import { EMPTY_STRING } from "../../../constants/strings_utilities_constants";
import DeviceLanguageRetriever from "../../../infrastructure/anticorruption_layer/device_language_retriever";
import { GERMAN_LANGUAGE } from "../../../constants/device_utilities_constants";
import LanguageFactory from "../../../ui_languages_specific_constants.ts/language_factory";
import Languages from "../../../ui_languages_specific_constants.ts/languages";
import DeviceLanguageRecuperator from "../../../device_language_recuperator/device_language_recuperator";
import CalculatorTranslator from "../../../infrastructure/anticorruption_layer/calculator_translator";
import CalculatorTranslatorFactory from "../../../infrastructure/anticorruption_layer/calculator_translator_factory";

describe('Test Hook: "useCalculationResult"; Behavior', () => {
  const calculatorTranslator: CalculatorTranslator =
    CalculatorTranslatorFactory.getInstance(EMPTY_STRING);

  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  beforeEach(() => {
    calculatorTranslator.clean();
  });

  test('Test If Attribute: "calculationResult"; Return The Calculator Translator Initial Value Correctly', () => {
    const { result } = renderHook(() => useCalculationResult());

    const initialCalculationResult: string =
      calculatorTranslator.getCalculationResult();

    expect(result.current.calculationResult).toEqual(initialCalculationResult);
  });

  test('Test If Method: "addCharacter"; Returns Adds Character To Calculator Translator Calculation Result Correctly', () => {
    const { result } = renderHook(() => useCalculationResult());

    act(() => {
      result.current.addCharacter(CalculatorCharacters.ONE);
    });

    const currentCalculationResult: string =
      calculatorTranslator.getCalculationResult();

    expect(currentCalculationResult).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "backspace"; Removes Last Character From Calculator Translator Calculation Result Correctly', () => {
    const { result } = renderHook(() => useCalculationResult());

    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);
    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);

    act(() => {
      result.current.backspace();
    });

    const currentCalculationResult: string =
      calculatorTranslator.getCalculationResult();

    expect(currentCalculationResult).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "clean"; Removes All Characters From Calculator Translator Calculation Result Correctly', () => {
    const { result } = renderHook(() => useCalculationResult());

    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);

    act(() => {
      result.current.clean();
    });

    const currentCalculationResult: string =
      calculatorTranslator.getCalculationResult();

    expect(currentCalculationResult).toEqual(EMPTY_STRING);
  });

  test('Test If Method: "evaluate"; Evaluates Expression On Calculator Translator Calculation Result Correctly', () => {
    const { result } = renderHook(() => useCalculationResult());

    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);
    calculatorTranslator.addCharacter(CalculatorCharacters.ADDITION);
    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);

    act(() => {
      result.current.evaluate();
    });

    const currentCalculationResult: string =
      calculatorTranslator.getCalculationResult();

    expect(currentCalculationResult).toEqual(CalculatorCharacters.TWO);
  });

  test('Test If Attribute: "calculationResult"; Is Equal To Not Valid Expression Message On Device Language Correctly', () => {
    const deviceLanguage: Languages =
      DeviceLanguageRecuperator.getDeviceLanguage();
    const notValidExpressionErrorMessageOnDeviceLanguage: string =
      LanguageFactory.getInstance(
        deviceLanguage,
      ).NOT_VALID_EXPRESSION_ERROR_MESSAGE;
    const { result } = renderHook(() => useCalculationResult());

    act(() => {
      result.current.addCharacter(CalculatorCharacters.ADDITION);
      result.current.addCharacter(CalculatorCharacters.ADDITION);
      result.current.evaluate();
    });

    act(() => {
      expect(result.current.calculationResult).toEqual(
        notValidExpressionErrorMessageOnDeviceLanguage,
      );
    });
  });
});
