import CalculationResult from "./calculation_result";

class CalculationRegister {
  private calculationResult: CalculationResult;

  constructor(calculationResult: CalculationResult) {
    this.calculationResult = calculationResult;
  }

  public getCalculationResult(): string {
    return this.calculationResult.getResult();
  }

  public replaceCalculationResult(newValue: string): void {
    this.calculationResult.setResult(newValue);
  }

  public concatenateCharacterToCalculationResult(value: string): void {
    const currentCalculationResult: string = this.calculationResult.getResult();
    const calculationResultWithNewCharacter: string =
      currentCalculationResult.concat(value);

    this.calculationResult.setResult(calculationResultWithNewCharacter);
  }
}

export default CalculationRegister;
