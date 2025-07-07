import { describe, test, expect } from "@jest/globals";
import { ReactTestInstance } from "react-test-renderer";
import { render } from "@testing-library/react-native";
import App from "../../../App";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";
import DeviceLanguageRetriever from "../../infrastructure/anticorruption_layer/device_language_retriever";
import { GERMAN_LANGUAGE } from "../../constants/device_utilities_constants";

describe("Test App Behavior", () => {
  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  test("Test If Routers Is Set Correctly", () => {
    const { getByText } = render(<App />);

    const keyboardButtonElement: ReactTestInstance = getByText(
      UiCalculatorCharacters.FIVE,
    );

    expect(keyboardButtonElement).toBeTruthy();
  });
});
