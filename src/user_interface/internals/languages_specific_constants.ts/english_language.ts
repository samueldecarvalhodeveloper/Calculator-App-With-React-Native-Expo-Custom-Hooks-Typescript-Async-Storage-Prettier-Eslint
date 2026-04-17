import {
  ENGLISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
  ENGLISH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
} from "../../../constants/user_interface_constants";
import LanguageAbstraction from "./language_abstraction";

class EnglishLanguage extends LanguageAbstraction {
  public THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
    ENGLISH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL;

  public NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
    ENGLISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE;
}

export default EnglishLanguage;
