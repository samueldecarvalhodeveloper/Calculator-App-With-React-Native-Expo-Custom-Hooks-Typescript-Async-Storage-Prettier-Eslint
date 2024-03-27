import { describe, test, expect } from "@jest/globals";
import CalculationRegister from "../../../../domains/calculator/calculation_register";
import CalculationRegisterFactory from "../../../../domains/calculator/infrastructure/tests/factories/calculation_register_factory";
import CalculatorCharactersEnum from "../../../../domains/calculator/calculator_characters";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculationRegister"; Behavior', () => {
  test('Test If Method: "concatenateCharacterToCalculationResult"; Adds New Character To The End Of The Calculation Result Correctly', () => {
    const calculationRegister: CalculationRegister =
      CalculationRegisterFactory.getInstance(EMPTY_STRING);

    calculationRegister.concatenateCharacterToCalculationResult(
      CalculatorCharactersEnum.ONE,
    );

    expect(calculationRegister.getCalculationResult()).toEqual(
      CalculatorCharactersEnum.ONE,
    );
  });

  test('Test If Method: "getCalculationResult"; Returns Current Calculation Result Value Correctly', () => {
    const calculationRegister: CalculationRegister =
      CalculationRegisterFactory.getInstance(EMPTY_STRING);

    const currentCalculationResult: string =
      calculationRegister.getCalculationResult();

    expect(currentCalculationResult).toEqual(EMPTY_STRING);
  });

  test('Test If Method: "replaceCalculationResult"; Replace Current Calculation Result Value To New Value Correctly', () => {
    const calculationResultNewValue: string =
      CalculatorCharactersEnum.ONE +
      CalculatorCharactersEnum.ADDITION +
      CalculatorCharactersEnum.ONE;
    const calculationRegister: CalculationRegister =
      CalculationRegisterFactory.getInstance(EMPTY_STRING);

    calculationRegister.replaceCalculationResult(calculationResultNewValue);

    const currentCalculationResult: string =
      calculationRegister.getCalculationResult();

    expect(currentCalculationResult).toEqual(calculationResultNewValue);
  });
});
