import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../constants/domains/calculator_constants";

class NotValidExpressionError extends Error {
  public message: string = NOT_VALID_EXPRESSION_ERROR_MESSAGE;
}

export default NotValidExpressionError;
