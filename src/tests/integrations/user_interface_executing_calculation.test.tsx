import { describe, beforeAll, test, expect } from "@jest/globals";
import { ReactTestInstance } from "react-test-renderer";
import { fireEvent } from "@testing-library/react-native";
import HomeScreen from "../../screens/home/home_screen";
import ReactRenderAdapter from "../concerns/react_render_adapter";
import { VIEWFINDER_VALUE_ELEMENT_TEST_ID } from "../../constants/screens/home_screen_constants";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";
import DeviceLanguageRetriever from "../../infrastructure/anticorruption_layer/device_language_retriever";
import { GERMAN_LANGUAGE } from "../../constants/device_utilities_constants";

describe('Test Integration Of: "Ui Executing Calculation"; Behavior', () => {
  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  test("Test If I Make A Calculation On Ui Correctly", () => {
    const { getByText, getByTestId } = ReactRenderAdapter.render(
      <HomeScreen />,
    );

    const viewFinderValueElement: ReactTestInstance = getByTestId(
      VIEWFINDER_VALUE_ELEMENT_TEST_ID,
    );

    expect(viewFinderValueElement.children.at(0)).toBeFalsy();

    const keyboardOneButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.ONE,
    );
    const keyboardAdditionButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.ADDITION,
    );
    const keyboardEvaluationButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.EVALUATE,
    );

    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardAdditionButtonElement);
    fireEvent.press(keyboardOneButtonElement);
    fireEvent.press(keyboardEvaluationButtonElement);

    expect(viewFinderValueElement.children.at(0)).toEqual(
      UiCalculatorCharacters.TWO,
    );

    const keyboardCleanButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.press(keyboardCleanButtonElement);

    expect(viewFinderValueElement.children.at(0)).toBeFalsy();
  });
});
