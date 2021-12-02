const fs = require('fs')

const dayOne = () => {
    let input

    try {
        input = fs.readFileSync('./input/day1.txt', 'utf8').split('\n').map((i) => Number(i))
    } catch (err) {
        console.error(err)
    }

    const challengeOne = () => {
        let amount = 0;
        input.forEach((item, index) => {
            input[index - 1] && item > input[index - 1] && amount++
        })

        console.log(`The answer to challenge one, day one is: ${amount}`)
    }

    const challengeTwo = () => {
        let amount = 0;
        for(let i = 0; i < input.length; i++) {
            const currentNumber = input[i] + input[i+1] + input[i+2]
            const nextNumber = input[i+1] + input[i+2] + input[i+3]

            nextNumber > currentNumber && amount++
        }

        console.log(`The answer to challenge two, day one is: ${amount}`)

    }

    challengeOne();
    challengeTwo();
}

const dayTwo = () => {
    let input

    try {
        input = fs.readFileSync('./input/day2.txt', 'utf8').split('\n')
    } catch (err) {
        console.error(err)
    }

    const challengeOne = () => {
        // Forward X >> increases horizontal position by X
        // down Y >> increases depth by Y
        // up Z >> decreases depth by Z

        let horizontalPosition = 0
        let depth = 0

        input.forEach(item => {
            const [direction, amount] = item.split(' ')

            if (direction === 'forward') {
                horizontalPosition += Number(amount)
            } else {
                direction === 'down' ? depth += Number(amount) : depth -= Number(amount)
            }
        })

        console.log(`The answer to challenge one, day two is: ${horizontalPosition * depth}`)
    }

    const challengeTwo = () => {
        // Forward X >> increases horizontal position by X, increases depth by X * aim
        // down Y >> increases aim by Y
        // up Z >> decreases aim by Z

        let horizontalPosition = 0
        let depth = 0
        let aim = 0

        input.forEach(item => {
            const [direction, amount] = item.split(' ')

            if (direction === 'forward') {
                horizontalPosition += Number(amount)
                depth += aim * Number(amount)
            } else {
                direction === 'down' ? aim += Number(amount) : aim -= Number(amount)
            }
        })

        console.log(`The answer to challenge two, day two is: ${horizontalPosition * depth}`)
    }

    challengeOne()
    challengeTwo()
}

dayOne()
dayTwo()