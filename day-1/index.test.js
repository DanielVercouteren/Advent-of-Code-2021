const { challengeOne, challengeTwo } = require('./index')

const input = `199
200
208
210
200
207
240
269
260
263`

describe('Challenges for day one', () => {
    test('Should give the output of challenge 1, day one with test input', () => {
        expect(challengeOne(input)).toBe(7)
    })

    test('Should give the output of challenge 2, day one with test input', () => {
        expect(challengeTwo(input)).toBe(5)
    })
})