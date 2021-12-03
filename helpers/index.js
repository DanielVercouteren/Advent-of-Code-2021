const TextToNumbersArray = (txtInput) => txtInput.split('\n').map((i) => Number(i))

const TextToArray = (txtInput) => txtInput.split('\n')

module.exports = {
    TextToNumbersArray,
    TextToArray
}