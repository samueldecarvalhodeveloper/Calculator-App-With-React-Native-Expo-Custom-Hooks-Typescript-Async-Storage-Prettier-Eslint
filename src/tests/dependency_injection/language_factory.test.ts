import { describe, test, expect } from "@jest/globals";
import LanguageFactory from "../../dependency_injection/language_factory";
import Languages from "../../user_interface/internals/languages_specific_constants.ts/languages";
import { PORTUGUESE_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../constants/user_interface_constants";

describe('Test Class: "LanguageFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Returns An Instance', () => {
    const portugueseLanguage = LanguageFactory.getInstance(
      Languages.PORTUGUESE,
    );

    expect(portugueseLanguage.NOT_VALID_EXPRESSION_ERROR_MESSAGE).toEqual(
      PORTUGUESE_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );
  });
});
