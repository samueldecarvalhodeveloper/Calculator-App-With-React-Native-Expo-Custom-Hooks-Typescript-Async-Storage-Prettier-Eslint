import { describe, expect, test } from "@jest/globals";
import CalculationResultEvaluationAdapter from "../../../../domains/calculator/calculation_result_evaluation_adapter";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../constants/domains/calculator/calculation_result_messages_constants";

describe('Test Class: "CalculationResultEvaluationAdapter"; Behavior', () => {
  test('Test If Method: "getEvaluatedCurrentCalculationResultExpression"; Returns The Current Calculation Result Expression Evaluated Correctly', () => {
    const currentCalculationResult: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    const currentCalculationResultExpressionEvaluated =
      CalculationResultEvaluationAdapter.getEvaluatedCurrentCalculationResultExpression(
        currentCalculationResult,
      );

    expect(currentCalculationResultExpressionEvaluated).toEqual(
      CalculatorCharacters.TWO,
    );
  });

  test('Test If Method: "getEvaluatedCurrentCalculationResultExpression"; Returns A Not Valid Expression Error Message If A Not Valid Expression Evaluation Error Is Caught Correctly', () => {
    const currentCalculationResult: string =
      CalculatorCharacters.DIVISION + CalculatorCharacters.DIVISION;

    const currentCalculationResultExpressionEvaluated =
      CalculationResultEvaluationAdapter.getEvaluatedCurrentCalculationResultExpression(
        currentCalculationResult,
      );

    expect(currentCalculationResultExpressionEvaluated).toEqual(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );
  });

  test('Test If Method: "getEvaluatedCurrentCalculationResultExpression"; Returns A Not Valid Expression Error Message If Expression Is Not Valid Correctly', () => {
    const currentCalculationResult: string =
      CalculatorCharacters.ZERO +
      CalculatorCharacters.DIVISION +
      CalculatorCharacters.ZERO;

    const currentCalculationResultExpressionEvaluated =
      CalculationResultEvaluationAdapter.getEvaluatedCurrentCalculationResultExpression(
        currentCalculationResult,
      );

    expect(currentCalculationResultExpressionEvaluated).toEqual(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );
  });
});
