import Calculator from "../domains/calculator/calculator";
import CalculatorCharacters from "../domains/calculator/calculator_characters";

class GenerateCalculationExpressionErrorMessageAdapter {
  private constructor() {}

  public static generateErrorMessage(calculator: Calculator): void {
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.evaluate();
  }
}

export default GenerateCalculationExpressionErrorMessageAdapter;
