import { describe, test, expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";
import ReactRenderAdapter from "../../../concerns/react_render_adapter";
import Button from "../../../../components/button/button";
import { GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE } from "../../../../assets/dimensions";
import UiCalculatorCharacters from "../../../../calculator_characters/ui_calculator_characters";
import SecondaryColors from "../../../../assets/colors/secondary_colors";
import NeutralColors from "../../../../assets/colors/neutral_colors";
import RippleEffectColors from "../../../../assets/colors/ripple_effect_colors";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Component: "ActionBar"; Behavior', () => {
  test("Test If Elements Dispatches The On Press Event Function Correctly", () => {
    let calculationResultExpression: string = EMPTY_STRING;

    const { getByText } = ReactRenderAdapter.render(
      <Button
        characterFontSize={GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE}
        character={UiCalculatorCharacters.FIVE}
        backgroundColor={SecondaryColors.SECONDARY_500}
        borderColor={SecondaryColors.SECONDARY_700}
        characterColor={NeutralColors.NEUTRAL_900}
        rippleColor={RippleEffectColors.LIGHT_THEME}
        onPress={() => {
          calculationResultExpression = UiCalculatorCharacters.FIVE;
        }}
      />,
    );

    const buttonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.FIVE,
    );

    fireEvent.press(buttonElement);

    expect(calculationResultExpression).toEqual(UiCalculatorCharacters.FIVE);
  });
});
