import { describe, test, expect } from "@jest/globals";
import CalculationResultSubscriptionManager from "../../../../domains/calculator/calculation_result_subscription_manager";
import CalculationSubscriber from "../../../../domains/calculator/calculation_subscriber";
import { Subscription } from "../../../../domains/calculator/infrastructure/environment/typescript/types";
import { SUBSCRIPTION_MOCK } from "../../../../domains/calculator/infrastructure/tests/mocks/mocks";
import CalculationSubscriberFactory from "../../../../domains/calculator/calculation_subscriber_factory";
import { ARRAY_WITH_ONE_ITEM } from "../../../constants/array_utilities_constants";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculationResultSubscriptionManager"; Behavior', () => {
  test('Test If Method: "subscribe"; Add Event Function To List Of Subscribers Correctly', () => {
    const listOfSubscriber: Array<CalculationSubscriber> = [];

    const calculationResultSubscriptionManager: CalculationResultSubscriptionManager =
      new CalculationResultSubscriptionManager(listOfSubscriber);
    const calculationSubscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(SUBSCRIPTION_MOCK);

    calculationResultSubscriptionManager.subscribe(calculationSubscriber);

    expect(listOfSubscriber.length).toEqual(ARRAY_WITH_ONE_ITEM);
  });

  test('Test If Method: "publish"; Published New Calculation Result To All Subscribers Correctly', () => {
    const listOfSubscriber: Array<CalculationSubscriber> = [];

    const calculationResultSubscriptionManager: CalculationResultSubscriptionManager =
      new CalculationResultSubscriptionManager(listOfSubscriber);
    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const calculationSubscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);

    calculationResultSubscriptionManager.subscribe(calculationSubscriber);

    const newCalculationResult: string = Math.random().toString();

    calculationResultSubscriptionManager.publish(newCalculationResult);

    expect(subscribedVariable).toEqual(newCalculationResult);
  });
});
