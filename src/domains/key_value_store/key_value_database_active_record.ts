import { StoreValue } from "./infrastructure/environment/typescript/types";
import StoreDataEntity from "./infrastructure/entities/store_data_entity";
import StoreDataEntityFactory from "./store_data_entity_factory";
import KeyValueDatabase from "./infrastructure/anticorruption_layer/key_value_database";
import JsonTransformer from "./infrastructure/anticorruption_layer/json_transformer";

class KeyValueDatabaseActiveRecord {
  private constructor() {}

  public static async getKeyData(key: string): Promise<StoreValue> {
    const stringifiedJsonOfDataFromDatabase =
      await KeyValueDatabase.getSelectedKeyData(key);
    const parsedJsonFromStoredData: StoreDataEntity =
      JsonTransformer.getRealObjectFromJsonString<StoreDataEntity>(
        stringifiedJsonOfDataFromDatabase,
      );
    return parsedJsonFromStoredData.data;
  }

  public static async setItem(key: string, value: StoreValue): Promise<void> {
    const dataToBeStored: StoreDataEntity =
      StoreDataEntityFactory.getInstance(value);
    const stringifiedJsonOfDataToBeStored: string =
      JsonTransformer.getJsonStringFromRealObject(dataToBeStored);

    await KeyValueDatabase.setItem(key, stringifiedJsonOfDataToBeStored);
  }
}

export default KeyValueDatabaseActiveRecord;
