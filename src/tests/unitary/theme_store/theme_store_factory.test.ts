import { describe, test, expect } from "@jest/globals";
import ThemeStoreFactory from "../../../theme_store/theme_store_factory";
import ThemeStore from "../../../theme_store/theme_store";
import Themes from "../../../assets/themes";

describe('Test Class: "ThemeStoreFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Instantiates A Working Class Correctly', async () => {
    const themeStore: ThemeStore = ThemeStoreFactory.getInstance();

    themeStore.updateTheme(Themes.DARK);

    expect(await themeStore.getTheme()).toEqual(Themes.DARK);
  });
});
