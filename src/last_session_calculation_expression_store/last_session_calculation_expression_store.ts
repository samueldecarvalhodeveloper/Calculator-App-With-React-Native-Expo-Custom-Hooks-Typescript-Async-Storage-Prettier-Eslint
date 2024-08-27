import KeyValueStore from "../domains/key_value_store/key_value_store";
import { LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY } from "../constants/ui_constants";

class LastSessionCalculationExpressionStore {
  private constructor() {}

  public static async getExpression(): Promise<string> {
    return (
      await KeyValueStore.getItem(LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY)
    ).toString();
  }

  public static async updateExpression(expression: string): Promise<void> {
    await KeyValueStore.setItem(
      LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY,
      expression,
    );
  }
}

export default LastSessionCalculationExpressionStore;
