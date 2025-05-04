import Themes from "../assets/themes";
import CurrentDeviceThemeRetriever from "../infrastructure/anticorruption_layer/current_device_theme_retriever";
import { isCurrentDeviceThemeDark } from "../infrastructure/specifications/ui_specifications";

class DeviceThemeRecuperator {
  private constructor() {}

  public static getDeviceTheme(): Themes {
    const currentDeviceTheme: string =
      CurrentDeviceThemeRetriever.getCurrentDeviceTheme();

    return isCurrentDeviceThemeDark(currentDeviceTheme)
      ? Themes.DARK
      : Themes.LIGHT;
  }
}

export default DeviceThemeRecuperator;
