import { describe, beforeEach, test, expect } from "@jest/globals";
import Calculator from "../../../domains/calculator/calculator";
import CalculationExpressionDecorator from "../../../domains/calculator/calculation_expression_decorator";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import CalculationExpression from "../../../domains/calculator/calculation_expression";

describe('Test Class: "Calculator"; Behavior', () => {
  let calculator: Calculator;
  let calculationExpression: CalculationExpression;

  beforeEach(() => {
    calculationExpression = new CalculationExpressionDecorator("");

    calculator = new Calculator(calculationExpression);
  });

  test('Test If Method: "getExpression"; Returns Current Calculation Expression', () => {
    const currentCalculationExpressionFromCalculator =
      calculator.getExpression();

    expect(currentCalculationExpressionFromCalculator).toEqual("");
  });

  test('Test If Method: "addCharacter"; Adds Chose Character On Calculation Expression', () => {
    calculator.addCharacter(CalculatorCharacters.ONE);

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "backspace"; Removes Last Character Of Calculation Expression', () => {
    calculationExpression.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpression.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.backspace();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "clean"; Removes All Character From Calculation Expression', () => {
    calculationExpression.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpression.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.clean();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "evaluate"; Evaluates Calculation Expression', () => {
    calculationExpression.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpression.addCharacterToCalculationExpression(
      CalculatorCharacters.ADDITION,
    );
    calculationExpression.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.evaluate();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.TWO);
  });
});
