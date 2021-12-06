const { BingoCardToArray } = require('../helpers')

const hasBingo = (card, drawnNumbers) => {
    let hasBingo = false

    const cardNumbers = BingoCardToArray(card)
    const horizontalRows = [
        [cardNumbers[0], cardNumbers[1], cardNumbers[2], cardNumbers[3], cardNumbers[4]],
        [cardNumbers[5], cardNumbers[6], cardNumbers[7], cardNumbers[8], cardNumbers[9]],
        [cardNumbers[10], cardNumbers[11], cardNumbers[12], cardNumbers[13], cardNumbers[14]],
        [cardNumbers[15], cardNumbers[16], cardNumbers[17], cardNumbers[18], cardNumbers[19]],
        [cardNumbers[20], cardNumbers[21], cardNumbers[22], cardNumbers[23], cardNumbers[24]],
    ]
    const verticalRows = [
        [cardNumbers[0], cardNumbers[5], cardNumbers[10], cardNumbers[15], cardNumbers[20]],
        [cardNumbers[1], cardNumbers[6], cardNumbers[11], cardNumbers[16], cardNumbers[21]],
        [cardNumbers[2], cardNumbers[7], cardNumbers[12], cardNumbers[17], cardNumbers[22]],
        [cardNumbers[3], cardNumbers[8], cardNumbers[13], cardNumbers[18], cardNumbers[23]],
        [cardNumbers[4], cardNumbers[9], cardNumbers[14], cardNumbers[19], cardNumbers[24]]
    ]

    const checkForBingo = (row) => {
        let drawnNumbersInRow = 0
        row.forEach(number => drawnNumbers.includes(Number(number)) && drawnNumbersInRow++)
        if (drawnNumbersInRow === 5) {
            hasBingo = true
        }
    }

    horizontalRows.forEach(row => checkForBingo(row))
    verticalRows.forEach(row => checkForBingo(row))

    return hasBingo
}

const countCard = (card, drawnNumbers) => {
    console.log('found the final card!', card, drawnNumbers)
    const add = (acc, curr) => Number(acc) + Number(curr)
    let cardNumbers = BingoCardToArray(card)

    drawnNumbers.forEach(drawnNumber => {
        const index = cardNumbers.indexOf(''+drawnNumber)
        if(index !== -1) {
            cardNumbers.splice(index, 1)
        }
    })

    const winningNumber = drawnNumbers[drawnNumbers.length - 1]
    return winningNumber * cardNumbers.reduce(add, 0)
}

const challengeOne = (input) => {
    const numbersToDraw = input.split('\n\n')[0].split(',')
    let drawnNumbers = []
    let winningCardFound = false
    let winningCard
    const cards = input.split('\n\n')
    cards.shift()

    numbersToDraw.forEach(number => {
        if (!winningCard) {
            drawnNumbers.push(Number(number))
            cards.forEach(card => {
                winningCardFound = hasBingo(card, drawnNumbers)
                if (winningCardFound) {
                    winningCard = card
                }
            })
        }
    })

    const answer = countCard(winningCard, drawnNumbers)
    return answer
}

const challengeTwo = (input) => {
    const numbersToDraw = input.split('\n\n')[0].split(',')
    let finalCardToWin

    let drawnNumbers = []

    const cards = input.split('\n\n')
    cards.shift()

    numbersToDraw.forEach(number => {
        if(cards) {
            drawnNumbers.push(Number(number))
            cards.forEach((card, index) => {
                if (hasBingo(card, drawnNumbers)) {
                    if (cards.length === 1) {
                        finalCardToWin = countCard(cards[0], drawnNumbers)
                    }

                    cards.splice(index, 1)
                }
            })
        }
    })

    return finalCardToWin
}

module.exports = {
    challengeOne,
    challengeTwo
}