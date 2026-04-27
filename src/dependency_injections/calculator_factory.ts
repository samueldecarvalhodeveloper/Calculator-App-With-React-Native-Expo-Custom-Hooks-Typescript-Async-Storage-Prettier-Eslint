import Calculator from "../domains/calculator/calculator";

class CalculatorFactory {
  private constructor() {}

  public static getInstance(initialValue: string): Calculator {
    return new Calculator(initialValue);
  }
}

export default CalculatorFactory;
