import { useEffect, useState } from "react";
import CalculatorCharacters from "../domains/calculator/calculator_characters";
import { EMPTY_STRING } from "../constants/strings_utilities_constants";
import LastSessionCalculationResultStore from "../last_session_calculation_result_store/last_session_calculation_result_store";
import CalculatorTranslator from "../infrastructure/anticorruption_layer/calculator_translator";
import CalculatorTranslatorFactory from "../infrastructure/anticorruption_layer/calculator_translator_factory";
import CalculationResultUpdateAdapter from "../calculation_result_update_adapter/calculation_result_update_adapter";
import { isCalculateResultNotValidExpressionMessage } from "../infrastructure/specifications/ui_specifications";
import Languages from "../ui_languages_specific_constants.ts/languages";
import DeviceLanguageRecuperator from "../device_language_recuperator/device_language_recuperator";
import LanguageFactory from "../ui_languages_specific_constants.ts/language_factory";
import GenerateCalculationResultErrorMessageAdapter from "../generate_calculation_result_error_message_adapter/generate_calculation_result_error_message_adapter";
import CalculationResultReconciliationAdapter from "../calculation_result_reconciliation_adapter/calculation_result_reconciliation_adapter";

function useCalculationResult(): {
  calculationResult: any;
  // eslint-disable-next-line no-unused-vars
  addCharacter: (character: CalculatorCharacters) => void;
  backspace: () => void;
  clean: () => void;
  evaluate: () => void;
} {
  const calculatorTranslator: CalculatorTranslator =
    CalculatorTranslatorFactory.getInstance(EMPTY_STRING);
  const deviceLanguage: Languages =
    DeviceLanguageRecuperator.getDeviceLanguage();
  const { NOT_VALID_EXPRESSION_ERROR_MESSAGE } =
    LanguageFactory.getInstance(deviceLanguage);
  const [calculationResult, setCalculationResult] = useState(EMPTY_STRING);

  useEffect(() => {
    LastSessionCalculationResultStore.getExpression()
      .then((storedCalculationResult: string) => {
        if (
          isCalculateResultNotValidExpressionMessage(storedCalculationResult)
        ) {
          GenerateCalculationResultErrorMessageAdapter.generateErrorMessage(
            calculatorTranslator,
          );
          setCalculationResult(NOT_VALID_EXPRESSION_ERROR_MESSAGE);
        } else {
          CalculationResultReconciliationAdapter.reconciliateCalculatorCalculationResultExpression(
            storedCalculationResult,
            calculatorTranslator,
          );
          setCalculationResult(storedCalculationResult);
        }
      })
      .catch(() => {});
  }, [deviceLanguage, NOT_VALID_EXPRESSION_ERROR_MESSAGE, calculationResult]);

  return {
    calculationResult,

    addCharacter: (character: CalculatorCharacters) => {
      calculatorTranslator.addCharacter(character);

      CalculationResultUpdateAdapter.updateCalculationResultOnKeyValueDatabaseAndUi(
        setCalculationResult,
        calculatorTranslator,
      );
    },

    backspace: () => {
      calculatorTranslator.backspace();

      CalculationResultUpdateAdapter.updateCalculationResultOnKeyValueDatabaseAndUi(
        setCalculationResult,
        calculatorTranslator,
      );
    },

    clean: () => {
      calculatorTranslator.clean();

      CalculationResultUpdateAdapter.updateCalculationResultOnKeyValueDatabaseAndUi(
        setCalculationResult,
        calculatorTranslator,
      );
    },

    evaluate: () => {
      calculatorTranslator.evaluate();

      const currentCalculationResult: string =
        calculatorTranslator.getCalculationResult();

      LastSessionCalculationResultStore.updateExpression(
        currentCalculationResult,
      );

      isCalculateResultNotValidExpressionMessage(currentCalculationResult)
        ? setCalculationResult(NOT_VALID_EXPRESSION_ERROR_MESSAGE)
        : setCalculationResult(currentCalculationResult);
    },
  };
}

export default useCalculationResult;
