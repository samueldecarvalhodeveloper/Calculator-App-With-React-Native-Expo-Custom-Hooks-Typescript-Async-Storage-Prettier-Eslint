import { describe, expect, test } from "@jest/globals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LAST_CALCULATION_KEY,
  LAST_CALCULATION_VALUE,
} from "../../../../../constants/key_value_store_constants";
import KeyValueDatabase from "../../../../../../domains/key_value_store/infrastructure/anticorruption_layer/key_value_database";
import { StoreValue } from "../../../../../../domains/key_value_store/infrastructure/environment/typescript/types";
import { NOT_EXISTING_ITEM_ERROR_NAME } from "../../../../../../constants/domains/key_value_store/key_value_store_constants";

describe('Test Class: "KeyValueDatabase"; Behavior', () => {
  test('Test If Method: "setItem"; Creates Data From Key value Database Correctly', async () => {
    await KeyValueDatabase.setItem(
      LAST_CALCULATION_KEY,
      LAST_CALCULATION_VALUE,
    );

    const dataStoredInKeyValueDatabase: string = (await AsyncStorage.getItem(
      LAST_CALCULATION_KEY,
    )) as string;

    expect(dataStoredInKeyValueDatabase).toEqual(LAST_CALCULATION_VALUE);
  });

  test('Test If Method: "getKeyData"; Returns The Stored Value From Key value Database Correctly', async () => {
    await AsyncStorage.setItem(LAST_CALCULATION_KEY, LAST_CALCULATION_VALUE);

    const parsedJsonFromStoredData: StoreValue =
      await KeyValueDatabase.getSelectedKeyData(LAST_CALCULATION_KEY);

    expect(parsedJsonFromStoredData).toEqual(LAST_CALCULATION_VALUE);
  });

  test('Test If Method: "getKeyData"; Throws A "NotExistingKeyError" Error If Chosen Task Does Not Exist Correctly', async () => {
    try {
      KeyValueDatabase.getSelectedKeyData(LAST_CALCULATION_KEY);
    } catch (error) {
      expect((error as Error).name).toEqual(NOT_EXISTING_ITEM_ERROR_NAME);
    }
  });
});
