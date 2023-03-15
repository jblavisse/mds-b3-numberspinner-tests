class NumberSpinner {
  constructor(value = 0, step = 1, min = null, max = null) {
    this.value = value;
    this.step = step;
    this.min = min;
    this.max = max;
  }

  increment() {
    if (this.max !== null && this.value + this.step >= this.max) {
      this.value = this.max;
    } else {
      this.value += this.step;
    }
  }

  decrement() {
    if (this.min !== null && this.value - this.step <= this.min) {
      this.value = this.min;
    } else {
      this.value -= this.step;
    }
  }
}

export default NumberSpinner;
