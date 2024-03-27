import { describe, test, expect } from "@jest/globals";
import CalculationResultReconciliationAdapter from "../../../calculation_result_reconciliation_adapter/calculation_result_reconciliation_adapter";
import UiCalculatorCharacters from "../../../calculator_characters/ui_calculator_characters";
import CalculatorTranslatorFactory from "../../../infrastructure/anticorruption_layer/calculator_translator_factory";
import { EMPTY_STRING } from "../../../constants/strings_utilities_constants";
import CalculatorTranslator from "../../../infrastructure/anticorruption_layer/calculator_translator";

describe('Test Class: "CalculationResultReconciliationAdapter"; Behavior', () => {
  test('Test If Method: "reconciliateCalculatorCalculationResultExpression"; Reconciles Stored Calculation Result Expression With The Calculator Calculation Result Expression Correctly', () => {
    const storedCalculationResult: string =
      UiCalculatorCharacters.ONE +
      UiCalculatorCharacters.ADDITION +
      UiCalculatorCharacters.ONE;

    const calculatorTranslator: CalculatorTranslator =
      CalculatorTranslatorFactory.getInstance(EMPTY_STRING);

    CalculationResultReconciliationAdapter.reconciliateCalculatorCalculationResultExpression(
      storedCalculationResult,
      calculatorTranslator,
    );

    const currentCalculationResult: string =
      calculatorTranslator.getCalculationResult();

    expect(currentCalculationResult).toEqual(storedCalculationResult);
  });
});
