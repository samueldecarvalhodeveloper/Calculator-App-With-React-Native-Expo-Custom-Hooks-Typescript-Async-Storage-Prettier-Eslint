import LanguageAbstraction from "./language_abstraction";

class FrenchLanguage extends LanguageAbstraction {
  public THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
    "Basculer Le Thème";

  public NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
    "Erreur (Expression Non Valide)";
}

export default FrenchLanguage;
