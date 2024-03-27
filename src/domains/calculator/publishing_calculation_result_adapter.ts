import CalculationActiveRecord from "./calculation_active_record";
import CalculationResultSubscriptionManager from "./calculation_result_subscription_manager";

class PublishingCalculationResultAdapter {
  private constructor() {}

  public static updateCalculationResult(
    calculationActiveRecord: CalculationActiveRecord,
    calculationResultSubscriptionManager: CalculationResultSubscriptionManager,
  ): void {
    const currentCalculationResult: string =
      calculationActiveRecord.getCalculationResult();

    calculationResultSubscriptionManager.publish(currentCalculationResult);
  }
}

export default PublishingCalculationResultAdapter;
