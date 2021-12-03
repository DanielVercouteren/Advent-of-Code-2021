const { challengeOne, challengeTwo } = require('./index')

const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`

describe('Challenges for day one', () => {
    test('Should give the output of challenge 1, day 2 with test input', () => {
        expect(challengeOne(input)).toBe(150)
    })

    test('Should give the output of challenge 2, day 2 with test input', () => {
        expect(challengeTwo(input)).toBe(900)
    })
})