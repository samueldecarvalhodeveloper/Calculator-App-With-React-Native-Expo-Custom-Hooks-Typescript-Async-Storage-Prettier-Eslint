import { describe, expect, test } from "@jest/globals";
import CalculatorFactory from "../../../../../../../domains/calculator/infrastructure/tests/factories/calculator_factory";
import Calculator from "../../../../../../../domains/calculator/calculator";
import { Subscription } from "../../../../../../../domains/calculator/infrastructure/environment/typescript/types";
import CalculationSubscriber from "../../../../../../../domains/calculator/calculation_subscriber";
import CalculatorCharacters from "../../../../../../../domains/calculator/calculator_characters";
import { EMPTY_STRING } from "../../../../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculatorFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Instances A Working Class Correctly', () => {
    const initialValue: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    const calculator: Calculator = CalculatorFactory.getInstance(initialValue);

    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const subscriber: CalculationSubscriber = new CalculationSubscriber(
      subscription,
    );

    calculator.subscribe(subscriber);

    expect(subscribedVariable).toEqual(initialValue);
  });
});
