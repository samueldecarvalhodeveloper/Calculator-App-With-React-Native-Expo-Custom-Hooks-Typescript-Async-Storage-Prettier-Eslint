import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../constants/domains/calculator/calculation_result_messages_constants";
import { EMPTY_STRING } from "../../constants/strings_utilities_constants";
import CalculationRegister from "./calculation_register";
import CalculationResultEvaluationAdapter from "./calculation_result_evaluation_adapter";
import CalculatorCharacters from "./calculator_characters";
import CalculatorFormatter from "./infrastructure/formatters/calculator_formatter";

class CalculationActiveRecord {
  private calculationRegister: CalculationRegister;

  public constructor(calculationRegister: CalculationRegister) {
    this.calculationRegister = calculationRegister;
  }

  public getCalculationResult(): string {
    return this.calculationRegister.getCalculationResult();
  }

  public addCharacter(character: CalculatorCharacters): void {
    this.calculationRegister.concatenateCharacterToCalculationResult(character);
  }

  public removeLastCharacter(): void {
    const currentCalculationResult: string =
      this.calculationRegister.getCalculationResult();
    const calculationResultWithoutLastCharacter: string =
      CalculatorFormatter.getStringWithoutLastCharacter(
        currentCalculationResult,
      );

    this.calculationRegister.replaceCalculationResult(
      calculationResultWithoutLastCharacter,
    );
  }

  public removeAllCharacters(): void {
    this.calculationRegister.replaceCalculationResult(EMPTY_STRING);
  }

  public evaluateCalculationResultExpression(): void {
    const currentCalculationResult: string =
      this.calculationRegister.getCalculationResult();
    const calculationResultExpressionEvaluated: string =
      CalculationResultEvaluationAdapter.getEvaluatedCurrentCalculationResultExpression(
        currentCalculationResult,
      );

    this.calculationRegister.replaceCalculationResult(
      calculationResultExpressionEvaluated,
    );
  }

  public turnCalculationResultExpressionIntoNotValidExpressionMessage(): void {
    this.calculationRegister.replaceCalculationResult(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );
  }
}

export default CalculationActiveRecord;
