import {
  STRING_FIRST_CHARACTER,
  STRING_LAST_CHARACTER,
} from "../../../../constants/strings_utilities_constants";

class CalculatorFormatter {
  private constructor() {}

  public static getStringWithoutLastCharacter(string: String): string {
    return string.slice(STRING_FIRST_CHARACTER, STRING_LAST_CHARACTER);
  }
}

export default CalculatorFormatter;
