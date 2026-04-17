import {
  GERMAN_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
  GERMAN_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
} from "../../../constants/user_interface_constants";
import LanguageAbstraction from "./language_abstraction";

class GermanLanguage extends LanguageAbstraction {
  public THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
    GERMAN_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL;

  public NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
    GERMAN_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE;
}

export default GermanLanguage;
