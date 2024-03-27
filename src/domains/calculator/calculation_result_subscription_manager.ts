import CalculationSubscriber from "./calculation_subscriber";

class CalculationResultSubscriptionManager {
  private listOfSubscriber: Array<CalculationSubscriber>;

  public constructor(listOfSubscriber: Array<CalculationSubscriber>) {
    this.listOfSubscriber = listOfSubscriber;
  }

  public subscribe(subscriber: CalculationSubscriber): void {
    this.listOfSubscriber.push(subscriber);
  }

  public publish(currentCalculationResult: string): void {
    this.listOfSubscriber.forEach((subscriber: CalculationSubscriber) => {
      subscriber.update(currentCalculationResult);
    });
  }
}

export default CalculationResultSubscriptionManager;
