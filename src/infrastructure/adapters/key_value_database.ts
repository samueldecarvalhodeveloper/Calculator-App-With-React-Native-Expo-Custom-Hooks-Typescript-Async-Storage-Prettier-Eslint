import AsyncStorage from "@react-native-async-storage/async-storage";
import DataEntity from "../internals/entities/data_entity";
import KeyValueDatabaseChecker from "../internals/checkers/key_value_database_checker";
import NotExistingItemError from "../errors/not_existing_item_error";

class KeyValueDatabase {
  private constructor() {}

  public static async setItem(
    key: string,
    value: number | string | boolean,
  ): Promise<void> {
    const dataToBeStored = new DataEntity(value);
    const stringifiedJsonOfDataToBeStored: string =
      JSON.stringify(dataToBeStored);

    await AsyncStorage.setItem(key, stringifiedJsonOfDataToBeStored);
  }

  public static async getItem<T>(key: string): Promise<T> {
    const dataFromKeyValueDatabase: string =
      (await AsyncStorage.getItem(key)) ?? "";

    if (
      KeyValueDatabaseChecker.isStringifiedDataFromStoreEmpty(
        dataFromKeyValueDatabase,
      )
    ) {
      throw new NotExistingItemError(key);
    }

    return (JSON.parse(dataFromKeyValueDatabase) as DataEntity<T>).data;
  }
}

export default KeyValueDatabase;
