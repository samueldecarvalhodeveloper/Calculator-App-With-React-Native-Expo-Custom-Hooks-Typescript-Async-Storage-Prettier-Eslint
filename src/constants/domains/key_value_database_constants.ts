import StoreData from "../../domains/key_value_database/internals/entities/store_data";

export const NOT_EXISTING_ITEM_ERROR_NAME: string = "Not Existing Item Error";

export const NOT_EXISTING_ITEM_ERROR_CAUSE: string =
  "Chosen Item Does Not Exist In Key Value Store";

export function NOT_EXISTING_ITEM_ERROR_MESSAGE(itemKey: string): string {
  return `Item With Key: "${itemKey}"; Does Not Exist!`;
}

export const REAL_OBJECT_DATA: string = "Hello, World!";

export function JSON_STRING_OF_OBJECT(value: any) {
  const storeData = new StoreData(value);

  return JSON.stringify(storeData);
}
