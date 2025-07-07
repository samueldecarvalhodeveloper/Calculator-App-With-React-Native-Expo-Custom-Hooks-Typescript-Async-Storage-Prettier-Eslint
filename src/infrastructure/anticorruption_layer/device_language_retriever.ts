import { getLocales } from "expo-localization";

class DeviceLanguageRetriever {
  private constructor() {}

  public static getDeviceLanguage(): string {
    return getLocales()[0].languageCode!;
  }
}

export default DeviceLanguageRetriever;
