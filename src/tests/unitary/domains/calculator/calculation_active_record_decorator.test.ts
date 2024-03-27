import { describe, test, expect } from "@jest/globals";
import CalculationActiveRecordDecoratorFactory from "../../../../domains/calculator/infrastructure/tests/factories/calculation_active_record_decorator_factory";
import CalculationActiveRecord from "../../../../domains/calculator/calculation_active_record";
import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../constants/domains/calculator/calculation_result_messages_constants";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import { EMPTY_STRING } from "../../../../constants/strings_utilities_constants";

describe('Test Class: "CalculationActiveRecord"; Behavior', () => {
  test('Test If Method: "addCharacter"; First, Cleans The Not Valid Expression From Calculation Result, Then Adds The Character Correctly', () => {
    const calculationActiveRecord: CalculationActiveRecord =
      CalculationActiveRecordDecoratorFactory.getInstance(
        NOT_VALID_EXPRESSION_ERROR_MESSAGE,
      );

    calculationActiveRecord.addCharacter(CalculatorCharacters.ONE);

    const emptyCalculationResult: string =
      calculationActiveRecord.getCalculationResult();

    expect(emptyCalculationResult).toEqual(EMPTY_STRING);

    calculationActiveRecord.addCharacter(CalculatorCharacters.ONE);

    const calculationResultWithCharacterAdded: string =
      calculationActiveRecord.getCalculationResult();

    expect(calculationResultWithCharacterAdded).toEqual(
      CalculatorCharacters.ONE,
    );
  });

  test('Test If Method: "removeLastCharacter"; First, Cleans The Not Valid Expression From Calculation Result, Then Removes The Last Character From Calculation Result Expression Correctly', () => {
    const calculationActiveRecord: CalculationActiveRecord =
      CalculationActiveRecordDecoratorFactory.getInstance(
        NOT_VALID_EXPRESSION_ERROR_MESSAGE,
      );

    calculationActiveRecord.removeLastCharacter();

    const emptyCalculationResult: string =
      calculationActiveRecord.getCalculationResult();

    expect(emptyCalculationResult).toEqual(EMPTY_STRING);

    calculationActiveRecord.addCharacter(CalculatorCharacters.ONE);
    calculationActiveRecord.addCharacter(CalculatorCharacters.ONE);

    calculationActiveRecord.removeLastCharacter();

    const calculationResultWithCharacterAdded: string =
      calculationActiveRecord.getCalculationResult();

    expect(calculationResultWithCharacterAdded).toEqual(
      CalculatorCharacters.ONE,
    );
  });

  test('Test If Method: "getCalculationResult"; Does Not Evaluates Calculation Result If Calculation Result Is Not A Valid Expression Correctly', () => {
    const calculationActiveRecord: CalculationActiveRecord =
      CalculationActiveRecordDecoratorFactory.getInstance(
        NOT_VALID_EXPRESSION_ERROR_MESSAGE,
      );

    const currentCalculationResult: string =
      calculationActiveRecord.getCalculationResult();

    expect(currentCalculationResult).toEqual(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );
  });
});

CalculationActiveRecord;
