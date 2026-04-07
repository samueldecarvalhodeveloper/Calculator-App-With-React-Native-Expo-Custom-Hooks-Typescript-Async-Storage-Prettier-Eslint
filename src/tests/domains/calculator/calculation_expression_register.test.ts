import { describe, beforeEach, test, expect } from "@jest/globals";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import CalculationExpression from "../../../domains/calculator/calculation_expression";

describe('Test Class: "CalculationExpression"; Behavior', () => {
  let calculationExpression: CalculationExpression;

  beforeEach(() => {
    calculationExpression = new CalculationExpression("");
  });

  test('Test If Method: "getCalculationExpression"; Returns Current Calculation Expression', () => {
    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "removeLastCharacterFromCalculationExpression"; Removes Calculation Expression Last Character', () => {
    calculationExpression = new CalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpression.removeLastCharacterFromCalculationExpression();

    const expressionWithoutLastCharacter =
      calculationExpression.getCalculationExpression();

    expect(expressionWithoutLastCharacter).toEqual(
      CalculatorCharacters.ONE + CalculatorCharacters.ADDITION,
    );
  });

  test('Test if Method: "turnCalculationExpressionEmpty"; Removes All Characters From Calculation Expression', () => {
    calculationExpression = new CalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpression.turnCalculationExpressionEmpty();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test if Method: "evaluateCalculationExpression"; Evaluates Calculation Expression', () => {
    calculationExpression = new CalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpression.evaluateCalculationExpression();

    const evaluatedCalculationExpression: string =
      calculationExpression.getCalculationExpression();

    expect(evaluatedCalculationExpression).toEqual(CalculatorCharacters.TWO);
  });
});
