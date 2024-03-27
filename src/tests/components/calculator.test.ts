import { describe, test, expect } from "@jest/globals";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";
import Calculator from "../../domains/calculator/calculator";
import CalculatorFactory from "../../domains/calculator/calculator_factory";
import { Subscription } from "../../domains/calculator/infrastructure/environment/typescript/types";
import CalculationSubscriber from "../../domains/calculator/calculation_subscriber";
import CalculationSubscriberFactory from "../../domains/calculator/calculation_subscriber_factory";
import { EMPTY_STRING } from "../../constants/strings_utilities_constants";

describe('Test Component: "Calculator"; Behavior', () => {
  test("Test If Component Handles Data Input And Output Scenario Correctly", () => {
    const calculator: Calculator = CalculatorFactory.getInstance(EMPTY_STRING);

    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const subscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);
    calculator.subscribe(subscriber);

    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ONE);

    calculator.backspace();

    calculator.addCharacter(CalculatorCharacters.ONE);

    calculator.evaluate();

    expect(subscribedVariable).toEqual(CalculatorCharacters.TWO);

    calculator.clean();

    expect(subscribedVariable).toEqual(EMPTY_STRING);
  });
});
