import { describe, test, expect } from "@jest/globals";
import Characters from "../../../../../domains/calculator/characters";
import CalculatorFormatter from "../../../../../domains/calculator/internals/formatters/calculator_formatter";

describe('Test Class: "CalculatorFormatter"; Behavior', () => {
  test('Test If Method: "getCalculationExpressionWithoutLastCharacter"; Returns Calculation Expression Without Last Character', () => {
    const calculationExpressionWithoutLastCharacter =
      CalculatorFormatter.getCalculationExpressionWithoutLastCharacter(
        Characters.ONE + Characters.ADDITION + Characters.ONE,
      );

    expect(calculationExpressionWithoutLastCharacter).toEqual(
      Characters.ONE + Characters.ADDITION,
    );
  });
});
