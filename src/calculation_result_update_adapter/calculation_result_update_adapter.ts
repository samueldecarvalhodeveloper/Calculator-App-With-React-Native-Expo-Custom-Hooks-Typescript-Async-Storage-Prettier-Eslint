import { Dispatch, SetStateAction } from "react";
import LastSessionCalculationResultStore from "../last_session_calculation_result_store/last_session_calculation_result_store";
import CalculatorTranslator from "../infrastructure/anticorruption_layer/calculator_translator";

class CalculationResultUpdateAdapter {
  private constructor() {}

  public static updateCalculationResultOnKeyValueDatabaseAndUi(
    calculationResultUiSetter: Dispatch<SetStateAction<string>>,
    calculatorTranslator: CalculatorTranslator,
  ): void {
    const currentCalculationResult: string =
      calculatorTranslator.getCalculationResult();

    LastSessionCalculationResultStore.updateExpression(
      currentCalculationResult,
    );

    calculationResultUiSetter(currentCalculationResult);
  }
}

export default CalculationResultUpdateAdapter;
