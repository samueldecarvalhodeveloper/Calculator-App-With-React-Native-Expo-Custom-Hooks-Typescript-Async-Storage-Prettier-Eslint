import CalculationActiveRecord from "./calculation_active_record";
import CalculationRegister from "./calculation_register";
import CalculatorCharacters from "./calculator_characters";
import CalculatorSpecifications from "./infrastructure/specifications/calculator_specifications";

class CalculationActiveRecordDecorator extends CalculationActiveRecord {
  public constructor(calculationRegister: CalculationRegister) {
    super(calculationRegister);
  }

  public addCharacter(character: CalculatorCharacters): void {
    const currentCalculationResult: string = super.getCalculationResult();

    if (
      CalculatorSpecifications.isCalculationResultAErrorMessage(
        currentCalculationResult,
      ) ||
      CalculatorSpecifications.isCalculationResultEqualInfinity(
        currentCalculationResult,
      )
    ) {
      super.removeAllCharacters();
      return;
    }

    super.addCharacter(character);
  }

  public removeLastCharacter(): void {
    const currentCalculationResult: string = super.getCalculationResult();

    if (
      CalculatorSpecifications.isCalculationResultAnEmptyString(
        currentCalculationResult,
      )
    ) {
      return;
    }

    if (
      CalculatorSpecifications.isCalculationResultAErrorMessage(
        currentCalculationResult,
      ) ||
      CalculatorSpecifications.isCalculationResultEqualInfinity(
        currentCalculationResult,
      ) ||
      CalculatorSpecifications.isCalculationResultNotANumber(
        currentCalculationResult,
      )
    ) {
      super.removeAllCharacters();
      return;
    }

    super.removeLastCharacter();
  }

  public evaluateCalculationResultExpression(): void {
    const currentCalculationResult: string = super.getCalculationResult();

    if (
      CalculatorSpecifications.isCalculationResultAErrorMessage(
        currentCalculationResult,
      ) ||
      CalculatorSpecifications.isCalculationResultAnEmptyString(
        currentCalculationResult,
      ) ||
      CalculatorSpecifications.isCalculationResultNotANumber(
        currentCalculationResult,
      ) ||
      CalculatorSpecifications.isCalculationResultEqualInfinity(
        currentCalculationResult,
      )
    ) {
      return;
    }

    super.evaluateCalculationResultExpression();
  }
}

export default CalculationActiveRecordDecorator;
