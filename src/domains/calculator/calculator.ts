import CalculationExpression from "./calculation_expression";
import CalculatorCharacters from "./calculator_characters";

class Calculator {
  private readonly calculationExpressionRegister: CalculationExpression;

  public constructor(calculationExpressionRegister: CalculationExpression) {
    this.calculationExpressionRegister = calculationExpressionRegister;
  }

  public getExpression(): string {
    return this.calculationExpressionRegister.getCalculationExpression();
  }

  public addCharacter(character: CalculatorCharacters): void {
    this.calculationExpressionRegister.addCharacterToCalculationExpression(
      character,
    );
  }

  public backspace(): void {
    this.calculationExpressionRegister.removeLastCharacterFromCalculationExpression();
  }

  public clean(): void {
    this.calculationExpressionRegister.turnCalculationExpressionEmpty();
  }

  public evaluate(): void {
    this.calculationExpressionRegister.evaluateCalculationExpression();
  }
}

export default Calculator;
