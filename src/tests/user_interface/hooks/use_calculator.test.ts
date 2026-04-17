import { describe, beforeEach, test, expect, jest } from "@jest/globals";
import { act, renderHook } from "@testing-library/react-native";
import Characters from "../../../domains/calculator/characters";
import LanguageFactory from "../../../dependency_injection/language_factory";
import Languages from "../../../user_interface/internals/enums/languages";
import Calculator from "../../../domains/calculator/calculator";
import useCalculator from "../../../user_interface/hooks/use_calculator";
import DeviceLanguageRecuperator from "../../../user_interface/internals/device_language_recuperator/device_language_recuperator";
import CalculatorFactory from "../../../dependency_injection/calculator_factory";

describe('Test Hook: "useCalculator"; Behavior', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator("");

    jest.spyOn(CalculatorFactory, "getInstance").mockReturnValue(calculator);
  });

  test("Test Stored Expression Is Set On Mount", () => {
    const { result } = renderHook(() => useCalculator());

    expect(result.current.expression).toEqual(calculator.expression);
  });

  test('Test If Method: "addCharacter"; Adds Character To Calculator Expression', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.addCharacter(Characters.ONE);
    });

    expect(calculator.expression).toEqual(Characters.ONE);
  });

  test('Test If Method: "backspace"; Removes Last Character From Calculator', () => {
    const { result } = renderHook(() => useCalculator());

    calculator.addCharacter(Characters.ONE);
    calculator.addCharacter(Characters.ONE);

    act(() => {
      result.current.backspace();
    });

    expect(calculator.expression).toEqual(Characters.ONE);
  });

  test('Test If Method: "clean"; Removes All Characters From Calculator', () => {
    const { result } = renderHook(() => useCalculator());

    calculator.addCharacter(Characters.ONE);

    act(() => {
      result.current.clean();
    });

    expect(calculator.expression).toEqual("");
  });

  test('Test If Method: "evaluate"; Evaluates Expression On Calculator', () => {
    const { result } = renderHook(() => useCalculator());

    calculator.addCharacter(Characters.ONE);
    calculator.addCharacter(Characters.ADDITION);
    calculator.addCharacter(Characters.ONE);

    act(() => {
      result.current.evaluate();
    });

    expect(calculator.expression).toEqual(Characters.TWO);
  });

  test('Test If Method: "evaluate"; Set Expression To Not Valid Expression Error Message On Device Language If Expression Is Not Valid', () => {
    const deviceLanguage: Languages =
      DeviceLanguageRecuperator.getDeviceLanguage();
    const notValidExpressionErrorMessageOnDeviceLanguage: string =
      LanguageFactory.getInstance(
        deviceLanguage,
      ).NOT_VALID_EXPRESSION_ERROR_MESSAGE;
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.addCharacter(Characters.ADDITION);
      result.current.addCharacter(Characters.ADDITION);

      result.current.evaluate();
    });

    act(() => {
      expect(result.current.expression).toEqual(
        notValidExpressionErrorMessageOnDeviceLanguage,
      );
    });
  });
});
