import { describe, test, expect } from "@jest/globals";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import Calculator from "../../../../domains/calculator/calculator";
import CalculationSubscriber from "../../../../domains/calculator/calculation_subscriber";
import { Subscription } from "../../../../domains/calculator/infrastructure/environment/typescript/types";
import CalculatorFactory from "../../../../domains/calculator/infrastructure/tests/factories/calculator_factory";
import CalculationSubscriberFactory from "../../../../domains/calculator/calculation_subscriber_factory";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class: "Calculator"; Behavior', () => {
  test('Test If Method: "subscribe"; Subscribe Function To Calculation Result Publishing List Correctly', () => {
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

    expect(subscribedVariable).toEqual(initialCalculatorValue);
  });

  test('Test If Method: "addCharacter"; Adds One Character To Calculation Result Correctly', () => {
    const calculator: Calculator = CalculatorFactory.getInstance(EMPTY_STRING);

    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const subscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);

    calculator.subscribe(subscriber);

    calculator.addCharacter(CalculatorCharacters.ONE);

    expect(subscribedVariable).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "clean"; Turns Calculator Calculation Result Expression An Empty Value Correctly', () => {
    const calculatorInitialValue: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    const calculator: Calculator = CalculatorFactory.getInstance(
      calculatorInitialValue,
    );

    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const subscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);

    calculator.subscribe(subscriber);

    calculator.clean();

    expect(subscribedVariable).toEqual(EMPTY_STRING);
  });

  test('Test If Method: "backspace"; Removes Last Character From Calculation Result Expression Correctly', () => {
    const calculatorInitialValue: string =
      CalculatorCharacters.ONE + CalculatorCharacters.ADDITION;

    const calculator: Calculator = CalculatorFactory.getInstance(
      calculatorInitialValue,
    );

    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const subscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);

    calculator.subscribe(subscriber);

    calculator.backspace();

    expect(subscribedVariable).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "evaluate"; Evaluates Calculation Result Expression Correctly', () => {
    const calculatorInitialValue: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    const calculator: Calculator = CalculatorFactory.getInstance(
      calculatorInitialValue,
    );

    let subscribedVariable: string = EMPTY_STRING;
    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const subscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);

    calculator.subscribe(subscriber);

    calculator.evaluate();

    expect(subscribedVariable).toEqual(CalculatorCharacters.TWO);
  });
});
