import { describe, beforeAll, expect, test, jest } from "@jest/globals";
import Themes from "../../../../assets/themes";
import {
  DARK_DEVICE_THEME,
  DEVICE_ANDROID_OPERATING_SYSTEM,
  EXTRA_SMALL_WINDOW_HEIGHT,
  GERMAN_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
  GREATER_WINDOW_HEIGHT,
  LIGHT_DEVICE_THEME,
} from "../../../../constants/user_interface_constants";

import {
  DEVICE_IOS_OPERATING_SYSTEM,
  GERMAN_LANGUAGE,
} from "../../../../constants/application_constants";
import UserInterfaceCalculatorCharacters from "../../../../user_interface/internals/enums/user_interface_calculator_characters";
import DeviceLanguageRetriever from "../../../../user_interface/internals/concerns/device_language_retriever";
import {
  isCalculateExpressionNotValidExpressionMessage,
  isCalculateExpressionNotValidExpressionMessageInAnyAppAvailableLanguage,
  isCurrentDeviceThemeDark,
  isCurrentThemeDark,
  isCurrentWindowHeightSmallerOrEqualThanExtraSmall,
  isDeviceOperationSystemIos,
  isStoredThemeDark,
} from "../../../../user_interface/internals/checkers/user_interface_checker";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../constants/domains/calculator_constants";

describe('Test Module: "User Interface Checker"; Behavior', () => {
  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  test('Test If Function: "isCurrentDeviceThemeDark"; Returns True If Current Device Theme Is Dark', () => {
    expect(isCurrentDeviceThemeDark(DARK_DEVICE_THEME)).toBeTruthy();
    expect(isCurrentDeviceThemeDark(LIGHT_DEVICE_THEME)).toBeFalsy();
  });

  test('Test If Function: "isCurrentThemeDark"; Returns True If Current Theme Is Dark', () => {
    expect(isCurrentThemeDark(Themes.DARK)).toBeTruthy();
    expect(isCurrentThemeDark(Themes.LIGHT)).toBeFalsy();
  });

  test('Test If Function: "isStoredThemeDark"; Returns True If Store Theme Is Dark', () => {
    expect(isStoredThemeDark(DARK_DEVICE_THEME)).toBeTruthy();
    expect(isStoredThemeDark(LIGHT_DEVICE_THEME)).toBeFalsy();
  });

  test('Test If Function: "isCurrentWindowHeightSmallerOrEqualThanExtraSmall"; Returns True If Current Window Height Smaller Or Equal Than Extra Small Window Size', () => {
    expect(
      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
        EXTRA_SMALL_WINDOW_HEIGHT,
      ),
    ).toBeTruthy();
    expect(
      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(GREATER_WINDOW_HEIGHT),
    ).toBeFalsy();
  });

  test('Test If Function: "isDeviceOperationSystemIos"; Returns True If The Device Operating System Is Equals To Ios', () => {
    expect(
      isDeviceOperationSystemIos(DEVICE_IOS_OPERATING_SYSTEM),
    ).toBeTruthy();
    expect(
      isDeviceOperationSystemIos(DEVICE_ANDROID_OPERATING_SYSTEM),
    ).toBeFalsy();
  });

  test('Test If Function: "isCalculateExpressionNotValidExpressionMessageInAnyAppAvailableLanguage"; Returns True If Stored Calculation Expression Is Equals To Not Valid Expression Error Message on Device Language', () => {
    const validExpression: string =
      UserInterfaceCalculatorCharacters.ONE +
      UserInterfaceCalculatorCharacters.ADDITION +
      UserInterfaceCalculatorCharacters.ONE;

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

  test('Test If Function: "isCalculateExpressionNotValidExpressionMessage"; Returns True If Stored Calculation Expression Is Equals To Not Valid Expression Error Message', () => {
    const validExpression: string =
      UserInterfaceCalculatorCharacters.ONE +
      UserInterfaceCalculatorCharacters.ADDITION +
      UserInterfaceCalculatorCharacters.ONE;

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
