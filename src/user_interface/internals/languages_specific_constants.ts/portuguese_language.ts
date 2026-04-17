import {
  PORTUGUESE_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
  PORTUGUESE_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
} from "../../../constants/user_interface_constants";
import LanguageAbstraction from "./language_abstraction";

class PortugueseLanguage extends LanguageAbstraction {
  public THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
    PORTUGUESE_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL;

  public NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
    PORTUGUESE_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE;
}

export default PortugueseLanguage;
