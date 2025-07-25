import { useEffect, useMemo, useState } from "react";
import Themes from "../assets/themes";
import DeviceThemeRecuperator from "../device_theme_recuperator/device_theme_recuperator";
import ThemeStore from "../theme_store/theme_store";
import ThemeStoreFactory from "../theme_store/theme_store_factory";
import { isCurrentThemeDark } from "../infrastructure/specifications/ui_specifications";

function useTheme() {
  const themeStore: ThemeStore = useMemo(
    () => ThemeStoreFactory.getInstance(),
    [],
  );
  const deviceTheme: Themes = useMemo(
    () => DeviceThemeRecuperator.getDeviceTheme(),
    [],
  );
  const [theme, setTheme] = useState(deviceTheme);

  useEffect(() => {
    themeStore
      .getTheme()
      .then((storedTheme: Themes) => {
        setTheme(storedTheme);
      })
      .catch(() => {});
  }, []);

  return {
    theme,

    toggleTheme() {
      themeStore.updateTheme(
        isCurrentThemeDark(theme) ? Themes.LIGHT : Themes.DARK,
      );

      isCurrentThemeDark(theme)
        ? setTheme(Themes.LIGHT)
        : setTheme(Themes.DARK);
    },
  };
}

export default useTheme;
