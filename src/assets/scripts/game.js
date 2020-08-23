
const getRandomPanel = () => {
  const panels = [topLeft, topRight, bottomLeft, bottomRight]
  
  return panels[parseInt(Math.random() * panels.length)]
}

let sequence = [getRandomPanel()]
let sequenceToGuess = [...sequence]

const flash = panel => {
  console.log(sequence, sequenceToGuess);
  return new Promise(resolve => {
    panel.className += ' active'
    setTimeout(() => {
      panel.className = panel.className.replace(' active', '')
      setTimeout(() => {
        resolve()
      }, 250)
    }, 1000)
  })
}

let canClick = false

export const panelClicked = panelClicked => {
  if (!canClick) return
  // console.log(panelClicked)
  const expactedPanel = sequenceToGuess.shift()
  if (expactedPanel === panelClicked) {
    if (sequenceToGuess.length === 0) {
      sequence.push(getRandomPanel())
      sequenceToGuess = [...sequence]
      setTimeout(() => {
        startFlashing()
      }, 300)
    }
  } else {
    sequence = [getRandomPanel()]
    sequenceToGuess = [...sequence]
    console.log(sequence, sequenceToGuess);
    alert('game over')
  }
}

export const startFlashing = async () => {
  // sequence = [getRandomPanel()]
  console.log(sequenceToGuess);
  canClick = false
  for (const panel of sequence) {
    await flash(panel)
  }
  canClick = true
}