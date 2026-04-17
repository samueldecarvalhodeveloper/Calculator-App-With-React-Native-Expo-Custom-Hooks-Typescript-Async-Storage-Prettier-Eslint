import { describe, test, expect } from "@jest/globals";
import Characters from "../../../domains/calculator/characters";
import { LAST_SESSION_EXPRESSION_STORE_KEY } from "../../../constants/user_interface_constants";
import LastSessionExpressionStore from "../../../user_interface/store/last_session_expression_store";
import KeyValueDatabase from "../../../infrastructure/adapters/key_value_database";

describe('Test Class: "LastSessionExpressionStore"; Behavior', () => {
  test('Test If Method: "getExpression"; Returns The Last Session Expression From Key Value Database', async () => {
    const calculationExpression: string =
      Characters.ONE + Characters.ADDITION + Characters.ONE;
    await KeyValueDatabase.setItem(
      LAST_SESSION_EXPRESSION_STORE_KEY,
      calculationExpression,
    );

    const lastSessionExpression: string =
      await LastSessionExpressionStore.getExpression();

    expect(lastSessionExpression).toEqual(calculationExpression);
  });

  test('Test If Method: "setExpression"; Updates The Expression Expression On Key Value Database', async () => {
    const calculationExpression: string =
      Characters.ONE + Characters.ADDITION + Characters.ONE;

    await LastSessionExpressionStore.setExpression(calculationExpression);

    const expressionFromKeyValueDatabase: string =
      (await KeyValueDatabase.getItem(
        LAST_SESSION_EXPRESSION_STORE_KEY,
      )) as string;

    expect(expressionFromKeyValueDatabase).toEqual(calculationExpression);
  });
});
