import LanguageAbstraction from "./language_abstraction";

class GermanLanguage extends LanguageAbstraction {
  public THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
    "Design Umschalten";

  public NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
    "Fehler (Kein Gültiger Ausdruck)";
}

export default GermanLanguage;
