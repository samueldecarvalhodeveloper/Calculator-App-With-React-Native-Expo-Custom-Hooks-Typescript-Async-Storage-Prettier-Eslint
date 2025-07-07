import { describe, beforeAll, test, expect } from "@jest/globals";
import { fireEvent, waitFor } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";
import PrimaryColors from "../../assets/colors/primary_colors";
import {
  ACTION_BAR_ELEMENT_TEST_ID,
  ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID,
  VIEWFINDER_VALUE_ELEMENT_TEST_ID,
} from "../../constants/screens/home_screen_constants";
import ReactRenderAdapter from "../concerns/react_render_adapter";
import HomeScreen from "../../screens/home/home_screen";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";
import DeviceLanguageRetriever from "../../infrastructure/anticorruption_layer/device_language_retriever";
import { GERMAN_LANGUAGE } from "../../constants/device_utilities_constants";
import { KEY_VALUE_STORE_ACTION_TIMEOUT } from "../constants/ui_constants";

describe('Test Component: "User Interface"; Behavior', () => {
  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  test("Test If Component Handles Routers Setup Configuration and Home Screen Set Scenario Correctly", () => {
    const { getByText } = ReactRenderAdapter.render(<HomeScreen />);

    const keyboardButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.FIVE,
    );

    expect(keyboardButtonElement).toBeTruthy();
  });

  test("Test If Component Handles Theme Toggle Scenario Correctly", () => {
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

  test("Test If Component Handles Calculation On Home Screen Calculator Scenario Correctly", () => {
    const { getByText, getByTestId } = ReactRenderAdapter.render(
      <HomeScreen />,
    );

    const keyboardOneButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.ONE,
    );
    const keyboardAdditionButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.ADDITION,
    );
    const keyboardEvaluateButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.EVALUATE,
    );

    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardAdditionButtonElement);
    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardEvaluateButtonElement);

    const viewFinderValueElement: ReactTestInstance = getByTestId(
      VIEWFINDER_VALUE_ELEMENT_TEST_ID,
    );

    expect(viewFinderValueElement.children.at(0)).toEqual(
      UiCalculatorCharacters.TWO,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);
  });
});
