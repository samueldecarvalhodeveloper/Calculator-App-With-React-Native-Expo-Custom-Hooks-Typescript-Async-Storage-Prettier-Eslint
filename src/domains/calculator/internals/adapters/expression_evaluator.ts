import NotValidExpressionError from "../errors/not_valid_expression_error";

class ExpressionEvaluator {
  private constructor() {}

  public static getEvaluatedExpression(expression: string): string {
    try {
      const evaluatedExpression = eval(expression) as number;

      if (!isFinite(evaluatedExpression) || isNaN(evaluatedExpression)) {
        throw new NotValidExpressionError();
      }

      return evaluatedExpression.toString();
    } catch {
      throw new NotValidExpressionError();
    }
  }
}

export default ExpressionEvaluator;
