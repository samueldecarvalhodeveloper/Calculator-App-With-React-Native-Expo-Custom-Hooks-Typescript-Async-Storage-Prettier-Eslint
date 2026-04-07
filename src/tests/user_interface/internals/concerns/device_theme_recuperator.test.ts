import { describe, test, expect } from "@jest/globals";
import Themes from "../../../../assets/themes";
import DeviceThemeRecuperator from "../../../../user_interface/internals/concerns/device_theme_recuperator";

describe('Test Class: "DeviceThemeRecuperator"; Behavior', () => {
  test('Test If Method: "getDeviceTheme"; Returns The Current Device Theme Enumerated', () => {
    const currentDeviceTheme = DeviceThemeRecuperator.getDeviceTheme();

    expect(currentDeviceTheme).toEqual(Themes.LIGHT);
  });
});
