import { describe, beforeAll, beforeEach, test, expect } from "@jest/globals";
import CalculationExpression from "../../../../domains/calculator/calculation_expression";
import CalculationExpressionActiveRecordDecorator from "../../../../domains/calculator/calculation_expression_active_record_decorator";
import CalculationExpressionRegister from "../../../../domains/calculator/calculation_expression_register";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../constants/domains/calculator/calculation_expression_messages_constants";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";

describe('Test Class: "CalculationExpressionActiveRecordDecorator"; Behavior', () => {
  let calculationExpressionRegister: CalculationExpressionRegister;
  let calculationExpressionActiveRecordDecorator: CalculationExpressionActiveRecordDecorator;

  beforeAll(() => {
    const calculationExpression = new CalculationExpression("");
    calculationExpressionRegister = new CalculationExpressionRegister(
      calculationExpression,
    );
    calculationExpressionActiveRecordDecorator =
      new CalculationExpressionActiveRecordDecorator(
        calculationExpressionRegister,
      );
  });

  beforeEach(() => {
    calculationExpressionRegister.setCalculationExpression("");
  });

  test('Test If Method: "addCharacterToCalculationExpression"; Turns Expression Empty If Expression Is Equal To Not Valid Expression Exception Message Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );

    calculationExpressionActiveRecordDecorator.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "addCharacterToCalculationExpression"; Turns Expression Empty If Expression Is Equal To Infinity Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(Infinity.toString());

    calculationExpressionActiveRecordDecorator.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "addCharacterToCalculationExpression"; Add Chose Character Correctly', () => {
    calculationExpressionActiveRecordDecorator.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "removeLastCharacterFromCalculationExpression"; Turns Expression Empty If It Is Equal To Not Valid Expression Exception Message Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );

    calculationExpressionActiveRecordDecorator.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "removeLastCharacterFromCalculationExpression"; Turns Expression Empty If It Is Equal To Infinity Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(Infinity.toString());

    calculationExpressionActiveRecordDecorator.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "removeLastCharacterFromCalculationExpression"; Keeps Expression Empty If It Is Empty Correctly', () => {
    calculationExpressionActiveRecordDecorator.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "removeLastCharacterFromCalculationExpression"; Removes Last Character From Expression Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecordDecorator.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(
      CalculatorCharacters.ONE + CalculatorCharacters.ADDITION,
    );
  });

  test('Test If Method: "evaluateCalculationExpression"; Turns Expression Empty If It Is Equal To Not Valid Expression Exception Message Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );

    calculationExpressionActiveRecordDecorator.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "evaluateCalculationExpression"; Turns Expression Empty If It Is Equal To Infinity Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(Infinity.toString());

    calculationExpressionActiveRecordDecorator.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "evaluateCalculationExpression"; Keeps Expression Empty If Expression Is Already Empty Correctly', () => {
    calculationExpressionActiveRecordDecorator.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "evaluateCalculationExpression"; Evaluates Expression Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecordDecorator.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.TWO);
  });
});
