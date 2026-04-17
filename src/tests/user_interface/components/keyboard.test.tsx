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
import CalculatorCharacters from "../../../user_interface/internals/enums/calculator_characters";
import SecondaryColors from "../../../assets/colors/secondary_colors";
import NeutralColors from "../../../assets/colors/neutral_colors";
import RippleEffectColors from "../../../assets/colors/ripple_effect_colors";

describe('Test Component: "Keyboard"; Behavior', () => {
  test("Test If Elements Is Rendered", () => {
    const { getByText } = ReactRenderAdapter.render(
      <Keyboard paddingBottom={GREATER_CALCULATOR_KEYBOARD_PADDING_BOTTOM}>
        <Button
          characterFontSize={GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE}
          character={CalculatorCharacters.FIVE}
          backgroundColor={SecondaryColors.SECONDARY_500}
          borderColor={SecondaryColors.SECONDARY_700}
          characterColor={NeutralColors.NEUTRAL_900}
          rippleColor={RippleEffectColors.LIGHT_THEME}
          onPress={() => {}}
        />
      </Keyboard>,
    );

    const keyboardButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.FIVE,
    );

    expect(keyboardButtonElement).toBeTruthy();
  });
});
