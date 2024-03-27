import { describe, expect, test } from "@jest/globals";
import CalculationSubscriberFactory from "../../../../domains/calculator/calculation_subscriber_factory";
import CalculationSubscriber from "../../../../domains/calculator/calculation_subscriber";
import { Subscription } from "../../../../domains/calculator/infrastructure/environment/typescript/types";
import CalculationResultSubscriptionManagerDecoratorFactory from "../../../../domains/calculator/infrastructure/tests/factories/calculation_result_subscription_manager_decorator_factory";
import CalculationResultSubscriptionManager from "../../../../domains/calculator/calculation_result_subscription_manager";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculationSubscriberFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Instantiates A Working Class Correctly', () => {
    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const calculationSubscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);
    const calculationResultSubscriptionManager: CalculationResultSubscriptionManager =
      CalculationResultSubscriptionManagerDecoratorFactory.getInstance(
        EMPTY_STRING,
      );

    calculationResultSubscriptionManager.subscribe(calculationSubscriber);

    const currentCalculationResult: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    calculationResultSubscriptionManager.publish(currentCalculationResult);

    expect(subscribedVariable).toEqual(currentCalculationResult);
  });
});
