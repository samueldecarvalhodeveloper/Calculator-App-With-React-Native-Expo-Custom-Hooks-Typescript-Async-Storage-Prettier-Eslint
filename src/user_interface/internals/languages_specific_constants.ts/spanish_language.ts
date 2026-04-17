import {
  SPANISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
  SPANISH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
} from "../../../constants/user_interface_constants";
import LanguageAbstraction from "./language_abstraction";

class SpanishLanguage extends LanguageAbstraction {
  public THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
    SPANISH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL;

  public NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
    SPANISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE;
}

export default SpanishLanguage;
