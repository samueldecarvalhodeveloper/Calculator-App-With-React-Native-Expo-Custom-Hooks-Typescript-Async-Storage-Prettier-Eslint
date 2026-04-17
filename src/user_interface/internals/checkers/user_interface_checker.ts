import Themes from "../../../assets/themes";
import {
  DARK_DEVICE_THEME,
  EXTRA_SMALL_WINDOW_HEIGHT,
} from "../../../constants/user_interface_constants";

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
  isThemeDark,
  isCurrentDeviceThemeDark,
  isCurrentWindowHeightSmallerOrEqualThanExtraSmall,
};
