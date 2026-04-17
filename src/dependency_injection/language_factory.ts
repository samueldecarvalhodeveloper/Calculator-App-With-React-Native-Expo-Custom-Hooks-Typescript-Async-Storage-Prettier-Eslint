import EnglishLanguage from "../user_interface/internals/languages_specific_constants.ts/english_language";
import FrenchLanguage from "../user_interface/internals/languages_specific_constants.ts/french_language";
import GermanLanguage from "../user_interface/internals/languages_specific_constants.ts/german_language";
import LanguageAbstraction from "../user_interface/internals/languages_specific_constants.ts/language_abstraction";
import Languages from "../user_interface/internals/enums/languages";
import PortugueseLanguage from "../user_interface/internals/languages_specific_constants.ts/portuguese_language";
import SpanishLanguage from "../user_interface/internals/languages_specific_constants.ts/spanish_language";

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
