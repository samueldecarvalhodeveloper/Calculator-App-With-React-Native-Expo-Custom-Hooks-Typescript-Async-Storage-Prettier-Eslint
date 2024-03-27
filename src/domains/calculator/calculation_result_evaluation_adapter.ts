import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../constants/domains/calculator/calculation_result_messages_constants";
import ExpressionEvaluator from "./infrastructure/anticorruption_layer/expression_evaluator";
import CalculatorSpecifications from "./infrastructure/specifications/calculator_specifications";

class CalculationResultEvaluationAdapter {
  private constructor() {}

  public static getEvaluatedCurrentCalculationResultExpression(
    currentCalculationResult: string,
  ): string {
    try {
      const evaluatedCurrentCalculationResult: string =
        ExpressionEvaluator.getEvaluatedExpression(currentCalculationResult);

      if (
        CalculatorSpecifications.isCalculationResultNotANumber(
          evaluatedCurrentCalculationResult,
        )
      ) {
        return NOT_VALID_EXPRESSION_ERROR_MESSAGE;
      }

      return evaluatedCurrentCalculationResult;
    } catch (error) {
      return NOT_VALID_EXPRESSION_ERROR_MESSAGE;
    }
  }
}

export default CalculationResultEvaluationAdapter;
