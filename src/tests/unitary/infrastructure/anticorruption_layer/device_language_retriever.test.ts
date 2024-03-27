import { describe, beforeAll, test, expect, jest } from "@jest/globals";
import DeviceLanguageRetriever from "../../../../infrastructure/anticorruption_layer/device_language_retriever";
import { ENGLISH_LANGUAGE } from "../../../../constants/device_utilities_constants";

describe('Test Class: "DeviceLanguageRetriever"; Behavior', () => {
  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(ENGLISH_LANGUAGE);
  });

  test('Test If Method: "getDeviceLanguage"; Return The Device Language Correctly', () => {
    const deviceLanguage: string = DeviceLanguageRetriever.getDeviceLanguage();

    expect(deviceLanguage).toEqual(ENGLISH_LANGUAGE);
  });
});
