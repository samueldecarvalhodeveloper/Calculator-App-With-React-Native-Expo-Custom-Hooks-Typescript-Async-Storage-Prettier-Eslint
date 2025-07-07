import { describe, test, expect } from "@jest/globals";
import {
  RealObjectEntity,
  STRING_FROM_JSON_OBJECT,
} from "../../../../../../domains/key_value_store/infrastructure/tests/mocks/mocks";
import { REAL_OBJECT_DATA } from "../../../../../../constants/domains/key_value_store/key_value_store_constants";
import JsonTransformer from "../../../../../../domains/key_value_store/infrastructure/anticorruption_layer/json_transformer";

describe('Test Class: "JsonTransformer"; Behavior', () => {
  test('Test If Method: "getRealObjectFromJsonString"; Returns A Real Object Instance From String Json Representation Correctly', () => {
    const realObject: RealObjectEntity = new RealObjectEntity(REAL_OBJECT_DATA);
    const realObjectFromJsonString: RealObjectEntity =
      JsonTransformer.getRealObjectFromJsonString<RealObjectEntity>(
        STRING_FROM_JSON_OBJECT,
      );

    expect(realObjectFromJsonString.data).toEqual(realObject.data);
  });

  test('Test If Method: "getJsonStringFromRealObject"; Returns A Json String Representation Of Real Object Correctly', () => {
    const realObject: RealObjectEntity = new RealObjectEntity(REAL_OBJECT_DATA);
    const jsonStringRepresentationOfRealObject: string =
      JsonTransformer.getJsonStringFromRealObject(realObject);

    expect(jsonStringRepresentationOfRealObject).toEqual(
      STRING_FROM_JSON_OBJECT,
    );
  });
});
