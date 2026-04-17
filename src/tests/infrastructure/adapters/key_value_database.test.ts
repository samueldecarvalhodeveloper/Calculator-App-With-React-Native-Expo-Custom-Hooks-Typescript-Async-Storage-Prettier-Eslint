import { describe, test, expect } from "@jest/globals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import KeyValueDatabase from "../../../infrastructure/adapters/key_value_database";
import {
  LAST_EXPRESSION_KEY,
  LAST_EXPRESSION_VALUE,
} from "../../../constants/user_interface_constants";
import { JSON_STRING_OF_OBJECT } from "../../../constants/infrastructure/key_value_database_constants";

describe('Test Class: "KeyValueDatabase"; Behavior', () => {
  test('Test If Methods: "setItem"; Stores Item In Key Value Database', async () => {
    await KeyValueDatabase.setItem(LAST_EXPRESSION_KEY, LAST_EXPRESSION_VALUE);

    const stringifiedDataFromDatabase: string = (await AsyncStorage.getItem(
      LAST_EXPRESSION_KEY,
    )) as string;

    expect(stringifiedDataFromDatabase).toEqual(
      JSON_STRING_OF_OBJECT(LAST_EXPRESSION_VALUE),
    );
  });

  test('Test If Methods: "getItem"; Returns Item Data From Key Value Database', async () => {
    await AsyncStorage.setItem(
      LAST_EXPRESSION_KEY,
      JSON_STRING_OF_OBJECT(LAST_EXPRESSION_VALUE),
    );

    const dataFromKeyValueDatabase =
      await KeyValueDatabase.getItem(LAST_EXPRESSION_KEY);

    expect(dataFromKeyValueDatabase).toEqual(LAST_EXPRESSION_VALUE);
  });
});
