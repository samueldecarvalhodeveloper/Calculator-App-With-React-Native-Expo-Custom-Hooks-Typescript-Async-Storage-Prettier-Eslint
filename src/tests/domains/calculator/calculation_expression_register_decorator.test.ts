import { describe, beforeEach, test, expect } from "@jest/globals";
import CalculationExpressionDecorator from "../../../domains/calculator/calculation_expression_decorator";
import CalculationExpression from "../../../domains/calculator/calculation_expression";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import {
  INFINITY,
  NOT_VALID_EXPRESSION_ERROR_MESSAGE,
} from "../../../constants/domains/calculator_constants";

describe('Test Class: "calculationExpression"; Behavior', () => {
  let calculationExpression: CalculationExpression;

  beforeEach(() => {
    calculationExpression = new CalculationExpressionDecorator("");
  });

  test('Test If Method: "addCharacterToCalculationExpression"; Turns Expression Empty If Expression Is Equal To Not Valid Expression Exception Message', () => {
    calculationExpression = new CalculationExpressionDecorator(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );

    calculationExpression.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "addCharacterToCalculationExpression"; Turns Expression Empty If Expression Is Equal To Infinity', () => {
    calculationExpression = new CalculationExpressionDecorator(INFINITY);

    calculationExpression.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "addCharacterToCalculationExpression"; Add Chose Character', () => {
    calculationExpression.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "removeLastCharacterFromCalculationExpression"; Turns Expression Empty If It Is Equal To Not Valid Expression Exception Message', () => {
    calculationExpression = new CalculationExpressionDecorator(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );

    calculationExpression.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "removeLastCharacterFromCalculationExpression"; Turns Expression Empty If It Is Equal To Infinity', () => {
    calculationExpression = new CalculationExpressionDecorator(INFINITY);

    calculationExpression.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "removeLastCharacterFromCalculationExpression"; Keeps Expression Empty If It Is Empty', () => {
    calculationExpression.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "removeLastCharacterFromCalculationExpression"; Removes Last Character From Expression', () => {
    calculationExpression = new CalculationExpressionDecorator(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpression.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(
      CalculatorCharacters.ONE + CalculatorCharacters.ADDITION,
    );
  });

  test('Test If Method: "evaluateCalculationExpression"; Turns Expression Empty If It Is Equal To Not Valid Expression Exception Message', () => {
    calculationExpression = new CalculationExpressionDecorator(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );

    calculationExpression.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "evaluateCalculationExpression"; Turns Expression Empty If It Is Equal To Infinity', () => {
    calculationExpression = new CalculationExpressionDecorator(INFINITY);

    calculationExpression.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "evaluateCalculationExpression"; Keeps Expression Empty If Expression Is Already Empty', () => {
    calculationExpression.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "evaluateCalculationExpression"; Evaluates Expression', () => {
    calculationExpression = new CalculationExpressionDecorator(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpression.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.TWO);
  });
});
