import { describe, test, expect } from "@jest/globals";
import LanguageFactory from "../../dependency_injections/language_factory";
import Languages from "../../user_interface/internals/enums/languages";
import EnglishLanguage from "../../user_interface/internals/languages_specific_constants.ts/english_language";
import FrenchLanguage from "../../user_interface/internals/languages_specific_constants.ts/french_language";
import SpanishLanguage from "../../user_interface/internals/languages_specific_constants.ts/spanish_language";
import PortugueseLanguage from "../../user_interface/internals/languages_specific_constants.ts/portuguese_language";
import GermanLanguage from "../../user_interface/internals/languages_specific_constants.ts/german_language";
import LanguageAbstraction from "../../user_interface/internals/languages_specific_constants.ts/language_abstraction";

describe('Test Class: "LanguageFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Returns An Instance', () => {
    let englishInstance: LanguageAbstraction;
    let frenchInstance: LanguageAbstraction;
    let germanInstance: LanguageAbstraction;
    let portugueseInstance: LanguageAbstraction;
    let spanishInstance: LanguageAbstraction;

    englishInstance = LanguageFactory.getInstance(Languages.ENGLISH);

    LanguageFactory.instance = null;

    frenchInstance = LanguageFactory.getInstance(Languages.FRENCH);

    LanguageFactory.instance = null;

    germanInstance = LanguageFactory.getInstance(Languages.GERMAN);

    LanguageFactory.instance = null;

    portugueseInstance = LanguageFactory.getInstance(Languages.PORTUGUESE);

    LanguageFactory.instance = null;

    spanishInstance = LanguageFactory.getInstance(Languages.SPANISH);

    expect(englishInstance instanceof EnglishLanguage).toBeTruthy();
    expect(frenchInstance instanceof FrenchLanguage).toBeTruthy();
    expect(spanishInstance instanceof SpanishLanguage).toBeTruthy();
    expect(portugueseInstance instanceof PortugueseLanguage).toBeTruthy();
    expect(germanInstance instanceof GermanLanguage).toBeTruthy();
  });
});
