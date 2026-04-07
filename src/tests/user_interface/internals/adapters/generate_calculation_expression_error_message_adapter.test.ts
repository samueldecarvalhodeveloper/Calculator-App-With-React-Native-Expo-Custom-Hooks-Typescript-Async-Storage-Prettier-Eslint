import { describe, test, expect } from "@jest/globals";
import CalculatorFactory from "../../../../dependency_injection/calculator_factory";
import GenerateCalculationExpressionErrorMessageAdapter from "../../../../user_interface/internals/adapters/generate_calculation_expression_error_message_adapter";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../constants/domains/calculator_constants";

describe('Test Class: "GenerateCalculationExpressionErrorMessageAdapter"; Behavior', () => {
  test('Test If Method: "generateErrorMessage"; Generates And Error Message On Calculator Calculation Expression', () => {
    const calculator = CalculatorFactory.getInstance("");

    GenerateCalculationExpressionErrorMessageAdapter.generateErrorMessage(
      calculator,
    );

    const currentCalculationExpression = calculator.getExpression();

    expect(currentCalculationExpression).toEqual(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );
  });
});
