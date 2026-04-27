import Themes from "../../../assets/themes";
import {
  DARK_DEVICE_THEME,
  EXTRA_SMALL_WINDOW_HEIGHT,
} from "../../../constants/user_interface_constants";
import DarkThemeValueObject from "../value_objects/theme_value_objects/concrete/dark_theme_value_object";
import ThemeValueObject from "../value_objects/theme_value_objects/generic/theme_value_object";

function isCurrentThemeDark(theme: ThemeValueObject): boolean {
  return theme instanceof DarkThemeValueObject;
}

function isThemeDark(theme: Themes): boolean {
  return theme === Themes.DARK;
}

function isCurrentDeviceThemeDark(currentDeviceTheme: string): boolean {
  return currentDeviceTheme === DARK_DEVICE_THEME;
}

function isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
  currentWindowSize: number,
): boolean {
  return currentWindowSize <= EXTRA_SMALL_WINDOW_HEIGHT;
}

export {
  isCurrentThemeDark,
  isThemeDark,
  isCurrentDeviceThemeDark,
  isCurrentWindowHeightSmallerOrEqualThanExtraSmall,
};
