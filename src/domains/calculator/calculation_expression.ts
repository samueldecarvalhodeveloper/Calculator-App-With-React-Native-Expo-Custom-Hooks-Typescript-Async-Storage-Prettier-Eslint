import CalculatorCharacters from "./calculator_characters";
import ExpressionEvaluator from "./internals/adapters/expression_evaluator";
import CalculatorFormatter from "./internals/formatters/calculator_formatter";

class CalculationExpression {
  private calculationExpression: string;

  public constructor(calculationExpression: string) {
    this.calculationExpression = calculationExpression;
  }

  public getCalculationExpression(): string {
    return this.calculationExpression;
  }

  public addCharacterToCalculationExpression(
    character: CalculatorCharacters,
  ): void {
    this.calculationExpression += character;
  }

  public removeLastCharacterFromCalculationExpression(): void {
    const currentCalculationExpressionWithoutLastCharacter: string =
      CalculatorFormatter.getCalculationExpressionWithoutLastCharacter(
        this.calculationExpression,
      );

    this.calculationExpression =
      currentCalculationExpressionWithoutLastCharacter;
  }

  public turnCalculationExpressionEmpty(): void {
    this.calculationExpression = "";
  }

  public evaluateCalculationExpression(): void {
    const evaluatedCalculationExpression: string =
      ExpressionEvaluator.getEvaluatedExpression(this.calculationExpression);

    this.calculationExpression = evaluatedCalculationExpression;
  }
}

export default CalculationExpression;
