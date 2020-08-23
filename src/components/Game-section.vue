<template>
  <div class='game-section'>
    <div>
      <button 
        @click="panelClicked($event, sound1)" 
        class="red"
        id="1"
      ></button>
      <button
       @click="panelClicked($event, sound2)"
        class="blue"
        id="2"
      ></button>
    </div>
    <div>
    <button 
      @click="panelClicked($event, sound3)"
      class="yellow"
      id="3"
    ></button>
    <button 
      @click="panelClicked($event, sound4)"
      class="green"
      id="4"
    ></button>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'Game',
  props: {
    playSound: Function,
    switchOver: Function,
    incrementOfRound: Function,
    endGame: Function,
    timing: Number
  },
  data: () => ({
    canClick: false,
    sound1: 'https://faradarata.000webhostapp.com/sounds/1.mp3',
    sound2: 'https://faradarata.000webhostapp.com/sounds/2.mp3',
    sound3: 'https://faradarata.000webhostapp.com/sounds/3.mp3',
    sound4: 'https://faradarata.000webhostapp.com/sounds/4.mp3'
  }),
  mounted() {
    this.red = document.querySelector('.red')
    this.blue = document.querySelector('.blue')
    this.yellow = document.querySelector('.yellow')
    this.green = document.querySelector('.green')
    this.createSequences()
  },
  methods: {
    getRandomPanel() {
      this.panels = [this.red, this.blue, this.yellow, this.green]
      return this.panels[parseInt(Math.random() * this.panels.length)]
    },
    createSequences() {
      this.sequence = [this.getRandomPanel()]
      this.sequenceToGuess = [...this.sequence]
    },
    flash(panel) {
      switch (panel.className) {
        case 'red':
          this.playSound(this.sound1)
          break
        case 'blue':
          this.playSound(this.sound2)
          break
        case 'yellow':
          this.playSound(this.sound3)
          break
        case 'green':
          this.playSound(this.sound4)
          break
      }
      return new Promise(resolve => {
        panel.className += ' active'
        setTimeout(() => {
          panel.className = panel.className.replace(' active', '')
          setTimeout(() => {
            resolve()
          }, 300)
        }, 300)
      })
    },
    panelClicked(event, sound) {
      const target = event.currentTarget
      this.playSound(sound)
      
      if (!this.canClick) return
      let expactedPanel = this.sequenceToGuess.shift()

      if (expactedPanel.className === target.className) {
        if (this.sequenceToGuess.length === 0) {
          this.sequence.push(this.getRandomPanel())
          this.sequenceToGuess = [...this.sequence]
          setTimeout(() => {
            this.startGame()
            this.switchOver()
            this.incrementOfRound()
          }, this.timing)
        }
      } else {
        this.endGame()
        this.sequence = [this.getRandomPanel()]
        this.sequenceToGuess = [...this.sequence]
      }
    },
    async startGame() {
      this.switchOver()
      this.canClick = false
      for (const panel of this.sequence) {
        await this.flash(panel)
      }
      this.canClick = true
    }
  }
}
</script>

<style scoped>
  .game-section{
    display: grid;
    float: left;
    width: 50%;
    justify-items: flex-end;
    margin-top: 40px;
  }
  button{
    height: 150px;
    outline: none;
    cursor: pointer;
    opacity: 0.7;
    border: none;
    padding: 0;
    margin: -4px 0;
  }
  button:active{
    height: 150px;
    outline: none;
    cursor: pointer;
    opacity: 1;
  }
  .red {
  	background: #FF5643;
    width: 150px;
    border-radius: 300px 0 0 0;
  }
  .red:hover{
    border-left: 3px solid black;
    border-top: 3px solid black;
  }
  .blue {
  	background: dodgerblue;
    width: 150px;
    border-radius: 0 300px 0 0;
  }
  .blue:hover{
    border-top: 3px solid black;
    border-right: 3px solid black;
  }
  .yellow {
  	background: #FEEF33;
    width: 150px;
    border-radius: 0 0 0 300px;
  }
  .yellow:hover{
    border-left: 3px solid black;
    border-bottom: 3px solid black;
  }
  .green {
  	background: #BEDE15;
    width: 150px;
    border-radius: 0 0 300px 0;
  }
  .green:hover{
    border-right: 3px solid black;
    border-bottom: 3px solid black;
  }
  .active{
    outline: none;
    opacity: 1;
  }
</style>





