const { challengeOne, challengeTwo } = require('./index')

const input = `16,1,2,0,4,2,7,1,2,14`

describe('Challenges for day 7', () => {
    test('Should give the output of challenge 1, day 7 with test input', () => {
        expect(challengeOne(input)).toBe(37)
    })

    test('Should give the output of challenge 2, day 7 with test input', () => {
        expect(challengeTwo(input)).toBe(168)
    })
})