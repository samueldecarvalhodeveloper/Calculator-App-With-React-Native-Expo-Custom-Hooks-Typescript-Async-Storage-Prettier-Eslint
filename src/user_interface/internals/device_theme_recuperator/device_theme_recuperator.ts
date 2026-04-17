import { Appearance } from "react-native";
import Themes from "../../../assets/themes";
import { isCurrentDeviceThemeDark } from "../checkers/user_interface_checker";
import { LIGHT_THEME } from "../../../constants/user_interface_constants";

class DeviceThemeRecuperator {
  private constructor() {}

  public static getDeviceTheme(): Themes {
    const currentDeviceTheme: string =
      Appearance.getColorScheme() || LIGHT_THEME;

    return isCurrentDeviceThemeDark(currentDeviceTheme)
      ? Themes.DARK
      : Themes.LIGHT;
  }
}

export default DeviceThemeRecuperator;
