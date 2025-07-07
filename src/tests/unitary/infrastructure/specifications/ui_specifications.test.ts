import { describe, beforeAll, expect, test } from "@jest/globals";
import {
  isCurrentDeviceThemeDark,
  isCurrentThemeDark,
  isCurrentWindowHeightSmallerOrEqualThanExtraSmall,
  isDeviceOperationSystemIos,
  isStoredThemeDark,
  isCalculateExpressionNotValidExpressionMessageInAnyAppAvailableLanguage,
  isCalculateExpressionNotValidExpressionMessage,
} from "../../../../infrastructure/specifications/ui_specifications";
import Themes from "../../../../assets/themes";
import {
  DARK_DEVICE_THEME,
  EXTRA_SMALL_WINDOW_HEIGHT,
} from "../../../../constants/ui_constants";
import {
  DEVICE_ANDROID_OPERATING_SYSTEM,
  GREATER_WINDOW_HEIGHT,
  LIGHT_DEVICE_THEME,
} from "../../../constants/ui_constants";
import {
  DEVICE_IOS_OPERATING_SYSTEM,
  GERMAN_LANGUAGE,
} from "../../../../constants/device_utilities_constants";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../constants/domains/calculator/calculation_expression_messages_constants";
import UiCalculatorCharacters from "../../../../calculator_characters/ui_calculator_characters";
import DeviceLanguageRetriever from "../../../../infrastructure/anticorruption_layer/device_language_retriever";
import { GERMAN_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../constants/screens/home_screen_constants";

describe('Test Module: "ui_specifications"; Behavior', () => {
  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  test('Test If Function: "isCurrentDeviceThemeDark"; Returns True If Current Device Theme Is Dark Correctly', () => {
    expect(isCurrentDeviceThemeDark(DARK_DEVICE_THEME)).toBeTruthy();
    expect(isCurrentDeviceThemeDark(LIGHT_DEVICE_THEME)).toBeFalsy();
  });

  test('Test If Function: "isCurrentThemeDark"; Returns True If Current Theme Is Dark Correctly', () => {
    expect(isCurrentThemeDark(Themes.DARK)).toBeTruthy();
    expect(isCurrentThemeDark(Themes.LIGHT)).toBeFalsy();
  });

  test('Test If Function: "isStoredThemeDark"; Returns True If Store Theme Is Dark Correctly', () => {
    expect(isStoredThemeDark(DARK_DEVICE_THEME)).toBeTruthy();
    expect(isStoredThemeDark(LIGHT_DEVICE_THEME)).toBeFalsy();
  });

  test('Test If Function: "isCurrentWindowHeightSmallerOrEqualThanExtraSmall"; Returns True If Current Window Height Smaller Or Equal Than Extra Small Window Size Correctly', () => {
    expect(
      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
        EXTRA_SMALL_WINDOW_HEIGHT,
      ),
    ).toBeTruthy();
    expect(
      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(GREATER_WINDOW_HEIGHT),
    ).toBeFalsy();
  });

  test('Test If Function: "isDeviceOperationSystemIos"; Returns True If The Device Operating System Is Equals To Ios Correctly', () => {
    expect(
      isDeviceOperationSystemIos(DEVICE_IOS_OPERATING_SYSTEM),
    ).toBeTruthy();
    expect(
      isDeviceOperationSystemIos(DEVICE_ANDROID_OPERATING_SYSTEM),
    ).toBeFalsy();
  });

  test('Test If Function: "isCalculateExpressionNotValidExpressionMessageInAnyAppAvailableLanguage"; Returns True If Stored Calculation Expression Is Equals To Not Valid Expression Error Message on Device Language Correctly', () => {
    const validExpression: string =
      UiCalculatorCharacters.ONE +
      UiCalculatorCharacters.ADDITION +
      UiCalculatorCharacters.ONE;

    expect(
      isCalculateExpressionNotValidExpressionMessageInAnyAppAvailableLanguage(
        GERMAN_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
      ),
    ).toBeTruthy();
    expect(
      isCalculateExpressionNotValidExpressionMessageInAnyAppAvailableLanguage(
        validExpression,
      ),
    ).toBeFalsy();
  });

  test('Test If Function: "isCalculateExpressionNotValidExpressionMessage"; Returns True If Stored Calculation Expression Is Equals To Not Valid Expression Error Message Correctly', () => {
    const validExpression: string =
      UiCalculatorCharacters.ONE +
      UiCalculatorCharacters.ADDITION +
      UiCalculatorCharacters.ONE;

    expect(
      isCalculateExpressionNotValidExpressionMessage(
        NOT_VALID_EXPRESSION_ERROR_MESSAGE,
      ),
    ).toBeTruthy();
    expect(
      isCalculateExpressionNotValidExpressionMessage(validExpression),
    ).toBeFalsy();
  });
});
