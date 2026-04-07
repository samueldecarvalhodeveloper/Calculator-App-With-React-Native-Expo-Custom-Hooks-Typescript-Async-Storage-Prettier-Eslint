import { describe, beforeAll, test, expect, jest } from "@jest/globals";
import DeviceLanguageRetriever from "../../../../user_interface/internals/concerns/device_language_retriever";
import { GERMAN_LANGUAGE } from "../../../../constants/application_constants";
import DeviceLanguageRecuperator from "../../../../user_interface/internals/concerns/device_language_recuperator";
import Languages from "../../../../user_interface/internals/languages_specific_constants.ts/languages";

describe('Test Class: "DeviceLanguageRecuperator"; Behavior', () => {
  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  test('Test If Method: "getDeviceLanguage"; Return The Numerated Of Device Language', () => {
    const deviceLanguage = DeviceLanguageRecuperator.getDeviceLanguage();

    expect(deviceLanguage).toEqual(Languages.GERMAN);
  });
});
