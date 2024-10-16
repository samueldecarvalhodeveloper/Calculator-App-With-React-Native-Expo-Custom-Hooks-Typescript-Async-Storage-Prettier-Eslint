import { describe, test, expect } from "@jest/globals";
import GenerateCalculationExpressionErrorMessageAdapter from "../../../generate_calculation_expression_error_message_adapter/generate_calculation_expression_error_message_adapter";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../constants/domains/calculator/calculation_expression_messages_constants";
import Calculator from "../../../domains/calculator/calculator";
import CalculatorFactory from "../../../domains/calculator/calculator_factory";

describe('Test Class: "GenerateCalculationExpressionErrorMessageAdapter"; Behavior', () => {
  test('Test If Method: "generateErrorMessage"; Generates And Error Message On Calculator Calculation Expression Correctly', () => {
    const calculator: Calculator = CalculatorFactory.getInstance("");

    GenerateCalculationExpressionErrorMessageAdapter.generateErrorMessage(
      calculator,
    );

    const currentCalculationExpression: string = calculator.getExpression();

    expect(currentCalculationExpression).toEqual(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );
  });
});
