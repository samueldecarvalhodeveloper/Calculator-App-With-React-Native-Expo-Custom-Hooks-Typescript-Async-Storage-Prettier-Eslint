import { describe, test, expect } from "@jest/globals";
import CalculatorFactory from "../../dependency_injection/calculator_factory";
import { SIMPLE_CALCULATOR_CALCULATION_EXPRESSION } from "../../constants/user_interface_constants";

describe('Test Class: "CalculatorFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Returns An Instance', () => {
    const calculator = CalculatorFactory.getInstance(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );

    const calculatorExpression = calculator.getExpression();

    expect(calculatorExpression).toEqual(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );
  });
});
