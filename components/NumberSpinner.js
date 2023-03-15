class NumberSpinner {
  constructor() {
    this.value = 0;
    this.step = 1;
  }

  increment() {
    this.value += this.step;
  }

  decrement() {
    this.value = this.value - this.step;
    // this.value -= this.step;
  }
}

export default NumberSpinner;
