import { useCallback, useEffect, useMemo, useState } from "react";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";
import Languages from "../internals/languages_specific_constants.ts/languages";
import LanguageFactory from "../../dependency_injection/language_factory";
import GenerateCalculationExpressionErrorMessageAdapter from "../internals/adapters/generate_calculation_expression_error_message_adapter";
import Calculator from "../../domains/calculator/calculator";
import LastSessionCalculationExpressionStore from "../internals/store/last_session_calculation_expression_store";
import CalculatorFactory from "../../dependency_injection/calculator_factory";
import CalculationExpressionUpdateAdapter from "../internals/adapters/calculation_expression_update_adapter";
import { isCalculateExpressionNotValidExpressionMessage } from "../internals/checkers/user_interface_checker";
import CalculationExpressionReconciliationAdapter from "../internals/adapters/calculation_expression_reconciliation_adapter";
import DeviceLanguageRecuperator from "../internals/concerns/device_language_recuperator";

function useCalculator() {
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
  const addCharacter = useCallback((character: CalculatorCharacters) => {
    calculator.addCharacter(character);

    CalculationExpressionUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
      setCalculationExpression,
      calculator,
    );
  }, []);
  const backspace = useCallback(() => {
    calculator.backspace();

    CalculationExpressionUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
      setCalculationExpression,
      calculator,
    );
  }, []);
  const clean = useCallback(() => {
    calculator.clean();

    CalculationExpressionUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
      setCalculationExpression,
      calculator,
    );
  }, []);
  const evaluate = useCallback(() => {
    calculator.evaluate();

    const currentCalculationExpression: string = calculator.getExpression();

    LastSessionCalculationExpressionStore.updateExpression(
      currentCalculationExpression,
    );

    isCalculateExpressionNotValidExpressionMessage(currentCalculationExpression)
      ? setCalculationExpression(NOT_VALID_EXPRESSION_ERROR_MESSAGE)
      : setCalculationExpression(currentCalculationExpression);
  }, []);

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
    addCharacter,
    backspace,
    clean,
    evaluate,
  };
}

export default useCalculator;
