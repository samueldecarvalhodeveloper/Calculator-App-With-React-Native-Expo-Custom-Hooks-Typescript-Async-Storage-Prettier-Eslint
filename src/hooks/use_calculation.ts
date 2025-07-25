import { useEffect, useMemo, useState } from "react";
import CalculatorCharacters from "../domains/calculator/calculator_characters";
import CalculationExpressionUpdateAdapter from "../calculation_expression_update_adapter/calculation_expression_update_adapter";
import Languages from "../ui_languages_specific_constants.ts/languages";
import DeviceLanguageRecuperator from "../device_language_recuperator/device_language_recuperator";
import LanguageFactory from "../ui_languages_specific_constants.ts/language_factory";
import GenerateCalculationExpressionErrorMessageAdapter from "../generate_calculation_expression_error_message_adapter/generate_calculation_expression_error_message_adapter";
import CalculationExpressionReconciliationAdapter from "../calculation_expression_reconciliation_adapter/calculation_expression_reconciliation_adapter";
import CalculatorFactory from "../domains/calculator/calculator_factory";
import Calculator from "../domains/calculator/calculator";
import { isCalculateExpressionNotValidExpressionMessage } from "../infrastructure/specifications/ui_specifications";
import LastSessionCalculationExpressionStore from "../last_session_calculation_expression_store/last_session_calculation_expression_store";

function useCalculation(): {
  calculationExpression: any;
  // eslint-disable-next-line no-unused-vars
  addCharacter: (character: CalculatorCharacters) => void;
  backspace: () => void;
  clean: () => void;
  evaluate: () => void;
} {
  const calculator: Calculator = useMemo(
    () => CalculatorFactory.getInstance(""),
    [],
  );
  const deviceLanguage: Languages = useMemo(
    () => DeviceLanguageRecuperator.getDeviceLanguage(),
    [],
  );
  const { NOT_VALID_EXPRESSION_ERROR_MESSAGE } = useMemo(
    () => LanguageFactory.getInstance(deviceLanguage),
    [],
  );
  const [calculationExpression, setCalculationExpression] = useState("");

  useEffect(() => {
    LastSessionCalculationExpressionStore.getExpression()
      .then((storedCalculationExpression: string) => {
        if (
          isCalculateExpressionNotValidExpressionMessage(
            storedCalculationExpression,
          )
        ) {
          GenerateCalculationExpressionErrorMessageAdapter.generateErrorMessage(
            calculator,
          );
          setCalculationExpression(NOT_VALID_EXPRESSION_ERROR_MESSAGE);
        } else {
          CalculationExpressionReconciliationAdapter.reconciliateCalculatorCalculationExpressionExpression(
            storedCalculationExpression,
            calculator,
          );
          setCalculationExpression(storedCalculationExpression);
        }
      })
      .catch(() => {});
  }, []);

  return {
    calculationExpression,

    addCharacter: (character: CalculatorCharacters) => {
      calculator.addCharacter(character);

      CalculationExpressionUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
        setCalculationExpression,
        calculator,
      );
    },

    backspace: () => {
      calculator.backspace();

      CalculationExpressionUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
        setCalculationExpression,
        calculator,
      );
    },

    clean: () => {
      calculator.clean();

      CalculationExpressionUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
        setCalculationExpression,
        calculator,
      );
    },

    evaluate: () => {
      calculator.evaluate();

      const currentCalculationExpression: string = calculator.getExpression();

      LastSessionCalculationExpressionStore.updateExpression(
        currentCalculationExpression,
      );

      isCalculateExpressionNotValidExpressionMessage(
        currentCalculationExpression,
      )
        ? setCalculationExpression(NOT_VALID_EXPRESSION_ERROR_MESSAGE)
        : setCalculationExpression(currentCalculationExpression);
    },
  };
}

export default useCalculation;
