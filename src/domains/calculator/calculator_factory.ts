import CalculationExpression from "./calculation_expression";
import CalculationExpressionActiveRecordDecorator from "./calculation_expression_active_record_decorator";
import CalculationExpressionRegister from "./calculation_expression_register";
import Calculator from "./calculator";

class CalculatorFactory {
  private static instance: Calculator | null = null;

  private constructor() {}

  public static getInstance(initialValue: string): Calculator {
    if (this.instance === null) {
      const calculationExpression = new CalculationExpression(initialValue);
      const calculationExpressionRegister = new CalculationExpressionRegister(
        calculationExpression,
      );
      const calculationExpressionActiveRecord =
        new CalculationExpressionActiveRecordDecorator(
          calculationExpressionRegister,
        );

      this.instance = new Calculator(calculationExpressionActiveRecord);
    }

    return this.instance;
  }
}

export default CalculatorFactory;
