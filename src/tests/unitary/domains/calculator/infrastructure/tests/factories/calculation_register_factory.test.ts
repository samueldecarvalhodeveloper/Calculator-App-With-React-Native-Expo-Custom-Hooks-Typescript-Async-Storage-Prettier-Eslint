import { describe, test, expect } from "@jest/globals";
import CalculationRegisterFactory from "../../../../../../../domains/calculator/infrastructure/tests/factories/calculation_register_factory";
import CalculationRegister from "../../../../../../../domains/calculator/calculation_register";
import CalculatorCharacters from "../../../../../../../domains/calculator/calculator_characters";

describe('Test Class: "CalculationRegisterFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Instances A Working Class Correctly', () => {
    const initialValue: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    const calculationRegister: CalculationRegister =
      CalculationRegisterFactory.getInstance(initialValue);

    const calculationResult: string =
      calculationRegister.getCalculationResult();

    expect(calculationResult).toEqual(initialValue);
  });
});
