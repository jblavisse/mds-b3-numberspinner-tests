import NumberSpinner from "./NumberSpinner";
import { it, expect } from "vitest";

it("1+1 doit faire 2", () => {
  // 1. Déclarer le jeu de données
  // 2. Fais des trucs
  let numberSpinner = new NumberSpinner();

  // 3. On vérifie si c'est conforme à ce qu'on veut
  expect(numberSpinner.value).toBe(0);
  expect(numberSpinner.step).toBe(1);
});

it("blablabla", () => {
  // 1. Déclarer le jeu de données
  // 2. Fais des trucs
  // 3. On vérifie si c'est conforme à ce qu'on veut
});
