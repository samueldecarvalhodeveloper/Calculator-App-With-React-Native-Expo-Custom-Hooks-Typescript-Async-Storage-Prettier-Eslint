import { describe, test, expect } from "@jest/globals";
import CalculationActiveRecordFactory from "../../../../../../../domains/calculator/infrastructure/tests/factories/calculation_active_record_factory";
import CalculationActiveRecord from "../../../../../../../domains/calculator/calculation_active_record";
import CalculatorCharacters from "../../../../../../../domains/calculator/calculator_characters";

describe('Test Class: "CalculationActiveRecordFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Instances A Working Class Correctly', () => {
    const initialValue: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    const calculationActiveRecord: CalculationActiveRecord =
      CalculationActiveRecordFactory.getInstance(initialValue);

    const calculationResult: string =
      calculationActiveRecord.getCalculationResult();

    expect(calculationResult).toEqual(initialValue);
  });
});
