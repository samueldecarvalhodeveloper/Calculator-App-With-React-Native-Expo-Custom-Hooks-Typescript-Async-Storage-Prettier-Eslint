import { describe, beforeAll, test, expect, jest } from "@jest/globals";
import DeviceLanguageRetriever from "../../../infrastructure/anticorruption_layer/device_language_retriever";
import { GERMAN_LANGUAGE } from "../../../constants/device_utilities_constants";
import DeviceLanguageRecuperator from "../../../device_language_recuperator/device_language_recuperator";
import Languages from "../../../ui_languages_specific_constants.ts/languages";

describe('Test Class: "DeviceLanguageRecuperator"; Behavior', () => {
  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(GERMAN_LANGUAGE);
  });

  test('Test If Method: "getDeviceLanguage"; Return The Numerated Of Device Language Correctly', () => {
    const deviceLanguage: Languages =
      DeviceLanguageRecuperator.getDeviceLanguage();

    expect(deviceLanguage).toEqual(Languages.GERMAN);
  });
});
