class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.average;
    }

    guess() {
        this.average = Math.ceil((this.max - this.min) / 2 + this.min);
        return this.average;
    }

    lower() {
        this.setRange(this.min, this.average);
    }

    greater() {
        this.setRange(this.average, this.max);
    }
}

module.exports = GuessingGame;
