import { describe, beforeAll, test, expect } from "@jest/globals";
import { ReactTestInstance } from "react-test-renderer";
import { waitFor } from "@testing-library/react-native";
import HomeScreen from "../../screens/home/home_screen";
import ReactRenderAdapter from "../concerns/react_render_adapter";
import { VIEWFINDER_VALUE_ELEMENT_TEST_ID } from "../../constants/screens/home_screen_constants";
import LastSessionCalculationResultStore from "../../last_session_calculation_expression_store/last_session_calculation_expression_store";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";
import DeviceLanguageRetriever from "../../infrastructure/anticorruption_layer/device_language_retriever";
import { GERMAN_LANGUAGE } from "../../constants/device_utilities_constants";
import { KEY_VALUE_STORE_ACTION_TIMEOUT } from "../constants/ui_constants";

describe('Test Integration Of: "Ui Getting Stored Values"; Behavior', () => {
  const lastSessionCalculationExpression: string =
    CalculatorCharacters.ONE +
    CalculatorCharacters.ADDITION +
    CalculatorCharacters.ONE;

  beforeAll(async () => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );
    const spyOnGetExpressionMethod = jest.spyOn(
      LastSessionCalculationResultStore,
      "getExpression",
    );

    spyOnGetExpressionMethod.mockReturnValue(
      (async () => lastSessionCalculationExpression)(),
    );
    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  test("Test If I Can Store Calculation Expression Correctly", async () => {
    const { getByTestId } = ReactRenderAdapter.render(<HomeScreen />);

    const viewFinderValueElement: ReactTestInstance = getByTestId(
      VIEWFINDER_VALUE_ELEMENT_TEST_ID,
    );

    waitFor(
      () => {
        expect(viewFinderValueElement.children.at(0)).toEqual(
          lastSessionCalculationExpression,
        );
      },
      { timeout: KEY_VALUE_STORE_ACTION_TIMEOUT },
    );
  });
});
