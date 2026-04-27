import { describe, test, expect } from "@jest/globals";
import CalculatorFactory from "../../dependency_injections/calculator_factory";
import { EXPRESSION_TO_BE_EVALUATED } from "../../constants/domains/calculator_constants";

describe('Test Class: "CalculatorFactory"; Behavior', () => {
  test('Test If Method: "getInstance"; Returns An Instance', () => {
    const instance = CalculatorFactory.getInstance(EXPRESSION_TO_BE_EVALUATED);

    expect(instance.expression).toEqual(EXPRESSION_TO_BE_EVALUATED);
  });
});
