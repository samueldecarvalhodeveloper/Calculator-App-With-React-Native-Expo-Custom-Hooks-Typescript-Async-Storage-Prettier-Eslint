import { describe, beforeAll, beforeEach, test, expect } from "@jest/globals";
import { act, renderHook } from "@testing-library/react-native";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import DeviceLanguageRetriever from "../../../infrastructure/anticorruption_layer/device_language_retriever";
import { GERMAN_LANGUAGE } from "../../../constants/device_utilities_constants";
import LanguageFactory from "../../../ui_languages_specific_constants.ts/language_factory";
import Languages from "../../../ui_languages_specific_constants.ts/languages";
import DeviceLanguageRecuperator from "../../../device_language_recuperator/device_language_recuperator";
import Calculator from "../../../domains/calculator/calculator";
import CalculatorFactory from "../../../domains/calculator/calculator_factory";
import useCalculation from "../../../hooks/use_calculation";

describe('Test Hook: "useCalculation"; Behavior', () => {
  const calculator: Calculator = CalculatorFactory.getInstance("");

  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  beforeEach(() => {
    calculator.clean();
  });

  test('Test If Attribute: "calculation"; Returns The Calculator Initial Value Correctly', () => {
    const { result } = renderHook(() => useCalculation());

    const initialCalculation: string = calculator.getExpression();

    expect(result.current.calculationExpression).toEqual(initialCalculation);
  });

  test('Test If Method: "addCharacter"; Returns Adds Character To Calculator Calculation Expression Correctly', () => {
    const { result } = renderHook(() => useCalculation());

    act(() => {
      result.current.addCharacter(CalculatorCharacters.ONE);
    });

    const currentCalculation: string = calculator.getExpression();

    expect(currentCalculation).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "backspace"; Removes Last Character From Calculator Calculation Correctly', () => {
    const { result } = renderHook(() => useCalculation());

    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ONE);

    act(() => {
      result.current.backspace();
    });

    const currentCalculation: string = calculator.getExpression();

    expect(currentCalculation).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "clean"; Removes All Characters From Calculator Calculation Correctly', () => {
    const { result } = renderHook(() => useCalculation());

    calculator.addCharacter(CalculatorCharacters.ONE);

    act(() => {
      result.current.clean();
    });

    const currentCalculation: string = calculator.getExpression();

    expect(currentCalculation).toEqual("");
  });

  test('Test If Method: "evaluate"; Evaluates Expression On Calculator Calculation Correctly', () => {
    const { result } = renderHook(() => useCalculation());

    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ONE);

    act(() => {
      result.current.evaluate();
    });

    const currentCalculation: string = calculator.getExpression();

    expect(currentCalculation).toEqual(CalculatorCharacters.TWO);
  });

  test('Test If Attribute: "calculation"; Is Equal To Not Valid Expression Message On Device Language Correctly', () => {
    const deviceLanguage: Languages =
      DeviceLanguageRecuperator.getDeviceLanguage();
    const notValidExpressionErrorMessageOnDeviceLanguage: string =
      LanguageFactory.getInstance(
        deviceLanguage,
      ).NOT_VALID_EXPRESSION_ERROR_MESSAGE;
    const { result } = renderHook(() => useCalculation());

    act(() => {
      result.current.addCharacter(CalculatorCharacters.ADDITION);
      result.current.addCharacter(CalculatorCharacters.ADDITION);
      result.current.evaluate();
    });

    act(() => {
      expect(result.current.calculationExpression).toEqual(
        notValidExpressionErrorMessageOnDeviceLanguage,
      );
    });
  });
});
