import { StatusBarStyle } from "react-native";
import PrimaryColors from "../../../../../assets/colors/primary_colors";
import ThemeValueObject from "../generic/theme_value_object";
import NeutralColors from "../../../../../assets/colors/neutral_colors";
import RippleEffectColors from "../../../../../assets/colors/ripple_effect_colors";
import SecondaryColors from "../../../../../assets/colors/secondary_colors";

class DarkThemeValueObject implements ThemeValueObject {
  public applicationBackgroundColor: string = PrimaryColors.PRIMARY_900;

  public statusbarBackgroundColor: string = PrimaryColors.PRIMARY_700;

  public statusbarContentColor: StatusBarStyle = "light-content";

  public actionBarBackgroundColor: string = PrimaryColors.PRIMARY_700;

  public actionBarIconColor: string = NeutralColors.NEUTRAL_100;

  public viewfinderBackgroundColor: string = PrimaryColors.PRIMARY_700;

  public viewfinderBorderColor: string = PrimaryColors.PRIMARY_600;

  public viewfinderValueColor: string = NeutralColors.NEUTRAL_100;

  public rippleEffectColor: string = RippleEffectColors.DARK_THEME;

  public calculatorActionButtonCharacterColor: string =
    NeutralColors.NEUTRAL_900;

  public calculatorActionButtonBackgroundColor: string =
    SecondaryColors.SECONDARY_500;

  public calculatorActionButtonBorderColor: string =
    SecondaryColors.SECONDARY_400;

  public calculatorNumericalButtonCharacterColor: string =
    NeutralColors.NEUTRAL_100;

  public calculatorNumericalButtonBackgroundColor: string =
    PrimaryColors.PRIMARY_700;

  public calculatorNumericalButtonBorderColor: string =
    PrimaryColors.PRIMARY_600;

  public calculatorOperatorButtonCharacterColor: string =
    NeutralColors.NEUTRAL_900;

  public calculatorOperatorButtonBackgroundColor: string =
    PrimaryColors.PRIMARY_400;

  public calculatorOperatorButtonBorderColor: string =
    PrimaryColors.PRIMARY_300;
}

export default DarkThemeValueObject;
