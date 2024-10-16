import { describe, test, expect } from "@jest/globals";
import CalculationExpressionReconciliationAdapter from "../../../calculation_expression_reconciliation_adapter/calculation_expression_reconciliation_adapter";
import UiCalculatorCharacters from "../../../calculator_characters/ui_calculator_characters";
import CalculatorFactory from "../../../domains/calculator/calculator_factory";
import Calculator from "../../../domains/calculator/calculator";

describe('Test Class: "CalculationExpressionReconciliationAdapter"; Behavior', () => {
  test('Test If Method: "reconciliateCalculatorCalculationExpressionExpression"; Reconciles Stored Calculation Expression Expression With The Calculator Calculation Expression Correctly', () => {
    const storedCalculationExpression: string =
      UiCalculatorCharacters.ONE +
      UiCalculatorCharacters.ADDITION +
      UiCalculatorCharacters.ONE;

    const calculator: Calculator = CalculatorFactory.getInstance("");

    CalculationExpressionReconciliationAdapter.reconciliateCalculatorCalculationExpressionExpression(
      storedCalculationExpression,
      calculator,
    );

    const currentCalculationExpression: string = calculator.getExpression();

    expect(currentCalculationExpression).toEqual(storedCalculationExpression);
  });
});
