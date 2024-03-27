class ExpressionEvaluator {
  private constructor() {}

  public static getEvaluatedExpression(expression: string): string {
    return (eval(expression) as number).toString();
  }
}

export default ExpressionEvaluator;
