import EnglishLanguage from "./english_language";
import FrenchLanguage from "./french_language";
import GermanLanguage from "./german_language";
import LanguageAbstraction from "./language_abstraction";
import Languages from "./languages";
import PortugueseLanguage from "./portuguese_language";
import SpanishLanguage from "./spanish_language";

class LanguageFactory {
  private static instance: LanguageAbstraction | null = null;

  private constructor() {}

  public static getInstance(language: Languages): LanguageAbstraction {
    if (this.instance === null) {
      switch (language) {
        case Languages.ENGLISH:
          this.instance = new EnglishLanguage();
          break;

        case Languages.PORTUGUESE:
          this.instance = new PortugueseLanguage();
          break;

        case Languages.GERMAN:
          this.instance = new GermanLanguage();
          break;

        case Languages.SPANISH:
          this.instance = new SpanishLanguage();
          break;

        case Languages.FRENCH:
          this.instance = new FrenchLanguage();
          break;

        default:
          this.instance = new EnglishLanguage();
          break;
      }
    }

    return this.instance;
  }
}

export default LanguageFactory;
