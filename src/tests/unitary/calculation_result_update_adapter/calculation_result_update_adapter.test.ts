import { describe, test, expect } from "@jest/globals";
import { renderHook } from "@testing-library/react-native";
import { Dispatch, SetStateAction, useState } from "react";
import { act } from "react-test-renderer";
import CalculationExpressionUpdateAdapter from "../../../calculation_expression_update_adapter/calculation_expression_update_adapter";
import { EMPTY_STRING } from "../../../constants/strings_utilities_constants";
import {
  ARRAY_FIRST_INDEX,
  ARRAY_SECOND_INDEX,
} from "../../constants/array_utilities_constants";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import Calculator from "../../../domains/calculator/calculator";
import CalculatorFactory from "../../../domains/calculator/calculator_factory";

describe('Test Class: "CalculationExpressionUpdateAdapter"; Behavior', () => {
  test('Test If Method: "updateCalculationExpressionOnKeyValueDatabaseAndUi"; Updates The Ui And Key On Key Value Data database Calculation Expression With The Latest Calculator Calculation Expression Correctly', () => {
    const calculator: Calculator = CalculatorFactory.getInstance(EMPTY_STRING);

    calculator.addCharacter(CalculatorCharacters.ONE);

    const { result } = renderHook(() => useState(EMPTY_STRING));

    const calculationExpressionUiSetter: Dispatch<SetStateAction<string>> =
      result.current[ARRAY_SECOND_INDEX] as Dispatch<SetStateAction<string>>;

    act(() => {
      CalculationExpressionUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
        calculationExpressionUiSetter,
        calculator,
      );
    });

    const calculationExpression: string = result.current[
      ARRAY_FIRST_INDEX
    ] as string;

    expect(calculationExpression).toEqual(CalculatorCharacters.ONE);
  });
});
