import { NativeModules, Platform } from "react-native";
import { isDeviceOperationSystemIos } from "../specifications/ui_specifications";
import {
  STRING_FIRST_CHARACTER,
  STRING_SECOND_CHARACTER,
} from "../../constants/strings_utilities_constants";

class DeviceLanguageRetriever {
  private constructor() {}

  public static getDeviceLanguage(): string {
    const deviceOperationSystem: string = Platform.OS;
    const deviceLanguage: string = isDeviceOperationSystemIos(
      deviceOperationSystem,
    )
      ? NativeModules.SettingsManager?.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;
    const firstTwoLetterOfDeviceLanguage: string = deviceLanguage.substring(
      STRING_FIRST_CHARACTER,
      STRING_SECOND_CHARACTER,
    );

    return firstTwoLetterOfDeviceLanguage;
  }
}

export default DeviceLanguageRetriever;
