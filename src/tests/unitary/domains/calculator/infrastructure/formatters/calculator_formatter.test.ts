import { describe, expect, test } from "@jest/globals";
import CalculatorFormatter from "../../../../../../domains/calculator/infrastructure/formatters/calculator_formatter";
import {
  STRING_WITHOUT_LAST_CHARACTER,
  STRING_WITH_ALL_CHARACTER,
} from "../../../../../constants/string_formatters_constants";

describe('Test Class: "CalculatorFormatter"; Behavior', () => {
  test('Test If Method: "getStringWithoutLastCharacter"; Removes Last Character From String Correctly', () => {
    const stringToBeFormatted: string = STRING_WITH_ALL_CHARACTER;

    const formattedString: string =
      CalculatorFormatter.getStringWithoutLastCharacter(stringToBeFormatted);

    expect(formattedString).toEqual(STRING_WITHOUT_LAST_CHARACTER);
  });
});
