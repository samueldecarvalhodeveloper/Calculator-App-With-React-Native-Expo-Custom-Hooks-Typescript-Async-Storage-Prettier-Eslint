import { describe, test, expect } from "@jest/globals";
import UserInterfaceCalculatorCharacters from "../../../../user_interface/internals/enums/user_interface_calculator_characters";
import CalculatorFactory from "../../../../dependency_injection/calculator_factory";
import CalculationExpressionReconciliationAdapter from "../../../../user_interface/internals/adapters/calculation_expression_reconciliation_adapter";

describe('Test Class: "CalculationExpressionReconciliationAdapter"; Behavior', () => {
  test('Test If Method: "reconciliateCalculatorCalculationExpressionExpression"; Reconciles Stored Calculation Expression Expression With The Calculator Calculation Expression', () => {
    const storedCalculationExpression: string =
      UserInterfaceCalculatorCharacters.ONE +
      UserInterfaceCalculatorCharacters.ADDITION +
      UserInterfaceCalculatorCharacters.ONE;

    const calculator = CalculatorFactory.getInstance("");

    CalculationExpressionReconciliationAdapter.reconciliateCalculatorCalculationExpressionExpression(
      storedCalculationExpression,
      calculator,
    );

    const currentCalculationExpression: string = calculator.getExpression();

    expect(currentCalculationExpression).toEqual(storedCalculationExpression);
  });
});
