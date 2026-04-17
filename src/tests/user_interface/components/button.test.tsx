import { describe, test, expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";
import React from "react";
import ReactRenderAdapter from "../../concerns/react_render_adapter";
import Button from "../../../user_interface/components/button/button";
import { GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE } from "../../../assets/dimensions";
import CalculatorCharacters from "../../../user_interface/internals/enums/calculator_characters";
import SecondaryColors from "../../../assets/colors/secondary_colors";
import NeutralColors from "../../../assets/colors/neutral_colors";
import RippleEffectColors from "../../../assets/colors/ripple_effect_colors";

describe('Test Component: "ActionBar"; Behavior', () => {
  test("Test If Elements Dispatches The On Press Event Function", () => {
    let calculationExpression: string = "";

    const { getByText } = ReactRenderAdapter.render(
      <Button
        characterFontSize={GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE}
        character={CalculatorCharacters.FIVE}
        backgroundColor={SecondaryColors.SECONDARY_500}
        borderColor={SecondaryColors.SECONDARY_700}
        characterColor={NeutralColors.NEUTRAL_900}
        rippleColor={RippleEffectColors.LIGHT_THEME}
        onPress={() => {
          calculationExpression = CalculatorCharacters.FIVE;
        }}
      />,
    );

    const buttonElement: ReactTestInstance = getByText(
      CalculatorCharacters.FIVE,
    );

    fireEvent.press(buttonElement);

    expect(calculationExpression).toEqual(CalculatorCharacters.FIVE);
  });
});
