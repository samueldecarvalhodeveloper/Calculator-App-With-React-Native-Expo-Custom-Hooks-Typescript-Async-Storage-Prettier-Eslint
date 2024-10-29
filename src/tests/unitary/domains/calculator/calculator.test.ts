import { describe, beforeAll, beforeEach, test, expect } from "@jest/globals";
import Calculator from "../../../../domains/calculator/calculator";
import CalculationExpressionActiveRecord from "../../../../domains/calculator/calculation_expression_active_record";
import CalculationExpression from "../../../../domains/calculator/calculation_expression";
import CalculationExpressionRegister from "../../../../domains/calculator/calculation_expression_register";
import CalculationExpressionActiveRecordDecorator from "../../../../domains/calculator/calculation_expression_active_record_decorator";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";

describe('Test Class: "Calculator"; Behavior', () => {
  let calculator: Calculator;
  let calculationExpressionActiveRecord: CalculationExpressionActiveRecord;

  beforeAll(() => {
    const calculationExpression: CalculationExpression =
      new CalculationExpression("");
    const calculationExpressionRegister: CalculationExpressionRegister =
      new CalculationExpressionRegister(calculationExpression);
    calculationExpressionActiveRecord =
      new CalculationExpressionActiveRecordDecorator(
        calculationExpressionRegister,
      );

    calculator = new Calculator(calculationExpressionActiveRecord);
  });

  beforeEach(() => {
    calculationExpressionActiveRecord.turnCalculationExpressionEmpty();
  });

  test('Test If Method: "getExpression"; Returns Current Calculation Expression Correctly', () => {
    const currentCalculationExpressionFromCalculationExpressionActiveRecord =
      calculationExpressionActiveRecord.getCalculationExpression();
    const currentCalculationExpressionFromCalculator =
      calculator.getExpression();

    expect(currentCalculationExpressionFromCalculator).toEqual(
      currentCalculationExpressionFromCalculationExpressionActiveRecord,
    );
  });

  test('Test If Method: "addCharacter"; Adds Chose Character On Calculation Expression Correctly', () => {
    calculator.addCharacter(CalculatorCharacters.ONE);

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "backspace"; Removes Last Character Of Calculation Expression Correctly', () => {
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.backspace();

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "clean"; Removes All Character From Calculation Expression Correctly', () => {
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.clean();

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  test('Test If Method: "evaluate"; Evaluates Calculation Expression Correctly', () => {
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ADDITION,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.evaluate();

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.TWO);
  });
});
