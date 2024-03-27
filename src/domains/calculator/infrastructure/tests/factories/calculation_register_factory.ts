import CalculationRegister from "../../../calculation_register";
import CalculationResult from "../../../calculation_result";

class CalculationRegisterFactory {
  private constructor() {}

  public static getInstance(
    calculationResultInitialValue: string,
  ): CalculationRegister {
    const calculationResult: CalculationResult = new CalculationResult(
      calculationResultInitialValue,
    );

    return new CalculationRegister(calculationResult);
  }
}

export default CalculationRegisterFactory;
