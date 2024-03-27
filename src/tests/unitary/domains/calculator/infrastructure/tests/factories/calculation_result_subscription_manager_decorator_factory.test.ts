import { describe, test, expect } from "@jest/globals";
import CalculationResultSubscriptionManagerDecoratorFactory from "../../../../../../../domains/calculator/infrastructure/tests/factories/calculation_result_subscription_manager_decorator_factory";
import CalculationResultSubscriptionManager from "../../../../../../../domains/calculator/calculation_result_subscription_manager";
import CalculationSubscriber from "../../../../../../../domains/calculator/calculation_subscriber";
import { Subscription } from "../../../../../../../domains/calculator/infrastructure/environment/typescript/types";
import CalculatorCharacters from "../../../../../../../domains/calculator/calculator_characters";
import { EMPTY_STRING } from "../../../../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculationResultSubscriptionManagerDecoratorFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Instances A Working Class Correctly', () => {
    const initialValue: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    const calculationResultSubscriptionManagerDecorator: CalculationResultSubscriptionManager =
      CalculationResultSubscriptionManagerDecoratorFactory.getInstance(
        initialValue,
      );

    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const subscriber: CalculationSubscriber = new CalculationSubscriber(
      subscription,
    );

    calculationResultSubscriptionManagerDecorator.subscribe(subscriber);

    expect(subscribedVariable).toEqual(initialValue);
  });
});

CalculationResultSubscriptionManagerDecoratorFactory;
