import LanguageAbstraction from "./language_abstraction";

class EnglishLanguage extends LanguageAbstraction {
  public THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
    "Toggle Theme";

  public NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
    "Error (Not Valid Expression)";
}

export default EnglishLanguage;
