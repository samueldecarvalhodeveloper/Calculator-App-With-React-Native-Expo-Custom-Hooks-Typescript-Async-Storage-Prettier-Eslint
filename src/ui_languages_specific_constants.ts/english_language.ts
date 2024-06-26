import {
  ENGLISH_ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL,
  ENGLISH_CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
  ENGLISH_CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL,
  ENGLISH_CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL,
  ENGLISH_HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL,
  ENGLISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
  ENGLISH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
} from "../constants/screens/home_screen_constants";
import LanguageAbstraction from "./language_abstraction";

class EnglishLanguage extends LanguageAbstraction {
  public ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL: string =
    ENGLISH_ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL;

  public CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL: string =
    ENGLISH_CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL;

  public HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL: string =
    ENGLISH_HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL;

  public CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
    character: string,
  ): string {
    return ENGLISH_CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
      character,
    );
  }

  public THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
    ENGLISH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL;

  public CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL(
    value: string,
  ): string {
    return ENGLISH_CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL(value);
  }

  public NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
    ENGLISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE;
}

export default EnglishLanguage;
