import Themes from "../../../assets/themes";
import { DEVICE_IOS_OPERATING_SYSTEM } from "../../../constants/application_constants";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../constants/domains/calculator_constants";
import {
  DARK_DEVICE_THEME,
  ENGLISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
  EXTRA_SMALL_WINDOW_HEIGHT,
  FRENCH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
  GERMAN_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
  PORTUGUESE_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
  SPANISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE,
} from "../../../constants/user_interface_constants";

function isCurrentThemeDark(currentTheme: Themes): boolean {
  return currentTheme === Themes.DARK;
}

function isCurrentDeviceThemeDark(currentDeviceTheme: string): boolean {
  return currentDeviceTheme === DARK_DEVICE_THEME;
}

function isStoredThemeDark(theme: string): boolean {
  return theme === Themes.DARK;
}

function isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
  currentWindowSize: number,
): boolean {
  return currentWindowSize <= EXTRA_SMALL_WINDOW_HEIGHT;
}

function isDeviceOperationSystemIos(deviceOperationSystem: string): boolean {
  return deviceOperationSystem === DEVICE_IOS_OPERATING_SYSTEM;
}

function isCalculateExpressionNotValidExpressionMessage(
  storedCalculationExpression: string,
): boolean {
  return storedCalculationExpression === NOT_VALID_EXPRESSION_ERROR_MESSAGE;
}

function isCalculateExpressionNotValidExpressionMessageInAnyAppAvailableLanguage(
  storedCalculationExpression: string,
): boolean {
  return (
    storedCalculationExpression ===
      ENGLISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE ||
    storedCalculationExpression ===
      PORTUGUESE_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE ||
    storedCalculationExpression ===
      FRENCH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE ||
    storedCalculationExpression ===
      SPANISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE ||
    storedCalculationExpression ===
      GERMAN_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE
  );
}

export {
  isCurrentThemeDark,
  isCurrentDeviceThemeDark,
  isStoredThemeDark,
  isCurrentWindowHeightSmallerOrEqualThanExtraSmall,
  isDeviceOperationSystemIos,
  isCalculateExpressionNotValidExpressionMessage,
  isCalculateExpressionNotValidExpressionMessageInAnyAppAvailableLanguage,
};
