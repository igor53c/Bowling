export class Bowling {
    constructor() {
        this.rolls = [];
    }

    roll(pins) {
        this.rolls.push(pins);
    }

    score() {
        let score = 0;
        let rollIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) {
                score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
                rollIndex++;
            } else if (this.isSpare(rollIndex)) {
                score += 10 + this.rolls[rollIndex + 2];
                rollIndex += 2;
            } else {
                score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
                rollIndex += 2;
            }
        }

        return score;
    }

    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }

    isSpare(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }
  }