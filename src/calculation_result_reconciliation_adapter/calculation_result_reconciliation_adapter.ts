import { EMPTY_STRING } from "../constants/strings_utilities_constants";
import CalculatorCharacters from "../domains/calculator/calculator_characters";
import CalculatorTranslator from "../infrastructure/anticorruption_layer/calculator_translator";

class CalculationResultReconciliationAdapter {
  private constructor() {}

  public static reconciliateCalculatorCalculationResultExpression(
    calculationResultExpression: string,
    calculatorTranslator: CalculatorTranslator,
  ): void {
    calculatorTranslator.clean();

    const listOfCalculationCharacters: Array<CalculatorCharacters> =
      calculationResultExpression.split(
        EMPTY_STRING,
      ) as Array<CalculatorCharacters>;

    for (const character of listOfCalculationCharacters) {
      calculatorTranslator.addCharacter(character);
    }
  }
}

export default CalculationResultReconciliationAdapter;
