import { describe, test, expect } from "@jest/globals";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import KeyValueDatabase from "../../../../domains/key_value_database/key_value_database";
import { LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY } from "../../../../constants/user_interface_constants";
import LastSessionCalculationExpressionStore from "../../../../user_interface/internals/store/last_session_calculation_expression_store";

describe('Test Class: "LastSessionCalculationExpressionStore"; Behavior', () => {
  test('Test If Method: "getExpression"; Returns The Last Session Calculation Expression From Key Value Database', async () => {
    const calculationExpression: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;
    await KeyValueDatabase.setItem(
      LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY,
      calculationExpression,
    );

    const lastSessionCalculationExpression: string =
      await LastSessionCalculationExpressionStore.getExpression();

    expect(lastSessionCalculationExpression).toEqual(calculationExpression);
  });

  test('Test If Method: "updateExpression"; Updates The Calculation Expression Expression On Key Value Database', async () => {
    const calculationExpression: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    await LastSessionCalculationExpressionStore.updateExpression(
      calculationExpression,
    );

    const calculationExpressionFromKeyValueDatabase: string =
      (await KeyValueDatabase.getItem(
        LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY,
      )) as string;

    expect(calculationExpressionFromKeyValueDatabase).toEqual(
      calculationExpression,
    );
  });
});
