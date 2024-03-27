import CalculationActiveRecord from "./calculation_active_record";
import CalculationSubscriber from "./calculation_subscriber";
import CalculationResultSubscriptionManager from "./calculation_result_subscription_manager";
import CalculatorCharacters from "./calculator_characters";
import PublishingCalculationResultAdapter from "./publishing_calculation_result_adapter";

class Calculator {
  private calculationActiveRecord: CalculationActiveRecord;

  private calculationResultSubscriptionManager: CalculationResultSubscriptionManager;

  constructor(
    calculationActiveRecord: CalculationActiveRecord,
    calculationResultSubscriptionManager: CalculationResultSubscriptionManager,
  ) {
    this.calculationActiveRecord = calculationActiveRecord;
    this.calculationResultSubscriptionManager =
      calculationResultSubscriptionManager;
  }

  public subscribe(calculationSubscriber: CalculationSubscriber): void {
    this.calculationResultSubscriptionManager.subscribe(calculationSubscriber);
  }

  public backspace(): void {
    this.calculationActiveRecord.removeLastCharacter();

    PublishingCalculationResultAdapter.updateCalculationResult(
      this.calculationActiveRecord,
      this.calculationResultSubscriptionManager,
    );
  }

  public clean(): void {
    this.calculationActiveRecord.removeAllCharacters();

    PublishingCalculationResultAdapter.updateCalculationResult(
      this.calculationActiveRecord,
      this.calculationResultSubscriptionManager,
    );
  }

  public addCharacter(character: CalculatorCharacters): void {
    this.calculationActiveRecord.addCharacter(character);

    PublishingCalculationResultAdapter.updateCalculationResult(
      this.calculationActiveRecord,
      this.calculationResultSubscriptionManager,
    );
  }

  public evaluate(): void {
    this.calculationActiveRecord.evaluateCalculationResultExpression();

    PublishingCalculationResultAdapter.updateCalculationResult(
      this.calculationActiveRecord,
      this.calculationResultSubscriptionManager,
    );
  }
}

export default Calculator;
