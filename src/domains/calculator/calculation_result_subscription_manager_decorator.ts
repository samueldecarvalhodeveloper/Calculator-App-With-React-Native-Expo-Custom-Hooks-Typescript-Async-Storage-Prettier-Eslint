import CalculationActiveRecord from "./calculation_active_record";
import CalculationResultSubscriptionManager from "./calculation_result_subscription_manager";
import CalculationSubscriber from "./calculation_subscriber";

class CalculationResultSubscriptionManagerDecorator extends CalculationResultSubscriptionManager {
  private calculationActiveRecord: CalculationActiveRecord;

  public constructor(
    listOfSubscriber: Array<CalculationSubscriber>,
    calculationActiveRecord: CalculationActiveRecord,
  ) {
    super(listOfSubscriber);
    this.calculationActiveRecord = calculationActiveRecord;
  }

  public subscribe(subscriber: CalculationSubscriber): void {
    const currentCalculationResult: string =
      this.calculationActiveRecord.getCalculationResult();

    super.subscribe(subscriber);
    subscriber.update(currentCalculationResult);
  }
}

export default CalculationResultSubscriptionManagerDecorator;
