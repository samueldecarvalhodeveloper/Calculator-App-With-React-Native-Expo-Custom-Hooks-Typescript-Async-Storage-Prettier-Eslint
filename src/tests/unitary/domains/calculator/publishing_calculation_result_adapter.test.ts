import { describe, expect, test } from "@jest/globals";
import PublishingCalculationResultAdapter from "../../../../domains/calculator/publishing_calculation_result_adapter";
import CalculationActiveRecord from "../../../../domains/calculator/calculation_active_record";
import CalculationActiveRecordFactory from "../../../../domains/calculator/infrastructure/tests/factories/calculation_active_record_factory";
import CalculationResultSubscriptionManagerDecorator from "../../../../domains/calculator/calculation_result_subscription_manager_decorator";
import CalculationResultSubscriptionManagerDecoratorFactory from "../../../../domains/calculator/infrastructure/tests/factories/calculation_result_subscription_manager_decorator_factory";
import { Subscription } from "../../../../domains/calculator/infrastructure/environment/typescript/types";
import CalculationSubscriber from "../../../../domains/calculator/calculation_subscriber";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import CalculationSubscriberFactory from "../../../../domains/calculator/calculation_subscriber_factory";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class: "PublishingCalculationResultAdapter"; Behavior', () => {
  test('Test If Method: "updateCalculationResult"; Publishes Current Calculation Result To All Subscribers Correctly', () => {
    const calculationActiveRecord: CalculationActiveRecord =
      CalculationActiveRecordFactory.getInstance(EMPTY_STRING);

    const calculationResultSubscriptionManager: CalculationResultSubscriptionManagerDecorator =
      CalculationResultSubscriptionManagerDecoratorFactory.getInstance(
        EMPTY_STRING,
      );

    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const subscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);

    calculationResultSubscriptionManager.subscribe(subscriber);

    calculationActiveRecord.addCharacter(CalculatorCharacters.ONE);

    PublishingCalculationResultAdapter.updateCalculationResult(
      calculationActiveRecord,
      calculationResultSubscriptionManager,
    );

    expect(subscribedVariable).toEqual(CalculatorCharacters.ONE);
  });
});
