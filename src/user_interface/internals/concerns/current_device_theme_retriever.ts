import { Appearance } from "react-native";
import { DEVICE_LIGHT_THEME } from "../../../constants/user_interface_constants";

class CurrentDeviceThemeRetriever {
  private constructor() {}

  public static getCurrentDeviceTheme(): string {
    return Appearance.getColorScheme() || DEVICE_LIGHT_THEME;
  }
}

export default CurrentDeviceThemeRetriever;
