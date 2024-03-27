import { describe, test, expect } from "@jest/globals";
import CalculationSubscriber from "../../../../domains/calculator/calculation_subscriber";
import { Subscription } from "../../../../domains/calculator/infrastructure/environment/typescript/types";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculationSubscriber"; Behavior', () => {
  test('Test If Method: "update()"; Update Subscribed Function Correctly', () => {
    let subscribedVariable: string = EMPTY_STRING;

    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const calculationSubscriber: CalculationSubscriber =
      new CalculationSubscriber(subscription);

    const newCalculationResult: string = Math.random().toString();

    calculationSubscriber.update(newCalculationResult);

    expect(subscribedVariable).toEqual(newCalculationResult);
  });
});
