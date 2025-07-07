import ThemeStore from "./theme_store";

class ThemeStoreFactory {
  private static instance: ThemeStore | null = null;

  private constructor() {}

  public static getInstance(): ThemeStore {
    if (this.instance === null) {
      this.instance = new ThemeStore();
    }

    return this.instance;
  }
}

export default ThemeStoreFactory;
