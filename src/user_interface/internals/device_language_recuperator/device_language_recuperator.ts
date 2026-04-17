import { getLocales } from "expo-localization";
import Languages from "../enums/languages";

class DeviceLanguageRecuperator {
  private constructor() {}

  public static getDeviceLanguage(): Languages {
    const deviceLanguage: string = getLocales()[0].languageCode!;

    if (deviceLanguage === Languages.PORTUGUESE) {
      return Languages.PORTUGUESE;
    }
    if (deviceLanguage === Languages.ENGLISH) {
      return Languages.ENGLISH;
    }
    if (deviceLanguage === Languages.SPANISH) {
      return Languages.SPANISH;
    }
    if (deviceLanguage === Languages.FRENCH) {
      return Languages.FRENCH;
    }
    if (deviceLanguage === Languages.GERMAN) {
      return Languages.GERMAN;
    }
    return Languages.ENGLISH;
  }
}

export default DeviceLanguageRecuperator;
