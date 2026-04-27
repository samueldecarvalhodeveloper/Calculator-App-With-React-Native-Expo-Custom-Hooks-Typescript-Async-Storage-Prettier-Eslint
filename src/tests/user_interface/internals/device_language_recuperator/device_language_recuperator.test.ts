import { describe, test, expect } from "@jest/globals";
import DeviceLanguageRecuperator from "../../../../user_interface/internals/device_language_recuperator/device_language_recuperator";

describe('Test Class: "DeviceLanguageRecuperator"; Behavior', () => {
  test('Test If Method: "getDeviceLanguage"; Returns Device Language', () => {
    const deviceLanguage = DeviceLanguageRecuperator.getDeviceLanguage();

    expect(deviceLanguage).toBeTruthy();
  });
});
