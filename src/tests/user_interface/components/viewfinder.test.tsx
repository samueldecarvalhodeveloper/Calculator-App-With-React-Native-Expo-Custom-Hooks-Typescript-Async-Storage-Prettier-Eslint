import { describe, test, expect } from "@jest/globals";
import { ReactTestInstance } from "react-test-renderer";
import React from "react";
import Viewfinder from "../../../user_interface/components/viewfinder/viewfinder";
import ReactRenderAdapter from "../../concerns/react_render_adapter";
import PrimaryColors from "../../../assets/colors/primary_colors";
import NeutralColors from "../../../assets/colors/neutral_colors";
import {
  GREATER_CALCULATOR_VIEWFINDER_CHARACTER_FONT_SIZE,
  GREATER_CALCULATOR_VIEWFINDER_MARGIN_BOTTOM,
  GREATER_CALCULATOR_VIEWFINDER_PADDING_BOTTOM,
} from "../../../assets/dimensions";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import {
  ENGLISH_CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL,
  VIEWFINDER_VALUE_ELEMENT_TEST_ID,
} from "../../../constants/user_interface_constants";

describe('Test Component: "Viewfinder"; Behavior', () => {
  test("Test If Elements Is Rendered", () => {
    const calculationExpression: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    const { getByText } = ReactRenderAdapter.render(
      <Viewfinder
        accessibilityLabel={ENGLISH_CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL(
          calculationExpression,
        )}
        valueTestId={VIEWFINDER_VALUE_ELEMENT_TEST_ID}
        backgroundColor={PrimaryColors.PRIMARY_100}
        borderColor={PrimaryColors.PRIMARY_500}
        valueColor={NeutralColors.NEUTRAL_900}
        marginBottom={GREATER_CALCULATOR_VIEWFINDER_MARGIN_BOTTOM}
        value={calculationExpression}
        valueFontSize={GREATER_CALCULATOR_VIEWFINDER_CHARACTER_FONT_SIZE}
        paddingBottom={GREATER_CALCULATOR_VIEWFINDER_PADDING_BOTTOM}
      />,
    );

    const viewfinderValueElement: ReactTestInstance = getByText(
      calculationExpression,
    );

    expect(viewfinderValueElement.children.at(0)).toEqual(
      calculationExpression,
    );
  });
});
