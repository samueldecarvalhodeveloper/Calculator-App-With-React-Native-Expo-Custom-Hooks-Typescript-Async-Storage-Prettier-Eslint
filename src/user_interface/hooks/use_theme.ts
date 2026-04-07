import { useCallback, useEffect, useMemo, useState } from "react";
import DeviceThemeRecuperator from "../internals/concerns/device_theme_recuperator";
import ThemeStore from "../internals/store/theme_store";
import { isCurrentThemeDark } from "../internals/checkers/user_interface_checker";
import Themes from "../../assets/themes";

function useTheme() {
  const deviceTheme = useMemo(
    () => DeviceThemeRecuperator.getDeviceTheme(),
    [],
  );
  const [theme, setTheme] = useState(deviceTheme);
  const toggleTheme = useCallback(() => {
    setTheme((previousTheme) => {
      ThemeStore.updateTheme(
        isCurrentThemeDark(theme) ? Themes.LIGHT : Themes.DARK,
      );

      return isCurrentThemeDark(previousTheme) ? Themes.LIGHT : Themes.DARK;
    });
  }, []);

  useEffect(() => {
    ThemeStore.getTheme()
      .then((storedTheme: Themes) => {
        setTheme(storedTheme);
      })
      .catch(() => {});
  }, []);

  return { theme, toggleTheme };
}

export default useTheme;
