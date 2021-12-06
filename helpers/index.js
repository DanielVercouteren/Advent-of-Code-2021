const TextToNumbersArray = (txtInput) => txtInput.split('\n').map((i) => Number(i))

const TextToArray = (txtInput, separator = '\n') => txtInput.split(separator)

const TextToCoordinates = (txtInput) => {
    // Input is like: 0,9 -> 5,9
    txtInput = txtInput.split(" -> ")
    const x = txtInput[0].split(',')
    const y = txtInput[1].split(',')
    return [x[0], x[1], y[0], y[1]]
}

const BingoCardToArray = (card) => card.replace(/(\r\n|\n|\r)/gm,' ').split(' ').filter(item => item)

module.exports = {
    BingoCardToArray,
    TextToNumbersArray,
    TextToCoordinates,
    TextToArray
}