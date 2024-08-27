import { describe, test, expect } from "@jest/globals";
import CalculationExpression from "../../../../domains/calculator/calculation_expression";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class "CalculationExpression" Behavior', () => {
  test("Test How Calculation Expression Should be Used On Client Correctly", () => {
    const calculationExpression = new CalculationExpression(EMPTY_STRING);

    const initialCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(initialCalculationExpression).toEqual(EMPTY_STRING);

    calculationExpression.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    const updateCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(updateCalculationExpression).toEqual(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });
});
