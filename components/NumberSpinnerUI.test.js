import { it, expect } from "vitest";
import NumberSpinnerUI from "./NumberSpinnerUI";

/**
 * @vitest-environment jsdom
 */

it("Tester la création de NumberSpinnerUI", () => {
  document.body.innerHTML = `<div id="spinner1">
    <button class="dec">-</button>
    <input class="input" type="number" />
    <button class="inc">+</button>
    </div>`;
  let numberSpinnerUI = new NumberSpinnerUI();
  expect(numberSpinnerUI.input.value).toBe("0");
});
