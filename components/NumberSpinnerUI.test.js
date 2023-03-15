import { describe, it, expect, beforeEach } from "vitest";
import NumberSpinnerUI from "./NumberSpinnerUI";

/**
 * @vitest-environment jsdom
 */

describe("Integrating NumberSpinnerUI", () => {
  let numberSpinnerUI;
  beforeEach(() => {
    document.body.innerHTML = `<div id="spinner1">
    <button class="dec">-</button>
    <input class="input" type="number" />
    <button class="inc">+</button>
    </div>`;
    numberSpinnerUI = new NumberSpinnerUI();
  });

  it("Creating component NumberSpinnerUI", () => {
    expect(numberSpinnerUI.input.value).toBe("0");
  });

  it("Can increment the value with a button", () => {
    numberSpinnerUI.incBtn.click();
    expect(numberSpinnerUI.input.value).toBe("1");
  });

  it("Can decrement the value with a button", () => {
    numberSpinnerUI.decBtn.click();
    expect(numberSpinnerUI.input.value).toBe("-1");
  });
});
