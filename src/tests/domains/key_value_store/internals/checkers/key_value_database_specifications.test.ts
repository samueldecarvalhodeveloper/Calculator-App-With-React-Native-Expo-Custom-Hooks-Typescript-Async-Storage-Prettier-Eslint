import { describe, test, expect } from "@jest/globals";
import KeyValueDatabaseChecker from "../../../../../domains/key_value_database/internals/checkers/key_value_database_checker";
import { JSON_STRING_OF_OBJECT } from "../../../../../constants/domains/key_value_database_constants";
import { LAST_CALCULATION_VALUE } from "../../../../../constants/user_interface_constants";

describe('Test Class: "KeyValueDatabaseChecker"; Behavior', () => {
  test('Test If Method: "isStringifiedDataFromStoreAnEmptyString"; Returns True If Stringified Stored Data Is An Empty String', () => {
    expect(
      KeyValueDatabaseChecker.isStringifiedDataFromStoreEmpty(""),
    ).toBeTruthy();
    expect(
      KeyValueDatabaseChecker.isStringifiedDataFromStoreEmpty(
        JSON_STRING_OF_OBJECT(LAST_CALCULATION_VALUE),
      ),
    ).toBeFalsy();
  });
});
