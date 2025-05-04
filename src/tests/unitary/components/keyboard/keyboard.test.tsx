import { describe, test, expect } from "@jest/globals";
import { ReactTestInstance } from "react-test-renderer";
import ReactRenderAdapter from "../../../concerns/react_render_adapter";
import Keyboard from "../../../../components/keyboard/keyboard";
import Button from "../../../../components/button/button";
import {
  GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE,
  GREATER_CALCULATOR_KEYBOARD_PADDING_BOTTOM,
} from "../../../../assets/dimensions";
import UiCalculatorCharacters from "../../../../calculator_characters/ui_calculator_characters";
import SecondaryColors from "../../../../assets/colors/secondary_colors";
import NeutralColors from "../../../../assets/colors/neutral_colors";
import RippleEffectColors from "../../../../assets/colors/ripple_effect_colors";
import {
  ENGLISH_CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
  ENGLISH_CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL,
} from "../../../../constants/screens/home_screen_constants";

describe('Test Component: "Keyboard"; Behavior', () => {
  test("Test If Elements Is Rendered Correctly", () => {
    const { getByText } = ReactRenderAdapter.render(
      <Keyboard
        accessibilityLabel={
          ENGLISH_CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL
        }
        paddingBottom={GREATER_CALCULATOR_KEYBOARD_PADDING_BOTTOM}>
        <Button
          accessibilityLabel={ENGLISH_CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
            UiCalculatorCharacters.FIVE,
          )}
          characterFontSize={GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE}
          character={UiCalculatorCharacters.FIVE}
          backgroundColor={SecondaryColors.SECONDARY_500}
          borderColor={SecondaryColors.SECONDARY_700}
          characterColor={NeutralColors.NEUTRAL_900}
          rippleColor={RippleEffectColors.LIGHT_THEME}
          onPress={() => {}}
        />
      </Keyboard>,
    );

    const keyboardButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.FIVE,
    );

    expect(keyboardButtonElement).toBeTruthy();
  });
});
