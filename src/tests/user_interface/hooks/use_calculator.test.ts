import {
  describe,
  beforeAll,
  beforeEach,
  test,
  expect,
  jest,
} from "@jest/globals";
import { act, renderHook } from "@testing-library/react-native";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import { GERMAN_LANGUAGE } from "../../../constants/application_constants";
import LanguageFactory from "../../../dependency_injection/language_factory";
import Languages from "../../../user_interface/internals/languages_specific_constants.ts/languages";
import Calculator from "../../../domains/calculator/calculator";
import useCalculator from "../../../user_interface/hooks/use_calculator";
import CalculationExpressionDecorator from "../../../domains/calculator/calculation_expression_decorator";
import DeviceLanguageRetriever from "../../../user_interface/internals/concerns/device_language_retriever";
import DeviceLanguageRecuperator from "../../../user_interface/internals/concerns/device_language_recuperator";
import CalculatorFactory from "../../../dependency_injection/calculator_factory";

describe('Test Hook: "useCalculator"; Behavior', () => {
  let calculator: Calculator;

  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  beforeEach(() => {
    const calculationExpression = new CalculationExpressionDecorator("");

    calculator = new Calculator(calculationExpression);

    jest.spyOn(CalculatorFactory, "getInstance").mockReturnValue(calculator);
  });

  test('Test If Attribute: "calculation"; Returns The Calculator Initial Value', () => {
    const { result } = renderHook(() => useCalculator());

    const initialCalculation: string = calculator.getExpression();

    expect(result.current.calculationExpression).toEqual(initialCalculation);
  });

  test('Test If Method: "addCharacter"; Returns Adds Character To Calculator Calculation Expression', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.addCharacter(CalculatorCharacters.ONE);
    });

    const currentCalculation: string = calculator.getExpression();

    expect(currentCalculation).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "backspace"; Removes Last Character From Calculator Calculation', () => {
    const { result } = renderHook(() => useCalculator());

    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ONE);

    act(() => {
      result.current.backspace();
    });

    const currentCalculation: string = calculator.getExpression();

    expect(currentCalculation).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "clean"; Removes All Characters From Calculator Calculation', () => {
    const { result } = renderHook(() => useCalculator());

    calculator.addCharacter(CalculatorCharacters.ONE);

    act(() => {
      result.current.clean();
    });

    const currentCalculation: string = calculator.getExpression();

    expect(currentCalculation).toEqual("");
  });

  test('Test If Method: "evaluate"; Evaluates Expression On Calculator Calculation', () => {
    const { result } = renderHook(() => useCalculator());

    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ONE);

    act(() => {
      result.current.evaluate();
    });

    const currentCalculation: string = calculator.getExpression();

    expect(currentCalculation).toEqual(CalculatorCharacters.TWO);
  });

  test('Test If Attribute: "calculation"; Is Equal To Not Valid Expression Message On Device Language', () => {
    const deviceLanguage: Languages =
      DeviceLanguageRecuperator.getDeviceLanguage();
    const notValidExpressionErrorMessageOnDeviceLanguage: string =
      LanguageFactory.getInstance(
        deviceLanguage,
      ).NOT_VALID_EXPRESSION_ERROR_MESSAGE;
    const { result } = renderHook(() => useCalculator());

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
