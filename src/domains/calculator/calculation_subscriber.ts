import { Subscription } from "./infrastructure/environment/typescript/types";

class CalculationSubscriber {
  private subscription: Subscription;

  public constructor(subscription: Subscription) {
    this.subscription = subscription;
  }

  public update(newCalculationResult: string): void {
    this.subscription(newCalculationResult);
  }
}

export default CalculationSubscriber;
