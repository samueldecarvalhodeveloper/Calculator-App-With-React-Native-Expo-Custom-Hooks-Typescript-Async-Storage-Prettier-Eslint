import { describe, test, expect } from "@jest/globals";
import DeviceThemeRecuperator from "../../../device_theme_recuperator/device_theme_recuperator";
import Themes from "../../../assets/themes";

describe('Test Class: "DeviceThemeRecuperator"; Behavior', () => {
  test('Test If Method: "getDeviceTheme"; Returns The Current Device Theme Enumerated Correctly', () => {
    const currentDeviceTheme: Themes = DeviceThemeRecuperator.getDeviceTheme();

    expect(currentDeviceTheme).toEqual(Themes.LIGHT);
  });
});
