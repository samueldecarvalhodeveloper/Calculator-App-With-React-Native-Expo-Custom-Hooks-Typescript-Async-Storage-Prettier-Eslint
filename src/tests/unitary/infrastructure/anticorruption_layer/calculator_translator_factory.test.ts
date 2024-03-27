import { describe, test, expect } from "@jest/globals";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import CalculatorTranslator from "../../../../infrastructure/anticorruption_layer/calculator_translator";
import CalculatorTranslatorFactory from "../../../../infrastructure/anticorruption_layer/calculator_translator_factory";

describe('Test Class: "CalculatorTranslator"; Behavior', () => {
  test('Test If Method: "getCalculationResult"; Returns The Current Calculation Result Expression Correctly', () => {
    const calculatorTranslator: CalculatorTranslator =
      CalculatorTranslatorFactory.getInstance(EMPTY_STRING);

    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);

    const currentCalculationResult: string =
      calculatorTranslator.getCalculationResult();

    expect(currentCalculationResult).toEqual(CalculatorCharacters.ONE);
  });
});
