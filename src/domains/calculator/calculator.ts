import Characters from "./characters";
import ExpressionEvaluator from "./internals/adapters/expression_evaluator";
import CalculatorFormatter from "./internals/formatters/calculator_formatter";

class Calculator {
  public expression: string;

  public constructor(expression: string) {
    this.expression = expression;
  }

  public addCharacter(character: Characters): void {
    this.expression += character;
  }

  public backspace(): void {
    this.expression =
      CalculatorFormatter.getCalculationExpressionWithoutLastCharacter(
        this.expression,
      );
  }

  public clean(): void {
    this.expression = "";
  }

  public evaluate(): void {
    try {
      const expressionEvaluatedExpression: string =
        ExpressionEvaluator.getEvaluatedExpression(this.expression);

      this.expression = expressionEvaluatedExpression;
    } catch (error) {
      this.expression = "";

      throw error;
    }
  }
}

export default Calculator;
