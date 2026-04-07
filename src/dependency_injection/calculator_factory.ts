import CalculationExpressionDecorator from "../domains/calculator/calculation_expression_decorator";
import Calculator from "../domains/calculator/calculator";

class CalculatorFactory {
  private constructor() {}

  public static getInstance(initialValue: string): Calculator {
    const calculationExpression = new CalculationExpressionDecorator(
      initialValue,
    );

    return new Calculator(calculationExpression);
  }
}

export default CalculatorFactory;
