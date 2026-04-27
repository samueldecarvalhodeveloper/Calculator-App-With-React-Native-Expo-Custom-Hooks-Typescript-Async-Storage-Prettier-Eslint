import { describe, test, expect } from "@jest/globals";
import Themes from "../../../../assets/themes";
import DeviceThemeRecuperator from "../../../../user_interface/internals/device_theme_recuperator/device_theme_recuperator";

describe('Test Class: "DeviceThemeRecuperator"; Behavior', () => {
  test('Test If Method: "getDeviceTheme"; Returns Device Theme', () => {
    const currentDeviceTheme = DeviceThemeRecuperator.getDeviceTheme();

    expect(currentDeviceTheme).toEqual(Themes.LIGHT);
  });
});
