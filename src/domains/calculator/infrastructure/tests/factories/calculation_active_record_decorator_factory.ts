import { EMPTY_STRING } from "../../../../../constants/strings_utilities_constants";
import CalculationActiveRecordDecorator from "../../../calculation_active_record_decorator";
import CalculationRegister from "../../../calculation_register";
import CalculationResult from "../../../calculation_result";

class CalculationActiveRecordDecoratorFactory {
  private constructor() {}

  public static getInstance(
    initialValue: string = EMPTY_STRING,
  ): CalculationActiveRecordDecorator {
    const calculationResult: CalculationResult = new CalculationResult(
      initialValue,
    );
    const calculationRegister: CalculationRegister = new CalculationRegister(
      calculationResult,
    );

    return new CalculationActiveRecordDecorator(calculationRegister);
  }
}

export default CalculationActiveRecordDecoratorFactory;
