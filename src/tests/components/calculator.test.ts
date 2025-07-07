import { describe, beforeAll, beforeEach, test, expect } from "@jest/globals";
import Calculator from "../../domains/calculator/calculator";
import CalculationExpressionActiveRecord from "../../domains/calculator/calculation_expression_active_record";
import CalculationExpression from "../../domains/calculator/calculation_expression";
import CalculationExpressionRegister from "../../domains/calculator/calculation_expression_register";
import CalculationExpressionActiveRecordDecorator from "../../domains/calculator/calculation_expression_active_record_decorator";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";

describe('Test Component: "Calculator"; Behavior', () => {
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

  test('Test If Calculation Expression Is Get Correctly', () => {
    const currentCalculationExpressionFromCalculationExpressionActiveRecord =
      calculationExpressionActiveRecord.getCalculationExpression();
    const currentCalculationExpressionFromCalculator =
      calculator.getExpression();

    expect(currentCalculationExpressionFromCalculator).toEqual(
      currentCalculationExpressionFromCalculationExpressionActiveRecord,
    );
  });

  test('Test Character Is Added To Calculation Expression Correctly', () => {
    calculator.addCharacter(CalculatorCharacters.ONE);

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Calculation Expression Last Character Is Removed Correctly', () => {
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

  test('Test If Calculation Expression Is Cleaned Correctly', () => {
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

  test('Test If Calculation Expression is Evaluated Correctly', () => {
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
