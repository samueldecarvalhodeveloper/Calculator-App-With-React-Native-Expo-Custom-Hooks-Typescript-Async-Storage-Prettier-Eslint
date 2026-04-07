import { describe, test, expect } from "@jest/globals";
import { ReactTestInstance } from "react-test-renderer";
import React from "react";
import ReactRenderAdapter from "../../concerns/react_render_adapter";
import Keyboard from "../../../user_interface/components/keyboard/keyboard";
import Button from "../../../user_interface/components/button/button";
import {
  GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE,
  GREATER_CALCULATOR_KEYBOARD_PADDING_BOTTOM,
} from "../../../assets/dimensions";
import UserInterfaceCalculatorCharacters from "../../../user_interface/internals/enums/user_interface_calculator_characters";
import SecondaryColors from "../../../assets/colors/secondary_colors";
import NeutralColors from "../../../assets/colors/neutral_colors";
import RippleEffectColors from "../../../assets/colors/ripple_effect_colors";
import {
  ENGLISH_CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
  ENGLISH_CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL,
} from "../../../constants/user_interface_constants";

describe('Test Component: "Keyboard"; Behavior', () => {
  test("Test If Elements Is Rendered", () => {
    const { getByText } = ReactRenderAdapter.render(
      <Keyboard
        accessibilityLabel={
          ENGLISH_CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL
        }
        paddingBottom={GREATER_CALCULATOR_KEYBOARD_PADDING_BOTTOM}>
        <Button
          accessibilityLabel={ENGLISH_CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
            UserInterfaceCalculatorCharacters.FIVE,
          )}
          characterFontSize={GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE}
          character={UserInterfaceCalculatorCharacters.FIVE}
          backgroundColor={SecondaryColors.SECONDARY_500}
          borderColor={SecondaryColors.SECONDARY_700}
          characterColor={NeutralColors.NEUTRAL_900}
          rippleColor={RippleEffectColors.LIGHT_THEME}
          onPress={() => {}}
        />
      </Keyboard>,
    );

    const keyboardButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.FIVE,
    );

    expect(keyboardButtonElement).toBeTruthy();
  });
});
