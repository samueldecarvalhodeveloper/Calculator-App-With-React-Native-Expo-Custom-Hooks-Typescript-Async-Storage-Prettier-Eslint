import { describe, test, expect } from "@jest/globals";
import { ReactTestInstance } from "react-test-renderer";
import { fireEvent } from "@testing-library/react-native";
import ReactRenderAdapter from "../../../concerns/react_render_adapter";
import {
  ACTION_BAR_ELEMENT_TEST_ID,
  ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID,
  ENGLISH_ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL,
  ENGLISH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
  SUN_ICON_NAME,
} from "../../../../constants/screens/home_screen_constants";
import PrimaryColors from "../../../../assets/colors/primary_colors";
import ActionBar from "../../../../components/action_bar/action_bar";
import NeutralColors from "../../../../assets/colors/neutral_colors";
import RippleEffectColors from "../../../../assets/colors/ripple_effect_colors";
import Themes from "../../../../assets/themes";

describe('Test Component: "ActionBar"; Behavior', () => {
  test("Test If Elements Dispatches The On Press Event Function Correctly", () => {
    let currentTheme: Themes = Themes.LIGHT;

    const { getByTestId } = ReactRenderAdapter.render(
      <ActionBar
        elementAccessibilityLabel={
          ENGLISH_ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL
        }
        toggleThemeButtonAccessibilityLabel={
          ENGLISH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL
        }
        toggleThemeButtonTestID={ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID}
        testID={ACTION_BAR_ELEMENT_TEST_ID}
        icon={SUN_ICON_NAME}
        iconColor={NeutralColors.NEUTRAL_900}
        onPress={() => {
          currentTheme = Themes.DARK;
        }}
        backgroundColor={PrimaryColors.PRIMARY_100}
        rippleEffectColor={RippleEffectColors.LIGHT_THEME}
      />,
    );

    const toggleButtonElement: ReactTestInstance = getByTestId(
      ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID,
    );

    fireEvent.press(toggleButtonElement);

    expect(currentTheme).toEqual(Themes.DARK);
  });
});
