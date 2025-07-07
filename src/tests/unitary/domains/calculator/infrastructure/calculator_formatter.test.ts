import { describe, test, expect } from "@jest/globals";
import CalculatorCharacters from "../../../../../domains/calculator/calculator_characters";
import CalculatorFormatter from "../../../../../domains/calculator/infrastructure/calculator_formatter";

describe('Test Class: "CalculatorFormatter"; Behavior', () => {
  test('Test If Method: "getCalculationExpressionWithoutLastCharacter"; Returns Calculation Expression Without Last Character Correctly', () => {
    const calculationExpressionWithoutLastCharacter =
      CalculatorFormatter.getCalculationExpressionWithoutLastCharacter(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(calculationExpressionWithoutLastCharacter).toEqual(
      CalculatorCharacters.ONE + CalculatorCharacters.ADDITION,
    );
  });
});
