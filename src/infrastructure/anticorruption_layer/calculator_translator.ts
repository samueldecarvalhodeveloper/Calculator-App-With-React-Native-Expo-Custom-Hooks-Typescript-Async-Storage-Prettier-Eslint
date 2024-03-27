import { EMPTY_STRING } from "../../constants/strings_utilities_constants";
import CalculationSubscriber from "../../domains/calculator/calculation_subscriber";
import CalculationSubscriberFactory from "../../domains/calculator/calculation_subscriber_factory";
import Calculator from "../../domains/calculator/calculator";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";
import { Subscription } from "../../domains/calculator/infrastructure/environment/typescript/types";

class CalculatorTranslator {
  private calculator: Calculator;

  private calculationResult: string = EMPTY_STRING;

  public constructor(calculator: Calculator) {
    this.calculator = calculator;

    const subscription: Subscription = (currentCalculationResult: string) => {
      this.calculationResult = currentCalculationResult;
    };
    const subscriber: CalculationSubscriber =
      CalculationSubscriberFactory.getInstance(subscription);
    calculator.subscribe(subscriber);
  }

  public getCalculationResult(): string {
    return this.calculationResult;
  }

  public backspace(): void {
    this.calculator.backspace();
  }

  public clean(): void {
    this.calculator.clean();
  }

  public addCharacter(character: CalculatorCharacters): void {
    this.calculator.addCharacter(character);
  }

  public evaluate(): void {
    this.calculator.evaluate();
  }
}

export default CalculatorTranslator;
