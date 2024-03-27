import CalculationActiveRecord from "../../../calculation_active_record";
import CalculationRegister from "../../../calculation_register";
import CalculationResult from "../../../calculation_result";
import CalculationSubscriptionManager from "../../../calculation_result_subscription_manager";
import CalculationResultSubscriptionManagerDecorator from "../../../calculation_result_subscription_manager_decorator";
import CalculationSubscriber from "../../../calculation_subscriber";
import Calculator from "../../../calculator";

class CalculatorFactory {
  private constructor() {}

  public static getInstance(initialValue: string): Calculator {
    const calculationResult: CalculationResult = new CalculationResult(
      initialValue,
    );
    const calculationRegister: CalculationRegister = new CalculationRegister(
      calculationResult,
    );
    const listOfSubscriber: Array<CalculationSubscriber> = [];
    const calculationActiveRecord: CalculationActiveRecord =
      new CalculationActiveRecord(calculationRegister);
    const calculationSubscriptionManager: CalculationSubscriptionManager =
      new CalculationResultSubscriptionManagerDecorator(
        listOfSubscriber,
        calculationActiveRecord,
      );

    return new Calculator(
      calculationActiveRecord,
      calculationSubscriptionManager,
    );
  }
}

export default CalculatorFactory;
