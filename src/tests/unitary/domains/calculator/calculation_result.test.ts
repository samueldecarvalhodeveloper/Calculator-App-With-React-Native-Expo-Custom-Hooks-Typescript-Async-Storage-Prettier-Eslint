import { describe, test, expect } from "@jest/globals";
import CalculationResult from "../../../../domains/calculator/calculation_result";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculationResult"; Behavior', () => {
  test("Test If Class Represent How Calculation Result Value Show Be Accessed Correctly", () => {
    const calculationResult: CalculationResult = new CalculationResult(
      EMPTY_STRING,
    );

    expect(calculationResult.getResult()).toEqual(EMPTY_STRING);

    const randomCalculationResultValue: string = Math.random().toString();

    calculationResult.setResult(randomCalculationResultValue);

    expect(calculationResult.getResult()).toEqual(randomCalculationResultValue);
  });
});
