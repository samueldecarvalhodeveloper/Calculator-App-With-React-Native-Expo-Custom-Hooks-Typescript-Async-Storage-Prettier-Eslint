import { describe, test, expect } from "@jest/globals";
import { DEVICE_LIGHT_THEME } from "../../../../constants/ui_constants";
import CurrentDeviceThemeRetriever from "../../../../infrastructure/anticorruption_layer/current_device_theme_retriever";

describe('Test Class: "CurrentDeviceThemeRetriever"; Behavior', () => {
  test('Test If Method: "getCurrentDeviceTheme"; Returns The Current Device Theme Correctly', () => {
    const currentDeviceTheme: string =
      CurrentDeviceThemeRetriever.getCurrentDeviceTheme();

    expect(currentDeviceTheme).toEqual(DEVICE_LIGHT_THEME);
  });
});
