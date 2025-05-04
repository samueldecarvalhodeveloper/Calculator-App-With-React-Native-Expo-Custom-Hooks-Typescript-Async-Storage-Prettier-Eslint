import { describe, beforeAll, beforeEach, test, expect } from "@jest/globals";
import CalculationExpression from "../../../../domains/calculator/calculation_expression";
import CalculationExpressionActiveRecord from "../../../../domains/calculator/calculation_expression_active_record";
import CalculationExpressionRegister from "../../../../domains/calculator/calculation_expression_register";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";

describe('Test Class: "CalculationExpressionActiveRecord"; Behavior', () => {
  let calculationExpressionActiveRecord: CalculationExpressionActiveRecord;
  let calculationExpressionRegister: CalculationExpressionRegister;

  beforeAll(() => {
    const calculationExpression: CalculationExpression =
      new CalculationExpression("");
    calculationExpressionRegister = new CalculationExpressionRegister(
      calculationExpression,
    );
    calculationExpressionActiveRecord = new CalculationExpressionActiveRecord(
      calculationExpressionRegister,
    );
  });

  beforeEach(() => {
    calculationExpressionRegister.setCalculationExpression("");
  });

  test('Test If Method: "getCalculationExpression"; Returns Current Calculation Expression Correctly', () => {
    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "removeLastCharacterFromCalculationExpression"; Removes Calculation Expression Last Character Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecord.removeLastCharacterFromCalculationExpression();

    const expressionWithoutLastCharacter =
      calculationExpressionRegister.getCalculationExpression();

    expect(expressionWithoutLastCharacter).toEqual(
      CalculatorCharacters.ONE + CalculatorCharacters.ADDITION,
    );
  });

  test('Test if Method: "turnCalculationExpressionEmpty"; Removes All Characters From Calculation Expression Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecord.turnCalculationExpressionEmpty();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test if Method: "evaluateCalculationExpression"; Evaluates Calculation Expression Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecord.evaluateCalculationExpression();

    const evaluatedCalculationExpression: string =
      calculationExpressionRegister.getCalculationExpression();

    expect(evaluatedCalculationExpression).toEqual(CalculatorCharacters.TWO);
  });
});
