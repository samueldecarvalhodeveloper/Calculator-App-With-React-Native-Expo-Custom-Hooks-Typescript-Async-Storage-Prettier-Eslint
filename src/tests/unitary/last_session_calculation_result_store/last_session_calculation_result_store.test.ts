import { describe, test, expect } from "@jest/globals";
import LastSessionCalculationResultStore from "../../../last_session_calculation_result_store/last_session_calculation_result_store";
import KeyValueStore from "../../../domains/key_value_store/key_value_store";
import { LAST_SESSION_CALCULATION_RESULT_STORE_KEY } from "../../../constants/ui_constants";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";

describe('Test Class: "LastSessionCalculationResultStore"; Behavior', () => {
  test('Test If Method: "getExpression"; Returns The Last Session Calculation Result From Key Value Database Correctly', async () => {
    const calculationResult: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;
    await KeyValueStore.setItem(
      LAST_SESSION_CALCULATION_RESULT_STORE_KEY,
      calculationResult,
    );

    const lastSessionCalculationResult: string =
      await LastSessionCalculationResultStore.getExpression();

    expect(lastSessionCalculationResult).toEqual(calculationResult);
  });

  test('Test If Method: "updateExpression"; Updates The Calculation Result Expression On Key Value Database Correctly', async () => {
    const calculationResult: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    await LastSessionCalculationResultStore.updateExpression(calculationResult);

    const calculationResultFromKeyValueDatabase: string =
      (await KeyValueStore.getItem(
        LAST_SESSION_CALCULATION_RESULT_STORE_KEY,
      )) as string;

    expect(calculationResultFromKeyValueDatabase).toEqual(calculationResult);
  });
});
