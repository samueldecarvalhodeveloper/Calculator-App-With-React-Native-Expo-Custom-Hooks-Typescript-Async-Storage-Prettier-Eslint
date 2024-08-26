import { describe, test, expect } from "@jest/globals";
import ThemeStore from "../../../theme_store/theme_store";
import Themes from "../../../assets/themes";
import KeyValueStore from "../../../domains/key_value_store/key_value_store";
import { THEME_STORE_KEY } from "../../../constants/ui_constants";

describe('Test Class: "ThemeStore"; Behavior', () => {
  test('Test If Method: "updateTheme"; Updates Theme Key In Key Value Database Correctly', async () => {
    const themeStore: ThemeStore = new ThemeStore();

    themeStore.updateTheme(Themes.DARK);

    expect(await KeyValueStore.getItem(THEME_STORE_KEY)).toEqual(Themes.DARK);
  });

  test('Test If Method: "getTheme"; Returns The Theme Stored On Key Value Database Correctly', async () => {
    const themeStore: ThemeStore = new ThemeStore();

    KeyValueStore.setItem(THEME_STORE_KEY, Themes.LIGHT);

    expect(await themeStore.getTheme()).toEqual(Themes.LIGHT);
  });
});
