import { describe, expect, test } from "@jest/globals";
import CalculationActiveRecordDecorator from "../../../../../../../domains/calculator/calculation_active_record_decorator";
import CalculationActiveRecordDecoratorFactory from "../../../../../../../domains/calculator/infrastructure/tests/factories/calculation_active_record_decorator_factory";
import CalculatorCharacters from "../../../../../../../domains/calculator/calculator_characters";

describe('Test Class: "CalculationActiveRecordDecoratorFactory"; Correctly', () => {
  test('Test If Method: "getInstance"; Instantiates A Working Class Correctly', () => {
    const initialValue: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    const calculationActiveRecordDecorator: CalculationActiveRecordDecorator =
      CalculationActiveRecordDecoratorFactory.getInstance(initialValue);

    const currentCalculationResult: string =
      calculationActiveRecordDecorator.getCalculationResult();

    expect(currentCalculationResult).toEqual(initialValue);
  });
});
