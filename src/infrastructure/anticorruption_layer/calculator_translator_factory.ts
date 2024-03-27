import Calculator from "../../domains/calculator/calculator";
import CalculatorFactory from "../../domains/calculator/calculator_factory";
import CalculatorTranslator from "./calculator_translator";

class CalculatorTranslatorFactory {
  private static instance: CalculatorTranslator | null = null;

  public static getInstance(initialValue: string): CalculatorTranslator {
    if (this.instance === null) {
      const calculator: Calculator =
        CalculatorFactory.getInstance(initialValue);
      this.instance = new CalculatorTranslator(calculator);
    }

    return this.instance;
  }
}

export default CalculatorTranslatorFactory;
