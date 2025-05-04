import { describe, expect, test } from "@jest/globals";
import StoreDataEntity from "../../../../domains/key_value_store/infrastructure/entities/store_data_entity";
import { LAST_CALCULATION_VALUE } from "../../../constants/key_value_store_constants";
import StoreDataEntityFactory from "../../../../domains/key_value_store/store_data_entity_factory";

describe('Test Class: "StoreDataEntityFactory"; Behavior', () => {
  test('If test method: "getInstance"; Instantiates A "StoreDataEntity" correctly', () => {
    const storeDataEntity: StoreDataEntity = StoreDataEntityFactory.getInstance(
      LAST_CALCULATION_VALUE,
    );

    expect(storeDataEntity.data).toEqual(LAST_CALCULATION_VALUE);
  });
});
