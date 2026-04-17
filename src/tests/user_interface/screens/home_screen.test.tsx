import { describe, expect, test } from "@jest/globals";
import { fireEvent, waitFor } from "@testing-library/react-native";
import type { ReactTestInstance } from "react-test-renderer";
import React from "react";
import HomeScreen from "../../../user_interface/screens/home/home_screen";
import CalculatorCharacters from "../../../user_interface/internals/enums/calculator_characters";
import ReactRenderAdapter from "../../concerns/react_render_adapter";
import PrimaryColors from "../../../assets/colors/primary_colors";
import {
  ACTION_BAR_ELEMENT_TEST_ID,
  ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID,
  KEY_VALUE_STORE_ACTION_TIMEOUT,
  VIEWFINDER_VALUE_ELEMENT_TEST_ID,
} from "../../../constants/user_interface_constants";

describe('Test Screen: "Home"; Behavior', () => {
  test("Test If All Numerical Buttons Are Working", () => {
    const { getByText } = ReactRenderAdapter.render(<HomeScreen />);

    const calculationExpressionWithAllAvailableNumbers: string =
      CalculatorCharacters.ZERO +
      CalculatorCharacters.ONE +
      CalculatorCharacters.TWO +
      CalculatorCharacters.THREE +
      CalculatorCharacters.FOUR +
      CalculatorCharacters.FIVE +
      CalculatorCharacters.SIX +
      CalculatorCharacters.SEVEN +
      CalculatorCharacters.EIGHT +
      CalculatorCharacters.NINE;

    const keyboardZeroButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.ZERO,
    );
    const keyboardOneButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.ONE,
    );
    const keyboardTwoButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.TWO,
    );
    const keyboardThreeButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.THREE,
    );
    const keyboardFourButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.FOUR,
    );
    const keyboardFiveButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.FIVE,
    );
    const keyboardSixButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.SIX,
    );
    const keyboardSevenButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.SEVEN,
    );
    const keyboardEightButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.EIGHT,
    );
    const keyboardNineButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.NINE,
    );

    fireEvent.press(keyboardZeroButtonElement);
    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardTwoButtonElement);
    fireEvent.press(keyboardThreeButtonElement);
    fireEvent.press(keyboardFourButtonElement);
    fireEvent.press(keyboardFiveButtonElement);
    fireEvent.press(keyboardSixButtonElement);
    fireEvent.press(keyboardSevenButtonElement);
    fireEvent.press(keyboardEightButtonElement);
    fireEvent.press(keyboardNineButtonElement);

    const viewFinderValueElement: ReactTestInstance = getByText(
      calculationExpressionWithAllAvailableNumbers,
    );

    expect(viewFinderValueElement.children.at(0)).toEqual(
      calculationExpressionWithAllAvailableNumbers,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });

  test("Test If All Operators Buttons Are Adding Symbols On Viewfinder Value Element", () => {
    const { getByText } = ReactRenderAdapter.render(<HomeScreen />);

    const calculationExpressionWithAllAvailableOperators: string =
      CalculatorCharacters.DIVISION +
      CalculatorCharacters.MULTIPLICATION +
      CalculatorCharacters.SUBTRACTION +
      CalculatorCharacters.ADDITION;

    const keyboardDivisionButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.DIVISION,
    );
    const keyboardMultiplicationButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.MULTIPLICATION,
    );
    const keyboardSubtractionButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.SUBTRACTION,
    );
    const keyboardAdditionButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.ADDITION,
    );

    fireEvent.press(keyboardDivisionButtonElement);
    fireEvent.press(keyboardMultiplicationButtonElement);
    fireEvent.press(keyboardSubtractionButtonElement);
    fireEvent.press(keyboardAdditionButtonElement);

    const viewFinderValueElement: ReactTestInstance = getByText(
      calculationExpressionWithAllAvailableOperators,
    );

    expect(viewFinderValueElement.children.at(0)).toEqual(
      calculationExpressionWithAllAvailableOperators,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });

  test("Test If All Symbols Buttons Are Adding Symbols On Viewfinder Value Element", () => {
    const { getByText, getByTestId } = ReactRenderAdapter.render(
      <HomeScreen />,
    );

    const calculationExpressionWithAllAvailableSymbols: string =
      CalculatorCharacters.POINT;

    const keyboardPointButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.POINT,
    );

    fireEvent.press(keyboardPointButtonElement);

    const viewFinderValueElement: ReactTestInstance = getByTestId(
      VIEWFINDER_VALUE_ELEMENT_TEST_ID,
    );

    expect(viewFinderValueElement.children.at(0)).toEqual(
      calculationExpressionWithAllAvailableSymbols,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });

  test("Test If Button Clean Is Cleaning Viewfinder Value", () => {
    const { getByText, getByTestId } = ReactRenderAdapter.render(
      <HomeScreen />,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.CLEAN,
    );
    const keyboardOneButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.ONE,
    );

    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardCleanButtonElement);

    const viewFinderValueElement: ReactTestInstance = getByTestId(
      VIEWFINDER_VALUE_ELEMENT_TEST_ID,
    );

    expect(viewFinderValueElement.children.at(0)).toBeFalsy();
  });

  test("Test If Button Backspace Is Removing Last Viewfinder Value Character", () => {
    const { getByText, getByTestId } = ReactRenderAdapter.render(
      <HomeScreen />,
    );

    const keyboardBackspaceButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.BACKSPACE,
    );
    const keyboardOneButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.ONE,
    );

    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardBackspaceButtonElement);

    const viewFinderValueElement: ReactTestInstance = getByTestId(
      VIEWFINDER_VALUE_ELEMENT_TEST_ID,
    );

    expect(viewFinderValueElement.children.at(0)).toEqual(
      CalculatorCharacters.ONE,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      CalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });

  test("Test If Action Bar Theme Toggle Button Is Toggling The App Theme", () => {
    const { getByTestId } = ReactRenderAdapter.render(<HomeScreen />);

    const actionBarThemeToggleButtonElement: ReactTestInstance = getByTestId(
      ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID,
    );
    const actionBarElement: ReactTestInstance = getByTestId(
      ACTION_BAR_ELEMENT_TEST_ID,
    );

    expect(actionBarElement).toHaveStyle({
      backgroundColor: PrimaryColors.PRIMARY_100,
    });

    fireEvent.press(actionBarThemeToggleButtonElement);

    waitFor(
      () => {
        expect(actionBarElement).toHaveStyle({
          backgroundColor: PrimaryColors.PRIMARY_700,
        });
      },
      { timeout: KEY_VALUE_STORE_ACTION_TIMEOUT },
    );

    fireEvent.press(actionBarThemeToggleButtonElement);

    expect(actionBarElement).toHaveStyle({
      backgroundColor: PrimaryColors.PRIMARY_100,
    });
  });
});
