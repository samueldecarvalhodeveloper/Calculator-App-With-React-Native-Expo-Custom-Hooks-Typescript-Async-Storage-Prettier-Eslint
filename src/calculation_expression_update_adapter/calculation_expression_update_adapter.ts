import { Dispatch, SetStateAction } from "react";
import Calculator from "../domains/calculator/calculator";
import LastSessionCalculationExpressionStore from "../last_session_calculation_expression_store/last_session_calculation_expression_store";

class CalculationExpressionUpdateAdapter {
  private constructor() {}

  public static updateCalculationExpressionOnKeyValueDatabaseAndUi(
    calculationExpressionUiSetter: Dispatch<SetStateAction<string>>,
    calculatorTranslator: Calculator,
  ): void {
    const currentCalculationExpression: string =
      calculatorTranslator.getExpression();

    LastSessionCalculationExpressionStore.updateExpression(
      currentCalculationExpression,
    );

    calculationExpressionUiSetter(currentCalculationExpression);
  }
}

export default CalculationExpressionUpdateAdapter;
