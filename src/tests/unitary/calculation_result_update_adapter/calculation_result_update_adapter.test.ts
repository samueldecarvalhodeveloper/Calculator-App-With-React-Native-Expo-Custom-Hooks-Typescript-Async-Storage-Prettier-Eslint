import { describe, test, expect } from "@jest/globals";
import { renderHook } from "@testing-library/react-native";
import { Dispatch, SetStateAction, useState } from "react";
import { act } from "react-test-renderer";
import CalculationResultUpdateAdapter from "../../../calculation_result_update_adapter/calculation_result_update_adapter";
import { EMPTY_STRING } from "../../../constants/strings_utilities_constants";
import {
  ARRAY_FIRST_INDEX,
  ARRAY_SECOND_INDEX,
} from "../../constants/array_utilities_constants";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import CalculatorTranslator from "../../../infrastructure/anticorruption_layer/calculator_translator";
import CalculatorTranslatorFactory from "../../../infrastructure/anticorruption_layer/calculator_translator_factory";

describe('Test Class: "CalculationResultUpdateAdapter"; Behavior', () => {
  test('Test If Method: "updateCalculationResultOnKeyValueDatabaseAndUi"; Updates The Ui And Key On Key Value Data database Calculation Result With The Latest Calculator Calculation Result Expression Correctly', () => {
    const calculatorTranslator: CalculatorTranslator =
      CalculatorTranslatorFactory.getInstance(EMPTY_STRING);

    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);

    const { result } = renderHook(() => useState(EMPTY_STRING));

    const calculationResultUiSetter: Dispatch<SetStateAction<string>> = result
      .current[ARRAY_SECOND_INDEX] as Dispatch<SetStateAction<string>>;

    act(() => {
      CalculationResultUpdateAdapter.updateCalculationResultOnKeyValueDatabaseAndUi(
        calculationResultUiSetter,
        calculatorTranslator,
      );
    });

    const calculationResult: string = result.current[
      ARRAY_FIRST_INDEX
    ] as string;

    expect(calculationResult).toEqual(CalculatorCharacters.ONE);
  });
});
