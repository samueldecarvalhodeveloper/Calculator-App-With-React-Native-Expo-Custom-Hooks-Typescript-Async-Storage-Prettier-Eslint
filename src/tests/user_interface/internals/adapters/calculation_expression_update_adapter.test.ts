import { describe, test, expect } from "@jest/globals";
import { renderHook } from "@testing-library/react-native";
import { Dispatch, SetStateAction, useState } from "react";
import { act } from "react-test-renderer";
import CalculatorFactory from "../../../../dependency_injection/calculator_factory";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import CalculationExpressionUpdateAdapter from "../../../../user_interface/internals/adapters/calculation_expression_update_adapter";

describe('Test Class: "CalculationExpressionUpdateAdapter"; Behavior', () => {
  test('Test If Method: "updateCalculationExpressionOnKeyValueDatabaseAndUi"; Updates The Ui And Key On Key Value Data database Calculation Expression With The Latest Calculator Calculation Expression', () => {
    const calculator = CalculatorFactory.getInstance("");

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
