import { describe, expect, test } from "@jest/globals";
import NotExistingItemError from "../../../../../../domains/key_value_store/infrastructure/errors/not_existing_item_error";
import {
  NOT_EXISTING_ITEM_ERROR_CAUSE,
  NOT_EXISTING_ITEM_ERROR_MESSAGE,
  NOT_EXISTING_ITEM_ERROR_NAME,
} from "../../../../../../constants/domains/key_value_store/key_value_store_constants";
import { THEME_STORE_KEY } from "../../../../../../constants/ui_constants";

describe('Test Class: "NotExistingItemError"; Behavior', () => {
  test("Test If Error Describes How Should A Not Existing Item Error Be Used By The System Correctly", () => {
    const error: Error = new NotExistingItemError(THEME_STORE_KEY);

    expect(error.name).toEqual(NOT_EXISTING_ITEM_ERROR_NAME);
    expect(error.message).toEqual(
      NOT_EXISTING_ITEM_ERROR_MESSAGE(THEME_STORE_KEY),
    );
    expect(error.cause).toEqual(NOT_EXISTING_ITEM_ERROR_CAUSE);
    expect(error.stack).toBeFalsy();
  });
});
