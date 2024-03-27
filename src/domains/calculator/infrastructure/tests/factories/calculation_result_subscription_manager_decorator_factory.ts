import CalculationActiveRecord from "../../../calculation_active_record";
import CalculationRegister from "../../../calculation_register";
import CalculationResult from "../../../calculation_result";
import CalculationResultSubscriptionManagerDecorator from "../../../calculation_result_subscription_manager_decorator";
import CalculationSubscriber from "../../../calculation_subscriber";

class CalculationResultSubscriptionManagerDecoratorFactory {
  private constructor() {}

  public static getInstance(
    initialValue: string,
  ): CalculationResultSubscriptionManagerDecorator {
    const listOfSubscriber: Array<CalculationSubscriber> = [];
    const calculationResult: CalculationResult = new CalculationResult(
      initialValue,
    );
    const calculationRegister: CalculationRegister = new CalculationRegister(
      calculationResult,
    );
    const calculationActiveRecord: CalculationActiveRecord =
      new CalculationActiveRecord(calculationRegister);
    return new CalculationResultSubscriptionManagerDecorator(
      listOfSubscriber,
      calculationActiveRecord,
    );
  }
}

export default CalculationResultSubscriptionManagerDecoratorFactory;
