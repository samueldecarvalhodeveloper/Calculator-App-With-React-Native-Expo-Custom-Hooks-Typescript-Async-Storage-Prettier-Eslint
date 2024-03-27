class CalculationResult {
  private result: string;

  public constructor(initialValue: string) {
    this.result = initialValue;
  }

  public getResult(): string {
    return this.result;
  }

  public setResult(result: string): void {
    this.result = result;
  }
}

export default CalculationResult;
