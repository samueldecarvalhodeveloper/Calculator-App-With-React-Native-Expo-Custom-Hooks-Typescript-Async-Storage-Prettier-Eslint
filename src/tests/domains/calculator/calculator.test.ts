import { describe, beforeEach, test, expect } from "@jest/globals";
import Calculator from "../../../domains/calculator/calculator";
import Characters from "../../../domains/calculator/characters";

describe('Test Class: "Calculator"; Behavior', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator("");
  });

  test('Test If Method: "addCharacter"; Adds Chose Character On Expression', () => {
    calculator.addCharacter(Characters.ONE);

    expect(calculator.expression).toEqual(Characters.ONE);
  });

  test('Test If Method: "backspace"; Removes Last Character Of Expression', () => {
    calculator = new Calculator(Characters.ONE + Characters.ONE);

    calculator.backspace();

    expect(calculator.expression).toEqual(Characters.ONE);
  });

  test('Test If Method: "clean"; Removes All Character From Expression', () => {
    calculator = new Calculator(Characters.ONE + Characters.ONE);

    calculator.clean();

    expect(calculator.expression).toEqual("");
  });

  test('Test If Method: "evaluate"; Evaluates Expression', () => {
    calculator = new Calculator(
      Characters.ONE + Characters.ADDITION + Characters.ONE,
    );

    calculator.evaluate();

    expect(calculator.expression).toEqual(Characters.TWO);
  });

  test('Test If Method: "evaluate"; Rethrows Evaluating Error And Turns Expression Empty If Expression Is Not Valid', () => {
    calculator = new Calculator(
      Characters.ONE + Characters.ADDITION + Characters.ONE,
    );

    calculator.evaluate();

    expect(calculator.expression).toEqual(Characters.TWO);
  });
});
