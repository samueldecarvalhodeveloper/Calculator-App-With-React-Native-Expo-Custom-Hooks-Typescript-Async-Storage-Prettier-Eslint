import { StoreValue } from "./infrastructure/environment/typescript/types";
import KeyValueDatabaseActiveRecord from "./key_value_database_active_record";

class KeyValueStore {
  private constructor() {}

  public static async setItem(key: string, value: StoreValue): Promise<void> {
    await KeyValueDatabaseActiveRecord.setItem(key, value);
  }

  public static async getItem(key: string): Promise<StoreValue> {
    return KeyValueDatabaseActiveRecord.getKeyData(key);
  }
}

export default KeyValueStore;
