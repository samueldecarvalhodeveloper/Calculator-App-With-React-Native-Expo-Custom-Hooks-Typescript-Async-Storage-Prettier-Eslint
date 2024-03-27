import { describe, expect, test } from "@jest/globals";
import CalculatorSpecifications from "../../../../../../domains/calculator/infrastructure/specifications/calculator_specifications";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../../../constants/domains/calculator/calculation_result_messages_constants";
import CalculatorCharactersEnum from "../../../../../../domains/calculator/calculator_characters";
import { INFINITY } from "../../../../../../constants/domains/calculator/calculation_result_expression_results_constants";
import { EMPTY_STRING } from "../../../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculatorSpecifications"; Behavior', () => {
  test('Test If Method: "isCalculationResultAErrorMessage"; Returns True If Calculation Result Is A Error Message Correctly', () => {
    expect(
      CalculatorSpecifications.isCalculationResultAErrorMessage(
        NOT_VALID_EXPRESSION_ERROR_MESSAGE,
      ),
    ).toBeTruthy();
    expect(
      CalculatorSpecifications.isCalculationResultAErrorMessage(EMPTY_STRING),
    ).toBeFalsy();
  });

  test('Test If Method: "isCalculationResultAnEmptyString"; Returns True If Calculation Result Is A Empty String Correctly', () => {
    const notEmptyCalculationResultExpression: string =
      CalculatorCharactersEnum.ONE +
      CalculatorCharactersEnum.ADDITION +
      CalculatorCharactersEnum.ONE;

    expect(
      CalculatorSpecifications.isCalculationResultAnEmptyString(EMPTY_STRING),
    ).toBeTruthy();
    expect(
      CalculatorSpecifications.isCalculationResultAnEmptyString(
        notEmptyCalculationResultExpression,
      ),
    ).toBeFalsy();
  });

  test('Test If Method: "isCalculationResultNotANumber"; Returns True If Calculation Result Is Not A Number Correctly', () => {
    const validCalculationResultExpression: string =
      CalculatorCharactersEnum.ONE +
      CalculatorCharactersEnum.ADDITION +
      CalculatorCharactersEnum.ONE;
    const notANumberCalculationResultValue: string = Number.NaN.toString();

    expect(
      CalculatorSpecifications.isCalculationResultNotANumber(
        notANumberCalculationResultValue,
      ),
    ).toBeTruthy();
    expect(
      CalculatorSpecifications.isCalculationResultNotANumber(
        validCalculationResultExpression,
      ),
    ).toBeFalsy();
  });

  test('Test If Method: "isCalculationResultEqualInfinity"; Returns True If Calculation Result Is Equal To Infinity Correctly', () => {
    const validCalculationResultExpression: string =
      CalculatorCharactersEnum.ONE +
      CalculatorCharactersEnum.ADDITION +
      CalculatorCharactersEnum.ONE;
    const infinityCalculationResultValue: string = INFINITY;

    expect(
      CalculatorSpecifications.isCalculationResultEqualInfinity(
        infinityCalculationResultValue,
      ),
    ).toBeTruthy();
    expect(
      CalculatorSpecifications.isCalculationResultEqualInfinity(
        validCalculationResultExpression,
      ),
    ).toBeFalsy();
  });
});
