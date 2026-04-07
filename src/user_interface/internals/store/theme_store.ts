import Themes from "../../../assets/themes";
import { THEME_STORE_KEY } from "../../../constants/user_interface_constants";
import KeyValueDatabase from "../../../domains/key_value_database/key_value_database";
import { isStoredThemeDark } from "../checkers/user_interface_checker";

class ThemeStore {
  private constructor() {}

  public static async updateTheme(theme: Themes): Promise<void> {
    await KeyValueDatabase.setItem(THEME_STORE_KEY, theme);
  }

  public static async getTheme(): Promise<Themes> {
    const storedTheme = await KeyValueDatabase.getItem(THEME_STORE_KEY);

    return isStoredThemeDark(storedTheme as string)
      ? Themes.DARK
      : Themes.LIGHT;
  }
}

export default ThemeStore;
