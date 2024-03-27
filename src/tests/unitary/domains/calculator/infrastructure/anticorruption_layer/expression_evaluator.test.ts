import { describe, test, expect } from "@jest/globals";
import ExpressionEvaluator from "../../../../../../domains/calculator/infrastructure/anticorruption_layer/expression_evaluator";
import CalculatorCharacters from "../../../../../../domains/calculator/calculator_characters";

describe('Test Class: "ExpressionEvaluator"; Behavior', () => {
  test('Test If Method: "getEvaluatedExpression"; Returns The Expression Evaluated Correctly', () => {
    const expression: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    const evaluatedExpression: string =
      ExpressionEvaluator.getEvaluatedExpression(expression);

    expect(evaluatedExpression).toEqual(CalculatorCharacters.TWO);
  });
});
