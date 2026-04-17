import { describe, expect, test } from "@jest/globals";
import Themes from "../../../../assets/themes";
import {
  DARK_DEVICE_THEME,
  EXTRA_SMALL_WINDOW_HEIGHT,
  GREATER_WINDOW_HEIGHT,
  LIGHT_DEVICE_THEME,
} from "../../../../constants/user_interface_constants";

import {
  isCurrentDeviceThemeDark,
  isCurrentWindowHeightSmallerOrEqualThanExtraSmall,
  isThemeDark,
} from "../../../../user_interface/internals/checkers/user_interface_checker";

describe('Test Module: "User Interface Checker"; Behavior', () => {
  test('Test If Function: "isCurrentDeviceThemeDark"; Returns True If Current Device Theme Is Dark', () => {
    expect(isCurrentDeviceThemeDark(DARK_DEVICE_THEME)).toBeTruthy();
    expect(isCurrentDeviceThemeDark(LIGHT_DEVICE_THEME)).toBeFalsy();
  });

  test('Test If Function: "isThemeDark"; Returns True If  Theme Is Dark', () => {
    expect(isThemeDark(Themes.DARK)).toBeTruthy();
    expect(isThemeDark(Themes.LIGHT)).toBeFalsy();
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
});
