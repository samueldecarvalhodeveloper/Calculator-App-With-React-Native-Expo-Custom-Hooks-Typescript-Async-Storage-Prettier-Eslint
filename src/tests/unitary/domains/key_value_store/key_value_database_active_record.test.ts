import { describe, expect, test } from "@jest/globals";
import KeyValueDatabaseActiveRecord from "../../../../domains/key_value_store/key_value_database_active_record";
import {
  LAST_CALCULATION_KEY,
  LAST_CALCULATION_VALUE,
} from "../../../constants/key_value_store_constants";
import KeyValueDatabase from "../../../../domains/key_value_store/infrastructure/anticorruption_layer/key_value_database";
import StoreDataEntity from "../../../../domains/key_value_store/infrastructure/entities/store_data_entity";
import { StoreValue } from "../../../../domains/key_value_store/infrastructure/environment/typescript/types";
import StoreDataEntityFactory from "../../../../domains/key_value_store/store_data_entity_factory";

describe('Test Class: "KeyValueDatabaseActiveRecord"; Behavior', () => {
  test('Test If Method: "setItem"; Creates Data In Key value Database Correctly', async () => {
    await KeyValueDatabaseActiveRecord.setItem(
      LAST_CALCULATION_KEY,
      LAST_CALCULATION_VALUE,
    );

    const stringifiedJsonFromStoredData: string =
      await KeyValueDatabase.getSelectedKeyData(LAST_CALCULATION_KEY);

    const parsedJsonFromStoredData: StoreDataEntity = JSON.parse(
      stringifiedJsonFromStoredData,
    );

    expect(parsedJsonFromStoredData.data).toEqual(LAST_CALCULATION_VALUE);
  });

  test('Test If Method: "getKeyData"; Returns The Stored Value From Key value Database Correctly', async () => {
    const storeDataToBeStored: StoreDataEntity =
      StoreDataEntityFactory.getInstance(LAST_CALCULATION_VALUE);
    const storeDataToBeStoredJsonStringified: string =
      JSON.stringify(storeDataToBeStored);

    await KeyValueDatabase.setItem(
      LAST_CALCULATION_KEY,
      storeDataToBeStoredJsonStringified,
    );

    const dataFromKeyValueDatabase: StoreValue =
      await KeyValueDatabaseActiveRecord.getKeyData(LAST_CALCULATION_KEY);

    expect(dataFromKeyValueDatabase).toEqual(LAST_CALCULATION_VALUE);
  });
});
