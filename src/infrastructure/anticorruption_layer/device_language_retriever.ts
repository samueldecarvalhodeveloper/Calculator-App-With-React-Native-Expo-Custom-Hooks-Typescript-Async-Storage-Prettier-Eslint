import { NativeModules, Platform } from "react-native";
import { isDeviceOperationSystemIos } from "../specifications/ui_specifications";

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
      0,
      1,
    );

    return firstTwoLetterOfDeviceLanguage;
  }
}

export default DeviceLanguageRetriever;
