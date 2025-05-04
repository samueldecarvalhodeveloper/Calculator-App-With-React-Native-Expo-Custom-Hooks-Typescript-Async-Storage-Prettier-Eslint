import { describe, test, expect } from "@jest/globals";
import CalculatorSpecifications from "../../../../../domains/calculator/infrastructure/calculator_specifications";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../../constants/domains/calculator/calculation_expression_messages_constants";
import CalculatorCharacters from "../../../../../domains/calculator/calculator_characters";

describe('Test Class: "CalculatorSpecifications"; Behavior', () => {
  test('Test If Method: "isCalculationExpressionEqualToNotValidExpressionExceptionMessage"; Returns True If Expression Is Equal To Not Valid Expression Exception Message Correctly', () => {
    const expressionIsNotValidExpressionExceptionMessage =
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        NOT_VALID_EXPRESSION_ERROR_MESSAGE,
      );
    const expressionIsNotNotValidExpressionExceptionMessage =
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(expressionIsNotValidExpressionExceptionMessage).toBeTruthy();
    expect(expressionIsNotNotValidExpressionExceptionMessage).toBeFalsy();
  });

  test('Test If Method: "isCalculationExpressionEmpty"; Returns True If Calculation Expression Is Empty Correctly', () => {
    const calculationExpressionIsEmpty: boolean =
      CalculatorSpecifications.isCalculationExpressionEmpty("");
    const calculationExpressionIsNotEmpty: boolean =
      CalculatorSpecifications.isCalculationExpressionEmpty(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(calculationExpressionIsEmpty).toBeTruthy();
    expect(calculationExpressionIsNotEmpty).toBeFalsy();
  });

  test('Test If Method: "isCalculationExpressionInfinity"; Returns True If Calculation Expression Is Infinity Correctly', () => {
    const calculationExpressionIsInfinity: boolean =
      CalculatorSpecifications.isCalculationExpressionInfinity(
        Infinity.toString(),
      );
    const calculationExpressionIsNotInfinity: boolean =
      CalculatorSpecifications.isCalculationExpressionInfinity(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(calculationExpressionIsInfinity).toBeTruthy();
    expect(calculationExpressionIsNotInfinity).toBeFalsy();
  });
});
