import { LAST_SESSION_EXPRESSION_STORE_KEY } from "../../constants/user_interface_constants";
import KeyValueDatabase from "../../infrastructure/adapters/key_value_database";

class LastSessionExpressionStore {
  private constructor() {}

  public static async getExpression(): Promise<string> {
    return KeyValueDatabase.getItem(LAST_SESSION_EXPRESSION_STORE_KEY);
  }

  public static async setExpression(expression: string): Promise<void> {
    await KeyValueDatabase.setItem(
      LAST_SESSION_EXPRESSION_STORE_KEY,
      expression,
    );
  }
}

export default LastSessionExpressionStore;
