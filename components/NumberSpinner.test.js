import NumberSpinner from "./NumberSpinner";
import { it, describe, expect } from "vitest";

describe("Creating Spinner", () => {
  it("Creating a spinner without attributes should be possible", () => {
    // 1. Déclarer le jeu de données
    // 2. Fais des trucs
    let numberSpinner = new NumberSpinner();

    // 3. On vérifie si c'est conforme à ce qu'on veut
    expect(numberSpinner.value).toBe(0);
    expect(numberSpinner.step).toBe(1);
  });

  it("Creating a spinner with attributes should be possible", () => {
    // 1. Déclarer le jeu de données
    // 2. Fais des trucs
    let numberSpinner = new NumberSpinner(1, 0.1);

    // 3. On vérifie si c'est conforme à ce qu'on veut
    expect(numberSpinner.value).toBe(1);
    expect(numberSpinner.step).toBe(0.1);
    expect(numberSpinner.min).toBe(null);
    expect(numberSpinner.max).toBe(null);

    let numberSpinner2 = new NumberSpinner(5, 0.5, 0, 10);
    expect(numberSpinner2.value).toBe(5);
    expect(numberSpinner2.step).toBe(0.5);
    expect(numberSpinner2.min).toBe(0);
    expect(numberSpinner2.max).toBe(10);
  });
});

describe("Performing Operations to the Spinner", () => {
  it("Incrementing the spinner should add the step to the value", () => {
    // 1. Déclarer le jeu de données
    // value = 0
    let numberSpinner = new NumberSpinner();

    // 2. Fais des trucs
    numberSpinner.increment();

    // 3. On vérifie si c'est conforme à ce qu'on veut
    expect(numberSpinner.value).toBe(1);
  });

  it("Incrementing the spinner should not exceed the maximum", () => {
    let numberSpinner = new NumberSpinner(5, 1, null, 6);
    numberSpinner.increment();
    numberSpinner.increment();
    expect(numberSpinner.value).toBe(6);

    let numberSpinner2 = new NumberSpinner(0, 0.1, null, 0.05);
    numberSpinner2.increment();
    numberSpinner2.increment();
    expect(numberSpinner2.value).toBe(0.05);
  });

  it("Decrementing the spinner should not exceed the minimum", () => {
    let numberSpinner = new NumberSpinner(5, 1, 4, null);

    // 2. Fais des trucs
    numberSpinner.decrement();
    numberSpinner.decrement();

    // 3. On vérifie si c'est conforme à ce qu'on veut
    expect(numberSpinner.value).toBe(4);
  });
});
