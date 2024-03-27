import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

class KeyValueSpecifications {
  private constructor() {}

  public static isStringifiedDataFromStoreAnEmptyString(
    stringifiedDataFromStored: string | null,
  ): boolean {
    return stringifiedDataFromStored === EMPTY_STRING;
  }
}

export default KeyValueSpecifications;
