import { describe, expect, test } from "@jest/globals";
import { fireEvent, waitFor } from "@testing-library/react-native";
import type { ReactTestInstance } from "react-test-renderer";
import HomeScreen from "../../../screens/home/home_screen";
import UiCalculatorCharacters from "../../../calculator_characters/ui_calculator_characters";
import ReactRenderAdapter from "../../concerns/react_render_adapter";
import {
  ACTION_BAR_ELEMENT_TEST_ID,
  ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID,
  VIEWFINDER_VALUE_ELEMENT_TEST_ID,
} from "../../../constants/screens/home_screen_constants";
import PrimaryColors from "../../../assets/colors/primary_colors";
import DeviceLanguageRetriever from "../../../infrastructure/anticorruption_layer/device_language_retriever";
import { GERMAN_LANGUAGE } from "../../../constants/device_utilities_constants";
import { KEY_VALUE_STORE_ACTION_TIMEOUT } from "../../constants/ui_constants";

describe('Test Screen: "Home"; Behavior', () => {
  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  test("Test If All Numerical Buttons Are Working Correctly", () => {
    const { getByText } = ReactRenderAdapter.render(<HomeScreen />);

    const calculationExpressionWithAllAvailableNumbers: string =
      UiCalculatorCharacters.ZERO +
      UiCalculatorCharacters.ONE +
      UiCalculatorCharacters.TWO +
      UiCalculatorCharacters.THREE +
      UiCalculatorCharacters.FOUR +
      UiCalculatorCharacters.FIVE +
      UiCalculatorCharacters.SIX +
      UiCalculatorCharacters.SEVEN +
      UiCalculatorCharacters.EIGHT +
      UiCalculatorCharacters.NINE;

    const keyboardZeroButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.ZERO,
    );
    const keyboardOneButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.ONE,
    );
    const keyboardTwoButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.TWO,
    );
    const keyboardThreeButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.THREE,
    );
    const keyboardFourButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.FOUR,
    );
    const keyboardFiveButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.FIVE,
    );
    const keyboardSixButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.SIX,
    );
    const keyboardSevenButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.SEVEN,
    );
    const keyboardEightButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.EIGHT,
    );
    const keyboardNineButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.NINE,
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
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });

  test("Test If All Operators Buttons Are Adding Symbols On Viewfinder Value Element Correctly", () => {
    const { getByText } = ReactRenderAdapter.render(<HomeScreen />);

    const calculationExpressionWithAllAvailableOperators: string =
      UiCalculatorCharacters.DIVISION +
      UiCalculatorCharacters.MULTIPLICATION +
      UiCalculatorCharacters.SUBTRACTION +
      UiCalculatorCharacters.ADDITION;

    const keyboardDivisionButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.DIVISION,
    );
    const keyboardMultiplicationButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.MULTIPLICATION,
    );
    const keyboardSubtractionButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.SUBTRACTION,
    );
    const keyboardAdditionButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.ADDITION,
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
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });

  test("Test If All Symbols Buttons Are Adding Symbols On Viewfinder Value Element Correctly", () => {
    const { getByText, getByTestId } = ReactRenderAdapter.render(
      <HomeScreen />,
    );

    const calculationExpressionWithAllAvailableSymbols: string =
      UiCalculatorCharacters.POINT;

    const keyboardPointButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.POINT,
    );

    fireEvent.press(keyboardPointButtonElement);

    const viewFinderValueElement: ReactTestInstance = getByTestId(
      VIEWFINDER_VALUE_ELEMENT_TEST_ID,
    );

    expect(viewFinderValueElement.children.at(0)).toEqual(
      calculationExpressionWithAllAvailableSymbols,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });

  test("Test If Button Clean Is Cleaning Viewfinder Value Correctly", () => {
    const { getByText, getByTestId } = ReactRenderAdapter.render(
      <HomeScreen />,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.CLEAN,
    );
    const keyboardOneButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.ONE,
    );

    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardCleanButtonElement);

    const viewFinderValueElement: ReactTestInstance = getByTestId(
      VIEWFINDER_VALUE_ELEMENT_TEST_ID,
    );

    expect(viewFinderValueElement.children.at(0)).toBeFalsy();
  });

  test("Test If Button Backspace Is Removing Last Viewfinder Value Character Correctly", () => {
    const { getByText, getByTestId } = ReactRenderAdapter.render(
      <HomeScreen />,
    );

    const keyboardBackspaceButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.BACKSPACE,
    );
    const keyboardOneButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.ONE,
    );

    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardBackspaceButtonElement);

    const viewFinderValueElement: ReactTestInstance = getByTestId(
      VIEWFINDER_VALUE_ELEMENT_TEST_ID,
    );

    expect(viewFinderValueElement.children.at(0)).toEqual(
      UiCalculatorCharacters.ONE,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });

  test("Test If Action Bar Theme Toggle Button Is Toggling The App Theme Correctly", () => {
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
