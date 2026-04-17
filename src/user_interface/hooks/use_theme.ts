import { useCallback, useEffect, useMemo, useState } from "react";
import DeviceThemeRecuperator from "../internals/device_theme_recuperator/device_theme_recuperator";
import Themes from "../../assets/themes";
import ThemeStore from "../store/theme_store";
import { isThemeDark } from "../internals/checkers/user_interface_checker";

function useTheme() {
  const deviceTheme = useMemo(
    () => DeviceThemeRecuperator.getDeviceTheme(),
    [],
  );
  const [theme, setTheme] = useState(deviceTheme);
  const toggleTheme = useCallback(() => {
    setTheme((previousTheme) => {
      ThemeStore.setTheme(isThemeDark(theme) ? Themes.LIGHT : Themes.DARK);

      return isThemeDark(previousTheme) ? Themes.LIGHT : Themes.DARK;
    });
  }, []);

  useEffect(() => {
    ThemeStore.getTheme()
      .then(setTheme)
      .catch(() => {});
  }, []);

  return { theme, toggleTheme };
}

export default useTheme;
