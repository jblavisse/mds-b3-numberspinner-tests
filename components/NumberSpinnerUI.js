import NumberSpinner from "./NumberSpinner";

class NumberSpinnerUI extends NumberSpinner {
  constructor(value = 0, step = 1, min = null, max = null) {
    super(value, step, min, max);
    let spinner1 = document.getElementById("spinner1");

    this.input = spinner1.querySelector(".input");
    this.input.value = this.value;

    this.incBtn = spinner1.querySelector(".inc");
    this.incBtn.addEventListener("click", this.handleClickInc);

    this.decBtn = spinner1.querySelector(".dec");
    this.decBtn.addEventListener("click", this.handleClickDec);
  }

  handleClickInc = () => {
    this.increment();
    this.input.value = this.value;
  };

  handleClickDec = () => {
    this.decrement();
    this.input.value = this.value;
  };
}

export default NumberSpinnerUI;
