import { describe, expect, test } from "@jest/globals";
import CalculatorFactory from "../../../../domains/calculator/calculator_factory";
import Calculator from "../../../../domains/calculator/calculator";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import CalculationSubscriber from "../../../../domains/calculator/calculation_subscriber";
import { Subscription } from "../../../../domains/calculator/infrastructure/environment/typescript/types";
import CalculationSubscriberFactory from "../../../../domains/calculator/calculation_subscriber_factory";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculatorFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Instantiates A Working Class Correctly', () => {
    const initialCalculatorValue: string = CalculatorCharacters.ONE;

    const calculator: Calculator = CalculatorFactory.getInstance(
      initialCalculatorValue,
    );

    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const subscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);
    calculator.subscribe(subscriber);

    expect(subscribedVariable).toEqual(CalculatorCharacters.ONE);
  });
});
