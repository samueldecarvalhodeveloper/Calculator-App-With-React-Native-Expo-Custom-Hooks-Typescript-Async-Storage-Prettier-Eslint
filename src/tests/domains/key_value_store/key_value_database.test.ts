import { describe, test, expect } from "@jest/globals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import KeyValueDatabase from "../../../domains/key_value_database/key_value_database";
import {
  LAST_CALCULATION_KEY,
  LAST_CALCULATION_VALUE,
} from "../../../constants/user_interface_constants";
import { JSON_STRING_OF_OBJECT } from "../../../constants/domains/key_value_database_constants";

describe('Test Class: "KeyValueDatabase"; Behavior', () => {
  test('Test If Methods: "setItem"; Stores Item In Key Value Database', async () => {
    await KeyValueDatabase.setItem(
      LAST_CALCULATION_KEY,
      LAST_CALCULATION_VALUE,
    );

    const stringifiedDataFromDatabase: string = (await AsyncStorage.getItem(
      LAST_CALCULATION_KEY,
    )) as string;

    expect(stringifiedDataFromDatabase).toEqual(
      JSON_STRING_OF_OBJECT(LAST_CALCULATION_VALUE),
    );
  });

  test('Test If Methods: "getItem"; Gets Item Data From Key Value Database', async () => {
    await AsyncStorage.setItem(
      LAST_CALCULATION_KEY,
      JSON_STRING_OF_OBJECT(LAST_CALCULATION_VALUE),
    );

    const dataFromKeyValueDatabase =
      await KeyValueDatabase.getItem(LAST_CALCULATION_KEY);

    expect(dataFromKeyValueDatabase).toEqual(LAST_CALCULATION_VALUE);
  });
});
