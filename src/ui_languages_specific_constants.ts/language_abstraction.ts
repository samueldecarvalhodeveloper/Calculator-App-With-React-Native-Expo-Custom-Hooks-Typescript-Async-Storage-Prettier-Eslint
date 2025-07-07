/* eslint-disable no-unused-vars */
abstract class LanguageAbstraction {
  public abstract readonly ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL: string;

  public abstract readonly CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL: string;

  public abstract readonly HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL: string;

  public abstract readonly NOT_VALID_EXPRESSION_ERROR_MESSAGE: string;

  public abstract CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL(
    value: string,
  ): string;

  public abstract readonly THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string;

  public abstract CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
    character: string,
  ): string;
}

export default LanguageAbstraction;
