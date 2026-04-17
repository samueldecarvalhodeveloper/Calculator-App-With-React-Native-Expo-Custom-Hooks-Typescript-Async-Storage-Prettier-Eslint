import {
  FRENCH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
  FRENCH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
} from "../../../constants/user_interface_constants";
import LanguageAbstraction from "./language_abstraction";

class FrenchLanguage extends LanguageAbstraction {
  public THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
    FRENCH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL;

  public NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
    FRENCH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE;
}

export default FrenchLanguage;
