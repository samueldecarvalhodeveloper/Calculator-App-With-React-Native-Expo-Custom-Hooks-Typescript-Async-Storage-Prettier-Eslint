import { describe, test, expect } from "@jest/globals";
import { DEVICE_LIGHT_THEME } from "../../../../constants/user_interface_constants";
import CurrentDeviceThemeRetriever from "../../../../user_interface/internals/concerns/current_device_theme_retriever";

describe('Test Class: "CurrentDeviceThemeRetriever"; Behavior', () => {
  test('Test If Method: "getCurrentDeviceTheme"; Returns The Current Device Theme', () => {
    const currentDeviceTheme: string =
      CurrentDeviceThemeRetriever.getCurrentDeviceTheme();

    expect(currentDeviceTheme).toEqual(DEVICE_LIGHT_THEME);
  });
});
