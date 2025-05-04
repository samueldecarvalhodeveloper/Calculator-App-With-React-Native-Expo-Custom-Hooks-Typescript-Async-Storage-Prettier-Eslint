import {
  ENGLISH_LANGUAGE,
  FRENCH_LANGUAGE,
  GERMAN_LANGUAGE,
  PORTUGUESE_LANGUAGE,
  SPANISH_LANGUAGE,
} from "../constants/device_utilities_constants";
import DeviceLanguageRetriever from "../infrastructure/anticorruption_layer/device_language_retriever";
import Languages from "../ui_languages_specific_constants.ts/languages";

class DeviceLanguageRecuperator {
  private constructor() {}

  public static getDeviceLanguage(): Languages {
    const deviceLanguage: string = DeviceLanguageRetriever.getDeviceLanguage();

    if (deviceLanguage === PORTUGUESE_LANGUAGE) {
      return Languages.PORTUGUESE;
    }
    if (deviceLanguage === ENGLISH_LANGUAGE) {
      return Languages.ENGLISH;
    }
    if (deviceLanguage === SPANISH_LANGUAGE) {
      return Languages.SPANISH;
    }
    if (deviceLanguage === FRENCH_LANGUAGE) {
      return Languages.FRENCH;
    }
    if (deviceLanguage === GERMAN_LANGUAGE) {
      return Languages.GERMAN;
    }
    return Languages.ENGLISH;
  }
}

export default DeviceLanguageRecuperator;
