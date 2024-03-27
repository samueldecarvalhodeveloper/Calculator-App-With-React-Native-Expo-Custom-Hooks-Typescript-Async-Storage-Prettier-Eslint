import { INFINITY } from "../../../../constants/domains/calculator/calculation_result_expression_results_constants";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../constants/domains/calculator/calculation_result_messages_constants";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

class CalculatorSpecifications {
  private constructor() {}

  public static isCalculationResultAErrorMessage(
    currentCalculationResult: string,
  ): boolean {
    return currentCalculationResult === NOT_VALID_EXPRESSION_ERROR_MESSAGE;
  }

  public static isCalculationResultNotANumber(
    currentCalculationResult: string,
  ): boolean {
    return currentCalculationResult === Number.NaN.toString();
  }

  public static isCalculationResultAnEmptyString(
    currentCalculationResult: string,
  ): boolean {
    return currentCalculationResult === EMPTY_STRING;
  }

  public static isCalculationResultEqualInfinity(
    currentCalculationResult: string,
  ): boolean {
    return currentCalculationResult === INFINITY;
  }
}

export default CalculatorSpecifications;
