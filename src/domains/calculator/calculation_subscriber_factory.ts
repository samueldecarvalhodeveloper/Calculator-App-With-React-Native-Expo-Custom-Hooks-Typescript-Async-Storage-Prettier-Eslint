import CalculationSubscriber from "./calculation_subscriber";
import { Subscription } from "./infrastructure/environment/typescript/types";

class CalculationSubscriberFactory {
  public static getInstance(subscription: Subscription): CalculationSubscriber {
    return new CalculationSubscriber(subscription);
  }
}

export default CalculationSubscriberFactory;
