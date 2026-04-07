import Themes from "../../../assets/themes";
import { isCurrentDeviceThemeDark } from "../checkers/user_interface_checker";
import CurrentDeviceThemeRetriever from "./current_device_theme_retriever";

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
