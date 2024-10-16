import AsyncStorage from "@react-native-async-storage/async-storage";
import KeyValueSpecifications from "../specifications/key_value_specifications";
import NotExistingItemError from "../errors/not_existing_item_error";

class KeyValueDatabase {
  private constructor() {}

  public static async setItem(key: string, value: string): Promise<void> {
    await AsyncStorage.setItem(key, value);
  }

  public static async getSelectedKeyData(key: string): Promise<string> {
    const dataFromKeyValueDatabase: string =
      (await AsyncStorage.getItem(key)) ?? "";

    if (
      KeyValueSpecifications.isStringifiedDataFromStoreAnEmptyString(
        dataFromKeyValueDatabase,
      )
    ) {
      throw new NotExistingItemError(key);
    }

    return dataFromKeyValueDatabase;
  }
}

export default KeyValueDatabase;
