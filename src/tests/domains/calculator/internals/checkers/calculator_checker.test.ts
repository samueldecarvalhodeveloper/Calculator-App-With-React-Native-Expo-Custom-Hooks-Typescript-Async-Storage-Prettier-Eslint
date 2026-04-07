import { describe, test, expect } from "@jest/globals";
import CalculatorChecker from "../../../../../domains/calculator/internals/checkers/calculator_checker";
import CalculatorCharacters from "../../../../../domains/calculator/calculator_characters";
import {
  INFINITY,
  NOT_VALID_EXPRESSION_ERROR_MESSAGE,
} from "../../../../../constants/domains/calculator_constants";

describe('Test Class: "CalculatorChecker"; Behavior', () => {
  test('Test If Method: "isCalculationExpressionEqualToNotValidExpressionExceptionMessage"; Returns True If Expression Is Equal To Not Valid Expression Exception Message', () => {
    expect(
      CalculatorChecker.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        NOT_VALID_EXPRESSION_ERROR_MESSAGE,
      ),
    ).toBeTruthy();
    expect(
      CalculatorChecker.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      ),
    ).toBeFalsy();
  });

  test('Test If Method: "isCalculationExpressionEmpty"; Returns True If Calculation Expression Is Empty', () => {
    expect(CalculatorChecker.isCalculationExpressionEmpty("")).toBeTruthy();
    expect(
      CalculatorChecker.isCalculationExpressionEmpty(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      ),
    ).toBeFalsy();
  });

  test('Test If Method: "isCalculationExpressionInfinity"; Returns True If Calculation Expression Is Infinity', () => {
    expect(
      CalculatorChecker.isCalculationExpressionInfinity(INFINITY),
    ).toBeTruthy();
    expect(
      CalculatorChecker.isCalculationExpressionInfinity(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      ),
    ).toBeFalsy();
  });
});
