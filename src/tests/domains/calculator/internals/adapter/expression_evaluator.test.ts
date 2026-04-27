import { describe, test, expect } from "@jest/globals";
import Characters from "../../../../../domains/calculator/characters";
import ExpressionEvaluator from "../../../../../domains/calculator/internals/adapters/expression_evaluator";
import NotValidExpressionError from "../../../../../domains/calculator/internals/errors/not_valid_expression_error";

describe('Test Class: "ExpressionEvaluator" Behavior', () => {
  test('Test If Method "getEvaluatedExpression" Returns Evaluated Expression', () => {
    const evaluatedExpression: string =
      ExpressionEvaluator.getEvaluatedExpression(
        Characters.ONE + Characters.ADDITION + Characters.ONE,
      );

    expect(evaluatedExpression).toEqual(Characters.TWO);
  });

  test('Test If Method "getEvaluatedExpression" Returns Throws "NotValidExpressionError" If Expression Is Not Valid', () => {
    try {
      ExpressionEvaluator.getEvaluatedExpression(Characters.ADDITION);
    } catch (error) {
      expect(error instanceof NotValidExpressionError).toBeTruthy();
    }

    try {
      ExpressionEvaluator.getEvaluatedExpression(
        Characters.ONE + Characters.DIVISION + Characters.ZERO,
      );
    } catch (error) {
      expect(error instanceof NotValidExpressionError).toBeTruthy();
    }

    try {
      ExpressionEvaluator.getEvaluatedExpression(
        Characters.ZERO + Characters.DIVISION + Characters.ZERO,
      );
    } catch (error) {
      expect(error instanceof NotValidExpressionError).toBeTruthy();
    }
  });
});
