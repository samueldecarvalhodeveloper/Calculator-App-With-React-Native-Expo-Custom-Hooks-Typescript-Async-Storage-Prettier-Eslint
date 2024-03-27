import CalculatorCharacters from "../domains/calculator/calculator_characters";
import CalculatorTranslator from "../infrastructure/anticorruption_layer/calculator_translator";

class GenerateCalculationResultErrorMessageAdapter {
  private constructor() {}

  public static generateErrorMessage(calculator: CalculatorTranslator): void {
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.evaluate();
  }
}

export default GenerateCalculationResultErrorMessageAdapter;
