import { describe, test, expect } from "@jest/globals";
import Calculator from "../../domains/calculator/calculator";
import CalculatorFactory from "../../domains/calculator/calculator_factory";
import CalculationSubscriber from "../../domains/calculator/calculation_subscriber";
import CalculationSubscriberFactory from "../../domains/calculator/calculation_subscriber_factory";
import { Subscription } from "../../domains/calculator/infrastructure/environment/typescript/types";
import KeyValueStore from "../../domains/key_value_store/key_value_store";
import { LAST_CALCULATION_KEY } from "../constants/key_value_store_constants";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";
import { EMPTY_STRING } from "../../constants/strings_utilities_constants";

describe('Test Integration Of: "Calculation Result Storing"; Behavior', () => {
  test("Test If I Calculation Result From Calculator Can Be Stored In Key Value Database Correctly", async () => {
    const calculator: Calculator = CalculatorFactory.getInstance(EMPTY_STRING);

    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const calculationSubscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);

    calculator.subscribe(calculationSubscriber);

    calculator.addCharacter(CalculatorCharacters.ONE);

    await KeyValueStore.setItem(LAST_CALCULATION_KEY, subscribedVariable);

    const storedCalculationResult: string = (await KeyValueStore.getItem(
      LAST_CALCULATION_KEY,
    )) as string;

    expect(storedCalculationResult).toEqual(CalculatorCharacters.ONE);
  });
});
