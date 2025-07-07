import { describe, beforeAll, beforeEach, test, expect } from "@jest/globals";
import CalculationExpression from "../../../../domains/calculator/calculation_expression";
import CalculationExpressionRegister from "../../../../domains/calculator/calculation_expression_register";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";

describe('Test Class: "CalculationExpressionRegister"; Behavior', () => {
  let calculationExpression: CalculationExpression;
  let calculationExpressionRegister: CalculationExpressionRegister;

  beforeAll(() => {
    calculationExpression = new CalculationExpression("");
    calculationExpressionRegister = new CalculationExpressionRegister(
      calculationExpression,
    );
  });

  beforeEach(() => {
    calculationExpression.setCalculationExpression("");
  });

  test('Test If Method: "getCalculationExpression"; Returns Current Calculation Expression Correctly', () => {
    calculationExpression.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });

  test('Test If Method: "setCalculationExpression"; Sets Calculation Expression Correctly', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });

  test('Test If Method: "addCharacterToCalculationExpression"; Adds Chose Character To Calculation Expression Correctly', () => {
    calculationExpressionRegister.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });
});
