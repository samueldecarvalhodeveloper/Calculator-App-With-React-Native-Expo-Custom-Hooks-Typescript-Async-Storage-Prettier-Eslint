import { describe, test, expect } from "@jest/globals";
import LastSessionCalculationExpressionStore from "../../../last_session_calculation_expression_store/last_session_calculation_expression_store";
import KeyValueStore from "../../../domains/key_value_store/key_value_store";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import { LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY } from "../../../constants/ui_constants";

describe('Test Class: "LastSessionCalculationExpressionStore"; Behavior', () => {
  test('Test If Method: "getExpression"; Returns The Last Session Calculation Expression From Key Value Database Correctly', async () => {
    const calculationExpression: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;
    await KeyValueStore.setItem(
      LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY,
      calculationExpression,
    );

    const lastSessionCalculationExpression: string =
      await LastSessionCalculationExpressionStore.getExpression();

    expect(lastSessionCalculationExpression).toEqual(calculationExpression);
  });

  test('Test If Method: "updateExpression"; Updates The Calculation Expression Expression On Key Value Database Correctly', async () => {
    const calculationExpression: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    await LastSessionCalculationExpressionStore.updateExpression(
      calculationExpression,
    );

    const calculationExpressionFromKeyValueDatabase: string =
      (await KeyValueStore.getItem(
        LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY,
      )) as string;

    expect(calculationExpressionFromKeyValueDatabase).toEqual(
      calculationExpression,
    );
  });
});
