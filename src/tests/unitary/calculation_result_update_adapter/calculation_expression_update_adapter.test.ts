import { describe, test, expect } from "@jest/globals";
import { renderHook } from "@testing-library/react-native";
import { Dispatch, SetStateAction, useState } from "react";
import { act } from "react-test-renderer";
import CalculationExpressionUpdateAdapter from "../../../calculation_expression_update_adapter/calculation_expression_update_adapter";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import Calculator from "../../../domains/calculator/calculator";
import CalculatorFactory from "../../../domains/calculator/calculator_factory";

describe('Test Class: "CalculationExpressionUpdateAdapter"; Behavior', () => {
  test('Test If Method: "updateCalculationExpressionOnKeyValueDatabaseAndUi"; Updates The Ui And Key On Key Value Data database Calculation Expression With The Latest Calculator Calculation Expression Correctly', () => {
    const calculator: Calculator = CalculatorFactory.getInstance("");

    calculator.addCharacter(CalculatorCharacters.ONE);

    const { result } = renderHook(() => useState(""));

    const calculationExpressionUiSetter: Dispatch<SetStateAction<string>> =
      result.current[1] as Dispatch<SetStateAction<string>>;

    act(() => {
      CalculationExpressionUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
        calculationExpressionUiSetter,
        calculator,
      );
    });

    const calculationExpression: string = result.current[0] as string;

    expect(calculationExpression).toEqual(CalculatorCharacters.ONE);
  });
});
