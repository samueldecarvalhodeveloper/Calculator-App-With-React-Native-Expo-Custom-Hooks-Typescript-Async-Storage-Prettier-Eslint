import { beforeAll, describe, expect, jest, test } from "@jest/globals";
import { fireEvent, waitFor } from "@testing-library/react-native";
import type { ReactTestInstance } from "react-test-renderer";
import React from "react";
import HomeScreen from "../../../user_interface/screens/home/home_screen";
import UserInterfaceCalculatorCharacters from "../../../user_interface/internals/enums/user_interface_calculator_characters";
import ReactRenderAdapter from "../../concerns/react_render_adapter";
import PrimaryColors from "../../../assets/colors/primary_colors";
import { GERMAN_LANGUAGE } from "../../../constants/application_constants";
import DeviceLanguageRetriever from "../../../user_interface/internals/concerns/device_language_retriever";
import {
  ACTION_BAR_ELEMENT_TEST_ID,
  ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID,
  KEY_VALUE_STORE_ACTION_TIMEOUT,
  VIEWFINDER_VALUE_ELEMENT_TEST_ID,
} from "../../../constants/user_interface_constants";

describe('Test Screen: "Home"; Behavior', () => {
  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  test("Test If All Numerical Buttons Are Working", () => {
    const { getByText } = ReactRenderAdapter.render(<HomeScreen />);

    const calculationExpressionWithAllAvailableNumbers: string =
      UserInterfaceCalculatorCharacters.ZERO +
      UserInterfaceCalculatorCharacters.ONE +
      UserInterfaceCalculatorCharacters.TWO +
      UserInterfaceCalculatorCharacters.THREE +
      UserInterfaceCalculatorCharacters.FOUR +
      UserInterfaceCalculatorCharacters.FIVE +
      UserInterfaceCalculatorCharacters.SIX +
      UserInterfaceCalculatorCharacters.SEVEN +
      UserInterfaceCalculatorCharacters.EIGHT +
      UserInterfaceCalculatorCharacters.NINE;

    const keyboardZeroButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.ZERO,
    );
    const keyboardOneButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.ONE,
    );
    const keyboardTwoButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.TWO,
    );
    const keyboardThreeButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.THREE,
    );
    const keyboardFourButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.FOUR,
    );
    const keyboardFiveButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.FIVE,
    );
    const keyboardSixButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.SIX,
    );
    const keyboardSevenButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.SEVEN,
    );
    const keyboardEightButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.EIGHT,
    );
    const keyboardNineButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.NINE,
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
      UserInterfaceCalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });

  test("Test If All Operators Buttons Are Adding Symbols On Viewfinder Value Element", () => {
    const { getByText } = ReactRenderAdapter.render(<HomeScreen />);

    const calculationExpressionWithAllAvailableOperators: string =
      UserInterfaceCalculatorCharacters.DIVISION +
      UserInterfaceCalculatorCharacters.MULTIPLICATION +
      UserInterfaceCalculatorCharacters.SUBTRACTION +
      UserInterfaceCalculatorCharacters.ADDITION;

    const keyboardDivisionButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.DIVISION,
    );
    const keyboardMultiplicationButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.MULTIPLICATION,
    );
    const keyboardSubtractionButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.SUBTRACTION,
    );
    const keyboardAdditionButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.ADDITION,
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
      UserInterfaceCalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });

  test("Test If All Symbols Buttons Are Adding Symbols On Viewfinder Value Element", () => {
    const { getByText, getByTestId } = ReactRenderAdapter.render(
      <HomeScreen />,
    );

    const calculationExpressionWithAllAvailableSymbols: string =
      UserInterfaceCalculatorCharacters.POINT;

    const keyboardPointButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.POINT,
    );

    fireEvent.press(keyboardPointButtonElement);

    const viewFinderValueElement: ReactTestInstance = getByTestId(
      VIEWFINDER_VALUE_ELEMENT_TEST_ID,
    );

    expect(viewFinderValueElement.children.at(0)).toEqual(
      calculationExpressionWithAllAvailableSymbols,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });

  test("Test If Button Clean Is Cleaning Viewfinder Value", () => {
    const { getByText, getByTestId } = ReactRenderAdapter.render(
      <HomeScreen />,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.CLEAN,
    );
    const keyboardOneButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.ONE,
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
      UserInterfaceCalculatorCharacters.BACKSPACE,
    );
    const keyboardOneButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.ONE,
    );

    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardBackspaceButtonElement);

    const viewFinderValueElement: ReactTestInstance = getByTestId(
      VIEWFINDER_VALUE_ELEMENT_TEST_ID,
    );

    expect(viewFinderValueElement.children.at(0)).toEqual(
      UserInterfaceCalculatorCharacters.ONE,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      UserInterfaceCalculatorCharacters.CLEAN,
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
