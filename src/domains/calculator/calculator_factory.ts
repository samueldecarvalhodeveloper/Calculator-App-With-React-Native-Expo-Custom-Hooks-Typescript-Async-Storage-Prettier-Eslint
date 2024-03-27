import CalculationActiveRecord from "./calculation_active_record";
import CalculationActiveRecordDecorator from "./calculation_active_record_decorator";
import CalculationRegister from "./calculation_register";
import CalculationResult from "./calculation_result";
import CalculationResultSubscriptionManager from "./calculation_result_subscription_manager";
import CalculationResultSubscriptionManagerDecorator from "./calculation_result_subscription_manager_decorator";
import CalculationSubscriber from "./calculation_subscriber";
import Calculator from "./calculator";

class CalculatorFactory {
  private static instance: Calculator | null = null;

  protected constructor() {}

  public static getInstance(initialValue: string): Calculator {
    if (this.instance === null) {
      const calculationResult: CalculationResult = new CalculationResult(
        initialValue,
      );
      const calculationRegister: CalculationRegister = new CalculationRegister(
        calculationResult,
      );
      const calculationActiveRecord: CalculationActiveRecord =
        new CalculationActiveRecordDecorator(calculationRegister);
      const listOfSubscriber: Array<CalculationSubscriber> = [];
      const calculationSubscriptionManager: CalculationResultSubscriptionManager =
        new CalculationResultSubscriptionManagerDecorator(
          listOfSubscriber,
          calculationActiveRecord,
        );

      this.instance = new Calculator(
        calculationActiveRecord,
        calculationSubscriptionManager,
      );
    }

    return this.instance;
  }
}

export default CalculatorFactory;
