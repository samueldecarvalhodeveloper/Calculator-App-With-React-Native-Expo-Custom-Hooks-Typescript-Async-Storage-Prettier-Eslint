class KeyValueDatabaseChecker {
  private constructor() {}

  public static isStringifiedDataFromStoreEmpty(
    stringifiedDataFromStored: string | null,
  ): boolean {
    return stringifiedDataFromStored === "";
  }
}

export default KeyValueDatabaseChecker;
