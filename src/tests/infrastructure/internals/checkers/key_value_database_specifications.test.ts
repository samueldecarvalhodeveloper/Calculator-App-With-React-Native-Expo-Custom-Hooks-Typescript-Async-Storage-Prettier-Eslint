import { describe, test, expect } from "@jest/globals";
import KeyValueDatabaseChecker from "../../../../infrastructure/internals/checkers/key_value_database_checker";
import { JSON_STRING_OF_OBJECT } from "../../../../constants/infrastructure/key_value_database_constants";
import { EXPRESSION_TO_BE_EVALUATED } from "../../../../constants/domains/calculator_constants";

describe('Test Class: "KeyValueDatabaseChecker"; Behavior', () => {
  test('Test If Method: "isStringifiedDataFromStoreAnEmptyString"; Returns True If Stringified Stored Data Is An Empty String', () => {
    expect(
      KeyValueDatabaseChecker.isStringifiedDataFromStoreEmpty(""),
    ).toBeTruthy();
    expect(
      KeyValueDatabaseChecker.isStringifiedDataFromStoreEmpty(
        JSON_STRING_OF_OBJECT(EXPRESSION_TO_BE_EVALUATED),
      ),
    ).toBeFalsy();
  });
});
