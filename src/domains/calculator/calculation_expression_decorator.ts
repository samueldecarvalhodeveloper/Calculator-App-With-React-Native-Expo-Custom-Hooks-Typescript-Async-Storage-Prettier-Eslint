import CalculationExpression from "./calculation_expression";
import CalculatorCharacters from "./calculator_characters";
import CalculatorSpecifications from "./internals/checkers/calculator_checker";

class CalculationExpressionDecorator extends CalculationExpression {
  public constructor(calculationExpression: string) {
    super(calculationExpression);
  }

  public override addCharacterToCalculationExpression(
    character: CalculatorCharacters,
  ): void {
    const currentExpression: string = super.getCalculationExpression();

    if (
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        currentExpression,
      ) ||
      CalculatorSpecifications.isCalculationExpressionInfinity(
        currentExpression,
      )
    ) {
      super.turnCalculationExpressionEmpty();
    } else {
      super.addCharacterToCalculationExpression(character);
    }
  }

  public override removeLastCharacterFromCalculationExpression(): void {
    const currentExpression: string = super.getCalculationExpression();

    if (
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        currentExpression,
      ) ||
      CalculatorSpecifications.isCalculationExpressionInfinity(
        currentExpression,
      )
    ) {
      super.turnCalculationExpressionEmpty();
    } else if (
      CalculatorSpecifications.isCalculationExpressionEmpty(currentExpression)
    ) {
      return;
    } else {
      super.removeLastCharacterFromCalculationExpression();
    }
  }

  public override evaluateCalculationExpression(): void {
    const currentExpression: string = super.getCalculationExpression();

    if (
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        currentExpression,
      ) ||
      CalculatorSpecifications.isCalculationExpressionInfinity(
        currentExpression,
      )
    ) {
      super.turnCalculationExpressionEmpty();
    } else if (
      CalculatorSpecifications.isCalculationExpressionEmpty(currentExpression)
    ) {
      return;
    } else {
      super.evaluateCalculationExpression();
    }
  }
}

export default CalculationExpressionDecorator;
