import AsyncStorage from "@react-native-async-storage/async-storage";
import KeyValueDatabaseChecker from "./internals/checkers/key_value_database_checker";
import NotExistingItemError from "./not_existing_item_error";
import StoreData from "./internals/entities/store_data";

class KeyValueDatabase {
  private constructor() {}

  public static async setItem(
    key: string,
    value: number | string | boolean,
  ): Promise<void> {
    const dataToBeStored: StoreData = new StoreData(value);
    const stringifiedJsonOfDataToBeStored: string =
      JSON.stringify(dataToBeStored);

    await AsyncStorage.setItem(key, stringifiedJsonOfDataToBeStored);
  }

  public static async getItem(key: string): Promise<string> {
    const dataFromKeyValueDatabase: string =
      (await AsyncStorage.getItem(key)) ?? "";

    if (
      KeyValueDatabaseChecker.isStringifiedDataFromStoreEmpty(
        dataFromKeyValueDatabase,
      )
    ) {
      throw new NotExistingItemError(key);
    }

    return (JSON.parse(dataFromKeyValueDatabase) as StoreData).data;
  }
}

export default KeyValueDatabase;
