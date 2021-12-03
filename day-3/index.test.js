const { challengeOne, challengeTwo } = require('./index')

const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`

describe('Challenges for day one', () => {
    test('Should give the output of challenge 1, day 3 with test input', () => {
        expect(challengeOne(input)).toBe(198)
    })

    test('Should give the output of challenge 2, day 3 with test input', () => {
        expect(challengeTwo(input)).toBe(230)
    })
})