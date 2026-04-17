import { describe, test, expect } from "@jest/globals";
import { LAST_EXPRESSION_VALUE } from "../../../../constants/user_interface_constants";
import KeyValueDatabaseChecker from "../../../../infrastructure/internals/checkers/key_value_database_checker";
import { JSON_STRING_OF_OBJECT } from "../../../../constants/infrastructure/key_value_database_constants";

describe('Test Class: "KeyValueDatabaseChecker"; Behavior', () => {
  test('Test If Method: "isStringifiedDataFromStoreAnEmptyString"; Returns True If Stringified Stored Data Is An Empty String', () => {
    expect(
      KeyValueDatabaseChecker.isStringifiedDataFromStoreEmpty(""),
    ).toBeTruthy();
    expect(
      KeyValueDatabaseChecker.isStringifiedDataFromStoreEmpty(
        JSON_STRING_OF_OBJECT(LAST_EXPRESSION_VALUE),
      ),
    ).toBeFalsy();
  });
});
