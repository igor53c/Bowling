import { Bowling } from '../src/Bowling';

describe('Bowling', () => {
    let game;

    beforeEach(() => {
        game = new Bowling();
    });

    function rollMany(rolls) {
        rolls.forEach(pins => game.roll(pins));
    }

    test('should be able to score a game with no strikes or spares', () => {
        rollMany([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
        expect(game.score()).toBe(90);
    });

    test('points scored in the roll after a spare are counted twice', () => {
        rollMany([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(game.score()).toBe(16);
    });

    test('points scored in the two rolls after a strike are counted twice as a bonus', () => {
        rollMany([10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(game.score()).toBe(26);
    });

    test('consecutive spares each get a one roll bonus', () => {
        rollMany([5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(game.score()).toBe(31);
    });

    test('a spare in the last frame gets a one roll bonus that is counted once', () => {
        rollMany([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7]);
        expect(game.score()).toBe(17);
    });

    test('a strike in the last frame gets a two roll bonuses that is counted once', () => {
        rollMany([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1]);
        expect(game.score()).toBe(18);
    });
});
