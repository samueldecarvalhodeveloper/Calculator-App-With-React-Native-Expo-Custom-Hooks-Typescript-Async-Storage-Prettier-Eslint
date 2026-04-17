import { describe, test, expect } from "@jest/globals";
import Characters from "../../../../../domains/calculator/characters";
import ExpressionEvaluator from "../../../../../domains/calculator/internals/adapters/expression_evaluator";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../../constants/domains/calculator_constants";

describe('Test Class: "ExpressionEvaluator" Behavior', () => {
  test('Test If Method "getEvaluatedExpression" Returns Evaluated Expression ', () => {
    const evaluatedExpression: string =
      ExpressionEvaluator.getEvaluatedExpression(
        Characters.ONE + Characters.ADDITION + Characters.ONE,
      );

    expect(evaluatedExpression).toEqual(Characters.TWO);
  });

  test('Test If Method "getEvaluatedExpression" Returns Not Valid Expression Exception If Expression Is Not Valid', () => {
    const evaluatedExpression = ExpressionEvaluator.getEvaluatedExpression(
      Characters.ADDITION,
    );

    expect(evaluatedExpression).toEqual(NOT_VALID_EXPRESSION_ERROR_MESSAGE);
  });
});
