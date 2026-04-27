/* eslint-disable no-empty */

import { useCallback, useEffect, useState } from "react";
import DeviceThemeRecuperator from "../internals/device_theme_recuperator/device_theme_recuperator";
import Themes from "../../assets/themes";
import ThemeStore from "../store/theme_store";
import {
  isCurrentThemeDark,
  isThemeDark,
} from "../internals/checkers/user_interface_checker";
import ThemeValueObject from "../internals/value_objects/theme_value_objects/generic/theme_value_object";
import DarkThemeValueObject from "../internals/value_objects/theme_value_objects/concrete/dark_theme_value_object";
import LightThemeValueObject from "../internals/value_objects/theme_value_objects/concrete/light_theme_value_object";

function useTheme() {
  const deviceTheme = DeviceThemeRecuperator.getDeviceTheme();
  const [theme, setTheme] = useState<ThemeValueObject>(
    isThemeDark(deviceTheme)
      ? new DarkThemeValueObject()
      : new LightThemeValueObject(),
  );
  const toggleTheme = useCallback(async () => {
    const currentTheme = isCurrentThemeDark(theme!)
      ? new LightThemeValueObject()
      : new DarkThemeValueObject();

    await ThemeStore.setTheme(
      isCurrentThemeDark(currentTheme) ? Themes.DARK : Themes.LIGHT,
    );

    setTheme(currentTheme);
  }, [theme]);

  useEffect(() => {
    async function setCurrentTheme() {
      try {
        const currentTheme = await ThemeStore.getTheme();
        setTheme(
          isThemeDark(currentTheme)
            ? new DarkThemeValueObject()
            : new LightThemeValueObject(),
        );
      } catch {}
    }

    setCurrentTheme();
  }, []);

  return { theme: theme!, toggleTheme };
}

export default useTheme;
