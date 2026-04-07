import { describe, test, expect } from "@jest/globals";
import CalculatorCharacters from "../../../../../domains/calculator/calculator_characters";
import ExpressionEvaluator from "../../../../../domains/calculator/internals/adapters/expression_evaluator";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../../constants/domains/calculator_constants";

describe('Test Class: "ExpressionEvaluator" Behavior', () => {
  test('Test If Method "getEvaluatedExpression" Returns Evaluated Expression ', () => {
    const evaluatedExpression: string =
      ExpressionEvaluator.getEvaluatedExpression(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(evaluatedExpression).toEqual(CalculatorCharacters.TWO);
  });

  test('Test If Method "getEvaluatedExpression" Returns Not Valid Expression Exception If Expression Is Not Valid', () => {
    const evaluatedExpression = ExpressionEvaluator.getEvaluatedExpression(
      CalculatorCharacters.ADDITION,
    );

    expect(evaluatedExpression).toEqual(NOT_VALID_EXPRESSION_ERROR_MESSAGE);
  });
});
