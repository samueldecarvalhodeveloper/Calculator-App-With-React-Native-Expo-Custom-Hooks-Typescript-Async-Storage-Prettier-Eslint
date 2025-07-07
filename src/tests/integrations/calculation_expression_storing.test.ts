import { describe, test, expect } from "@jest/globals";
import Calculator from "../../domains/calculator/calculator";
import CalculatorFactory from "../../domains/calculator/calculator_factory";
import KeyValueStore from "../../domains/key_value_store/key_value_store";
import { LAST_CALCULATION_KEY } from "../constants/key_value_store_constants";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";

describe('Test Integration Of: "Calculation Expression Storing"; Behavior', () => {
  test("Test If I Calculation Expression From Calculator Can Be Stored In Key Value Database Correctly", async () => {
    const calculator: Calculator = CalculatorFactory.getInstance("");

    calculator.addCharacter(CalculatorCharacters.ONE);

    const updatedCalculationExpression = calculator.getExpression();

    await KeyValueStore.setItem(
      LAST_CALCULATION_KEY,
      updatedCalculationExpression,
    );

    const storedCalculationExpression: string = (await KeyValueStore.getItem(
      LAST_CALCULATION_KEY,
    )) as string;

    expect(storedCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });
});
