import { describe, beforeAll, beforeEach, test, expect } from "@jest/globals";
import CalculatorTranslator from "../../../../infrastructure/anticorruption_layer/calculator_translator";
import Calculator from "../../../../domains/calculator/calculator";
import CalculatorFactory from "../../../../domains/calculator/calculator_factory";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import CalculationSubscriber from "../../../../domains/calculator/calculation_subscriber";
import CalculationSubscriberFactory from "../../../../domains/calculator/calculation_subscriber_factory";
import { Subscription } from "../../../../domains/calculator/infrastructure/environment/typescript/types";

describe('Test Class: "CalculatorTranslator"; Behavior', () => {
  let calculatorTranslator: CalculatorTranslator;
  const calculator: Calculator = CalculatorFactory.getInstance(EMPTY_STRING);
  let subscribedVariable: string;

  beforeAll(() => {
    calculatorTranslator = new CalculatorTranslator(calculator);

    const subscription: Subscription = (currentCalculationResult: string) => {
      subscribedVariable = currentCalculationResult;
    };
    const subscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);
    calculator.subscribe(subscriber);
  });

  beforeEach(() => {
    calculator.clean();
  });

  test('Test If Method: "getCalculationResult"; Returns The Current Calculation Result Expression Correctly', () => {
    const calculationResultExpression: string =
      calculatorTranslator.getCalculationResult();

    expect(calculationResultExpression).toEqual(subscribedVariable);
  });

  test('Test If Method: "clean"; Cleans The calculation Result Expression On Calculator Correctly', () => {
    calculator.addCharacter(CalculatorCharacters.ONE);

    calculatorTranslator.clean();

    expect(subscribedVariable).toEqual(EMPTY_STRING);
  });

  test('Test If Method: "addCharacter"; Adds Character On Calculation Result Correctly', () => {
    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);

    expect(subscribedVariable).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "backspace"; Removes Last Character From Calculation Result Expression Correctly', () => {
    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ONE);

    calculator.backspace();

    expect(subscribedVariable).toEqual(CalculatorCharacters.ONE);
  });

  test('Test If Method: "evaluate"; Evaluates Calculation Result Expression Correctly', () => {
    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ONE);

    calculatorTranslator.evaluate();

    expect(subscribedVariable).toEqual(CalculatorCharacters.TWO);
  });
});
