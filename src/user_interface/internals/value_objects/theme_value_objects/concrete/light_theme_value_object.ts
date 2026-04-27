import { StatusBarStyle } from "react-native";
import ThemeValueObject from "../generic/theme_value_object";
import PrimaryColors from "../../../../../assets/colors/primary_colors";
import NeutralColors from "../../../../../assets/colors/neutral_colors";
import RippleEffectColors from "../../../../../assets/colors/ripple_effect_colors";
import SecondaryColors from "../../../../../assets/colors/secondary_colors";

class LightThemeValueObject implements ThemeValueObject {
  public applicationBackgroundColor: string = PrimaryColors.PRIMARY_200;

  public statusbarBackgroundColor: string = PrimaryColors.PRIMARY_100;

  public statusbarContentColor: StatusBarStyle = "dark-content";

  public actionBarBackgroundColor: string = PrimaryColors.PRIMARY_100;

  public actionBarIconColor: string = NeutralColors.NEUTRAL_900;

  public viewfinderBackgroundColor: string = PrimaryColors.PRIMARY_100;

  public viewfinderBorderColor: string = PrimaryColors.PRIMARY_500;

  public viewfinderValueColor: string = NeutralColors.NEUTRAL_900;

  public rippleEffectColor: string = RippleEffectColors.LIGHT_THEME;

  public calculatorActionButtonCharacterColor: string =
    NeutralColors.NEUTRAL_900;

  public calculatorActionButtonBackgroundColor: string =
    SecondaryColors.SECONDARY_500;

  public calculatorActionButtonBorderColor: string =
    SecondaryColors.SECONDARY_900;

  public calculatorNumericalButtonCharacterColor: string =
    NeutralColors.NEUTRAL_900;

  public calculatorNumericalButtonBackgroundColor: string =
    PrimaryColors.PRIMARY_400;

  public calculatorNumericalButtonBorderColor: string =
    PrimaryColors.PRIMARY_500;

  public calculatorOperatorButtonCharacterColor: string =
    NeutralColors.NEUTRAL_100;

  public calculatorOperatorButtonBackgroundColor: string =
    PrimaryColors.PRIMARY_900;

  public calculatorOperatorButtonBorderColor: string =
    NeutralColors.NEUTRAL_900;
}

export default LightThemeValueObject;
