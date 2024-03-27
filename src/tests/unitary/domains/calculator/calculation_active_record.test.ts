import { describe, test, expect } from "@jest/globals";
import CalculationActiveRecord from "../../../../domains/calculator/calculation_active_record";
import CalculationActiveRecordFactory from "../../../../domains/calculator/infrastructure/tests/factories/calculation_active_record_factory";
import CalculatorFormatter from "../../../../domains/calculator/infrastructure/formatters/calculator_formatter";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculationActiveRecord"; Behavior', () => {
  test('Test If Method: "getCalculationResult"; Returns The Current Calculation Result Value Correctly', () => {
    const calculationActiveRecord: CalculationActiveRecord =
      CalculationActiveRecordFactory.getInstance(EMPTY_STRING);

    const calculationResultValue: string =
      calculationActiveRecord.getCalculationResult();

    expect(calculationResultValue).toEqual(EMPTY_STRING);
  });

  test('Test If Method: "removeLastCharacter"; Removes The Last Character From Calculation Result Value Correctly', () => {
    const randomCalculationResultValue: string = Math.random().toString();
    const calculationActiveRecord: CalculationActiveRecord =
      CalculationActiveRecordFactory.getInstance(randomCalculationResultValue);

    calculationActiveRecord.removeLastCharacter();

    const randomCalculationResultValueWithoutLastCharacter: string =
      CalculatorFormatter.getStringWithoutLastCharacter(
        randomCalculationResultValue,
      );
    const currentCalculationResultValue: string =
      calculationActiveRecord.getCalculationResult();

    expect(currentCalculationResultValue).toEqual(
      randomCalculationResultValueWithoutLastCharacter,
    );
  });

  test('Test If Method: "removeAllCharacters"; Turns Calculation Result Value Empty Correctly', () => {
    const randomCalculationResultValue: string = Math.random().toString();
    const calculationActiveRecord: CalculationActiveRecord =
      CalculationActiveRecordFactory.getInstance(randomCalculationResultValue);

    calculationActiveRecord.removeAllCharacters();

    const currentCalculationResultValue: string =
      calculationActiveRecord.getCalculationResult();

    expect(currentCalculationResultValue).toEqual(EMPTY_STRING);
  });

  test('Test If Method: "evaluateCalculationResultExpression"; Evaluates Calculation Result Expression Correctly', () => {
    const calculationExpression: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;
    const calculationActiveRecord: CalculationActiveRecord =
      CalculationActiveRecordFactory.getInstance(calculationExpression);

    calculationActiveRecord.evaluateCalculationResultExpression();

    const currentCalculationResultValue: string =
      calculationActiveRecord.getCalculationResult();

    expect(currentCalculationResultValue).toEqual(CalculatorCharacters.TWO);
  });
});

CalculationActiveRecord;
