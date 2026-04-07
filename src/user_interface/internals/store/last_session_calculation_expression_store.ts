import { LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY } from "../../../constants/user_interface_constants";
import KeyValueDatabase from "../../../domains/key_value_database/key_value_database";

class LastSessionCalculationExpressionStore {
  private constructor() {}

  public static async getExpression(): Promise<string> {
    return KeyValueDatabase.getItem(
      LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY,
    );
  }

  public static async updateExpression(expression: string): Promise<void> {
    await KeyValueDatabase.setItem(
      LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY,
      expression,
    );
  }
}

export default LastSessionCalculationExpressionStore;
