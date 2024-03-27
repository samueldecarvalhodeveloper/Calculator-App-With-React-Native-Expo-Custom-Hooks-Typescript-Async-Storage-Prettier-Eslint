import { describe, expect, test } from "@jest/globals";
import CalculationResultSubscriptionManagerDecorator from "../../../../domains/calculator/calculation_result_subscription_manager_decorator";
import CalculationResultSubscriptionManagerDecoratorFactory from "../../../../domains/calculator/infrastructure/tests/factories/calculation_result_subscription_manager_decorator_factory";
import { Subscription } from "../../../../domains/calculator/infrastructure/environment/typescript/types";
import CalculationSubscriber from "../../../../domains/calculator/calculation_subscriber";
import CalculationSubscriberFactory from "../../../../domains/calculator/calculation_subscriber_factory";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculationResultSubscriptionManagerDecorator"; Behavior', () => {
  test('Test If Method: "subscribe"; Decorates Superclass subscribe Method With Updating On The Fly Correctly', () => {
    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const calculationSubscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);
    const nonEmptyCalculationResultValue: string = Math.random().toString();
    const calculationResultSubscriptionManagerDecorator: CalculationResultSubscriptionManagerDecorator =
      CalculationResultSubscriptionManagerDecoratorFactory.getInstance(
        nonEmptyCalculationResultValue,
      );

    calculationResultSubscriptionManagerDecorator.subscribe(
      calculationSubscriber,
    );

    expect(subscribedVariable).toEqual(nonEmptyCalculationResultValue);
  });
});
