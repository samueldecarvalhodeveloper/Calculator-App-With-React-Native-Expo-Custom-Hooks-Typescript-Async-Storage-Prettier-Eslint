import { describe, test, expect } from "@jest/globals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import KeyValueSpecifications from "../../../../../../domains/key_value_store/infrastructure/specifications/key_value_specifications";
import KeyValueStore from "../../../../../../domains/key_value_store/key_value_store";
import {
  LAST_CALCULATION_KEY,
  LAST_CALCULATION_VALUE,
} from "../../../../../constants/key_value_store_constants";

describe('Test Class: "KeyValueSpecifications"; Behavior', () => {
  test('Test If Method: "isStringifiedDataFromStoreAnEmptyString"; Returns True If Stringified Stored Data Is An Empty String Correctly', async () => {
    await KeyValueStore.setItem(LAST_CALCULATION_KEY, LAST_CALCULATION_VALUE);

    const stringifiedStoredData: string = (await AsyncStorage.getItem(
      LAST_CALCULATION_KEY,
    )) as string;

    expect(
      KeyValueSpecifications.isStringifiedDataFromStoreAnEmptyString(""),
    ).toBeTruthy();
    expect(
      KeyValueSpecifications.isStringifiedDataFromStoreAnEmptyString(
        stringifiedStoredData,
      ),
    ).toBeFalsy();
  });
});
