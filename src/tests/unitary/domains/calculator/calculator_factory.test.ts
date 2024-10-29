import { describe, test, expect } from "@jest/globals";
import CalculatorFactory from "../../../../domains/calculator/calculator_factory";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import { SIMPLE_CALCULATOR_CALCULATION_EXPRESSION } from "../../../../constants/ui_constants";

describe('Test Class: "CalculatorFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Returns A Working Instance', () => {
    const calculator = CalculatorFactory.getInstance(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );

    expect(calculator.getExpression()).toEqual(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );

    calculator.clean();

    expect(calculator.getExpression()).toEqual("");

    calculator.addCharacter(CalculatorCharacters.ONE);

    expect(calculator.getExpression()).toEqual(CalculatorCharacters.ONE);

    calculator.backspace();

    expect(calculator.getExpression()).toEqual("");
  });
});
