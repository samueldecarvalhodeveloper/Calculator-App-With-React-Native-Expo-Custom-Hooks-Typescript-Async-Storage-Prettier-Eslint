import { describe, expect, test } from "@jest/globals";
import { SUBSCRIPTION_MOCK } from "../../../../../../../domains/calculator/infrastructure/tests/mocks/mocks";

describe('Test Module: "mocks"; Behavior', () => {
  test('Test If Mock: "SUBSCRIPTION_MOCK"; Declares An Empty Calculation Subscriber Subscription Function To Testing Using Correctly', () => {
    expect(SUBSCRIPTION_MOCK).toBeTruthy();
  });
});
