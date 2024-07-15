function randomizeArray(root) {
    const shuffledRoot = root.sort(() => Math.random() - 0.5);
    const halfway = Math.floor(shuffledRoot.length / 2);
    return [[...shuffledRoot.slice(0, halfway)], [...shuffledRoot.slice(halfway)]]
}

function generateCardsDeck() {
    let deck = []
    for (let i = 1; i <= 13; i++) {
        deck.push(i, i, i, i)
    }
    return deck
}


function selectRandomElement(arr) {
    const max = arr.length
    return arr[Math.floor(Math.random() * max)]
}

module.exports = {
    randomizeArray,
    generateCardsDeck,
    selectRandomElement
}