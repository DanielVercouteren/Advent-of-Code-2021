const { challengeOne, challengeTwo } = require('./index')

const input = `3,4,3,1,2`

describe('Challenges for day 6', () => {
    test('Should give the output of challenge 1, day 6 with test input', () => {
        expect(challengeOne(input, 18)).toBe(26)
    })

    test('Should give the output of challenge 1, day 6 with more test input', () => {
        expect(challengeOne(input, 80)).toBe(360610)
    })

    test('Should give the output of challenge 2, day 6 with test input', () => {
        expect(challengeOne(input, 256)).toBe(26984457539)
    })
})