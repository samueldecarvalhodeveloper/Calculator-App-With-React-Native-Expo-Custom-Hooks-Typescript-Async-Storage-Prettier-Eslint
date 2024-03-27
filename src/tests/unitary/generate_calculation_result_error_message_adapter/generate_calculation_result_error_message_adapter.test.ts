import { describe, test, expect } from "@jest/globals";
import GenerateCalculationResultErrorMessageAdapter from "../../../generate_calculation_result_error_message_adapter/generate_calculation_result_error_message_adapter";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../constants/domains/calculator/calculation_result_messages_constants";
import CalculatorTranslator from "../../../infrastructure/anticorruption_layer/calculator_translator";
import CalculatorTranslatorFactory from "../../../infrastructure/anticorruption_layer/calculator_translator_factory";
import { EMPTY_STRING } from "../../../constants/strings_utilities_constants";

describe('Test Class: "GenerateCalculationResultErrorMessageAdapter"; Behavior', () => {
  test('Test If Method: "generateErrorMessage"; Generates And Error Message On Calculator Calculation Result Expression Correctly', () => {
    const calculatorTranslator: CalculatorTranslator =
      CalculatorTranslatorFactory.getInstance(EMPTY_STRING);

    GenerateCalculationResultErrorMessageAdapter.generateErrorMessage(
      calculatorTranslator,
    );

    const currentCalculationResult: string =
      calculatorTranslator.getCalculationResult();

    expect(currentCalculationResult).toEqual(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );
  });
});
