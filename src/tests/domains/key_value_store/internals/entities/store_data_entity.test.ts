import { describe, expect, test } from "@jest/globals";
import StoreData from "../../../../../domains/key_value_database/internals/entities/store_data";
import { LAST_CALCULATION_VALUE } from "../../../../../constants/user_interface_constants";

describe('Test Class: "StoreDataEntity"; Behavior', () => {
  test("Test If Entity Describes How A Store Data Should Look", () => {
    const instance: StoreData = new StoreData(LAST_CALCULATION_VALUE);

    expect(instance.data).toEqual(LAST_CALCULATION_VALUE);
  });
});
