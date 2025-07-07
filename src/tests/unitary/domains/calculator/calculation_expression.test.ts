import { describe, test, expect } from "@jest/globals";
import CalculationExpression from "../../../../domains/calculator/calculation_expression";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";

describe('Test Class: "CalculationExpression"; Behavior', () => {
  test("Test How Calculation Expression Should be Used On Client Correctly", () => {
    const calculationExpression = new CalculationExpression("");

    const initialCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(initialCalculationExpression).toEqual("");

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
