import { describe, test, expect } from "@jest/globals";
import ThemeStore from "../../../../user_interface/internals/store/theme_store";
import Themes from "../../../../assets/themes";
import KeyValueDatabase from "../../../../domains/key_value_database/key_value_database";
import { THEME_STORE_KEY } from "../../../../constants/user_interface_constants";

describe('Test Class: "ThemeStore"; Behavior', () => {
  test('Test If Method: "updateTheme"; Updates Theme Key In Key Value Database', async () => {
    ThemeStore.updateTheme(Themes.DARK);

    expect(await KeyValueDatabase.getItem(THEME_STORE_KEY)).toEqual(
      Themes.DARK,
    );
  });

  test('Test If Method: "getTheme"; Returns The Theme Stored On Key Value Database', async () => {
    KeyValueDatabase.setItem(THEME_STORE_KEY, Themes.LIGHT);

    expect(await ThemeStore.getTheme()).toEqual(Themes.LIGHT);
  });
});
