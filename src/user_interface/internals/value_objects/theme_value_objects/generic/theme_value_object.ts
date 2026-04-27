import { StatusBarStyle } from "react-native";

abstract class ThemeValueObject {
  public abstract applicationBackgroundColor: string;

  public abstract statusbarBackgroundColor: string;

  public abstract statusbarContentColor: StatusBarStyle;

  public abstract actionBarBackgroundColor: string;

  public abstract actionBarIconColor: string;

  public abstract viewfinderBackgroundColor: string;

  public abstract viewfinderBorderColor: string;

  public abstract viewfinderValueColor: string;

  public abstract rippleEffectColor: string;

  public abstract calculatorActionButtonCharacterColor: string;

  public abstract calculatorActionButtonBackgroundColor: string;

  public abstract calculatorActionButtonBorderColor: string;

  public abstract calculatorNumericalButtonCharacterColor: string;

  public abstract calculatorNumericalButtonBackgroundColor: string;

  public abstract calculatorNumericalButtonBorderColor: string;

  public abstract calculatorOperatorButtonCharacterColor: string;

  public abstract calculatorOperatorButtonBackgroundColor: string;

  public abstract calculatorOperatorButtonBorderColor: string;
}

export default ThemeValueObject;
