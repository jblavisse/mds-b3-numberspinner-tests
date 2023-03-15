import NumberSpinner from "./NumberSpinner";
import { it, expect } from "vitest";

it("Creating a spinner without attributes should be possible", () => {
  // 1. Déclarer le jeu de données
  // 2. Fais des trucs
  let numberSpinner = new NumberSpinner();

  // 3. On vérifie si c'est conforme à ce qu'on veut
  expect(numberSpinner.value).toBe(0);
  expect(numberSpinner.step).toBe(1);
});

it("Incrementing the spinner should add the step to the value", () => {
  // 1. Déclarer le jeu de données
  // value = 0
  let numberSpinner = new NumberSpinner();

  // 2. Fais des trucs
  numberSpinner.increment();

  // 3. On vérifie si c'est conforme à ce qu'on veut
  expect(numberSpinner.value).toBe(1);
});

it("Decrementing the spinner should substract the step to the value", () => {
  let numberSpinner = new NumberSpinner();

  numberSpinner.decrement();
  expect(numberSpinner.value).toBe(-1);

  numberSpinner.decrement();
  expect(numberSpinner.value).toBe(-2);
});
