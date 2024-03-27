import CalculationActiveRecord from "../../../calculation_active_record";
import CalculationRegister from "../../../calculation_register";
import CalculationResult from "../../../calculation_result";

class CalculationActiveRecordFactory {
  private constructor() {}

  public static getInstance(initialValue: string): CalculationActiveRecord {
    const calculationResult: CalculationResult = new CalculationResult(
      initialValue,
    );
    const calculationRegister: CalculationRegister = new CalculationRegister(
      calculationResult,
    );

    return new CalculationActiveRecord(calculationRegister);
  }

  public static getInstanceWithAAlreadyCalculationResultInstantiated(
    calculationResult: CalculationResult,
  ): CalculationActiveRecord {
    const calculationRegister: CalculationRegister = new CalculationRegister(
      calculationResult,
    );

    return new CalculationActiveRecord(calculationRegister);
  }
}

export default CalculationActiveRecordFactory;
