import Themes from "../assets/themes";
import { THEME_STORE_KEY } from "../constants/ui_constants";
import { StoreValue } from "../domains/key_value_store/infrastructure/environment/typescript/types";
import KeyValueStore from "../domains/key_value_store/key_value_store";
import { isStoredThemeDark } from "../infrastructure/specifications/ui_specifications";

class ThemeStore {
  public constructor() {}

  public async updateTheme(theme: Themes): Promise<void> {
    await KeyValueStore.setItem(THEME_STORE_KEY, theme);
  }

  public async getTheme(): Promise<Themes> {
    const storedTheme: StoreValue =
      await KeyValueStore.getItem(THEME_STORE_KEY);

    return isStoredThemeDark(storedTheme as string)
      ? Themes.DARK
      : Themes.LIGHT;
  }
}

export default ThemeStore;
