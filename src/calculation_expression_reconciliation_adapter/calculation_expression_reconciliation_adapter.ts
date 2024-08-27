import { EMPTY_STRING } from "../constants/strings_utilities_constants";
import Calculator from "../domains/calculator/calculator";
import CalculatorCharacters from "../domains/calculator/calculator_characters";

class CalculationExpressionReconciliationAdapter {
  private constructor() {}

  public static reconciliateCalculatorCalculationExpressionExpression(
    calculationExpressionExpression: string,
    calculator: Calculator,
  ): void {
    calculator.clean();

    const listOfCalculationCharacters: Array<CalculatorCharacters> =
      calculationExpressionExpression.split(
        EMPTY_STRING,
      ) as Array<CalculatorCharacters>;

    for (const character of listOfCalculationCharacters) {
      calculator.addCharacter(character);
    }
  }
}

export default CalculationExpressionReconciliationAdapter;
