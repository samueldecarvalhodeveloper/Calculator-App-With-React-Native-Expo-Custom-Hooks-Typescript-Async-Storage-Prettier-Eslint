import { describe, expect, test } from "@jest/globals";
import StoreDataEntity from "../../../../../../domains/key_value_store/infrastructure/entities/store_data_entity";
import { LAST_CALCULATION_VALUE } from "../../../../../constants/key_value_store_constants";

describe('Test Class: "StoreDataEntity"; Behavior', () => {
  test("Test If Entity Describes How A Store Data Should Look Correctly", () => {
    const storeDataEntity: StoreDataEntity = new StoreDataEntity(
      LAST_CALCULATION_VALUE,
    );

    expect(storeDataEntity.data).toEqual(LAST_CALCULATION_VALUE);
  });
});
