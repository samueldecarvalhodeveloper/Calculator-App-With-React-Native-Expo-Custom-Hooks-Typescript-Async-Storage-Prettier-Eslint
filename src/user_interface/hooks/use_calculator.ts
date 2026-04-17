import { useCallback, useEffect, useMemo, useState } from "react";
import Characters from "../../domains/calculator/characters";
import Languages from "../internals/enums/languages";
import LanguageFactory from "../../dependency_injection/language_factory";
import Calculator from "../../domains/calculator/calculator";
import CalculatorFactory from "../../dependency_injection/calculator_factory";
import DeviceLanguageRecuperator from "../internals/device_language_recuperator/device_language_recuperator";
import LastSessionExpressionStore from "../store/last_session_expression_store";

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
  const [expression, setExpression] = useState("");
  const addCharacter = useCallback((character: Characters) => {
    calculator.addCharacter(character);

    LastSessionExpressionStore.setExpression(calculator.expression);

    setExpression(calculator.expression);
  }, []);
  const backspace = useCallback(() => {
    calculator.backspace();

    LastSessionExpressionStore.setExpression(calculator.expression);

    setExpression(calculator.expression);
  }, []);
  const clean = useCallback(() => {
    calculator.clean();

    LastSessionExpressionStore.setExpression(calculator.expression);

    setExpression(calculator.expression);
  }, []);
  const evaluate = useCallback(() => {
    try {
      calculator.evaluate();

      LastSessionExpressionStore.setExpression(calculator.expression);

      setExpression(calculator.expression);
    } catch {
      setExpression(NOT_VALID_EXPRESSION_ERROR_MESSAGE);
    }
  }, []);

  useEffect(() => {
    LastSessionExpressionStore.getExpression()
      .then(setExpression)
      .catch(() => {});
  }, []);

  return {
    expression,
    addCharacter,
    backspace,
    clean,
    evaluate,
  };
}

export default useCalculator;
