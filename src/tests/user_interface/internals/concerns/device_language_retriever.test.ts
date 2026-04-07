import { describe, beforeAll, test, expect, jest } from "@jest/globals";
import { ENGLISH_LANGUAGE } from "../../../../constants/application_constants";
import DeviceLanguageRetriever from "../../../../user_interface/internals/concerns/device_language_retriever";

describe('Test Class: "DeviceLanguageRetriever"; Behavior', () => {
  beforeAll(() => {
    const spyOnGetDeviceLanguageMethod = jest.spyOn(
      DeviceLanguageRetriever,
      "getDeviceLanguage",
    );

    spyOnGetDeviceLanguageMethod.mockReturnValue(ENGLISH_LANGUAGE);
  });

  test('Test If Method: "getDeviceLanguage"; Return The Device Language', () => {
    const deviceLanguage: string = DeviceLanguageRetriever.getDeviceLanguage();

    expect(deviceLanguage).toEqual(ENGLISH_LANGUAGE);
  });
});
