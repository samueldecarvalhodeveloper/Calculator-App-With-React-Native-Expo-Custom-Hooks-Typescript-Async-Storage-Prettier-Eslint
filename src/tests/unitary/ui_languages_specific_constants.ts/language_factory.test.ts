import { describe, test, expect } from "@jest/globals";
import LanguageFactory from "../../../ui_languages_specific_constants.ts/language_factory";
import LanguageAbstraction from "../../../ui_languages_specific_constants.ts/language_abstraction";
import Languages from "../../../ui_languages_specific_constants.ts/languages";
import { PORTUGUESE_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../constants/screens/home_screen_constants";

describe('Test Class: "LanguageFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Instantiates A Working Class Correctly', () => {
    const portugueseLanguage: LanguageAbstraction = LanguageFactory.getInstance(
      Languages.PORTUGUESE,
    );

    expect(portugueseLanguage.NOT_VALID_EXPRESSION_ERROR_MESSAGE).toEqual(
      PORTUGUESE_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );
  });
});
