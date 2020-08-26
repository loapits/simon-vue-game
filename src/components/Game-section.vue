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
    setGameOverFalse: Function,
    incrementOfRound: Function,
    finallCount: Number,
    setStarted: Function,
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
          }, this.timing)
        }, 300)
      })
    },
    panelClicked(event, sound) {
      if (!this.canClick) return false
      const target = event.currentTarget
      this.playSound(sound)
      
      if (!this.canClick) return
      let expactedPanel = this.sequenceToGuess.shift()

      if (!this.finallCount) {
        if (expactedPanel.className === target.className) {
          if (this.sequenceToGuess.length === 0) {
            this.sequence.push(this.getRandomPanel())
            this.sequenceToGuess = [...this.sequence]
            setTimeout(() => {
              this.setGameOverFalse()
              this.startGame()
            }, this.timing >900 ?this.timing : this.timing*2)
          }
        } else {
          this.endGame()
          this.sequence = [this.getRandomPanel()]
          this.sequenceToGuess = [...this.sequence]
        }
      }
    },
    async startGame() {
      this.setStarted()
      this.incrementOfRound()
      this.setGameOverFalse()
      this.canClick = false
      for (const panel of this.sequence) {
        await this.flash(panel)
      }

      this.canClick = true
      this.setStarted()
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
  .game-section div{
    margin: 0;
    height: 150px;
  }
  button{
    width: 150px;
    height: 150px;
    outline: none;
    cursor: pointer;
    opacity: 0.7;
    border: none;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  button:active{
    outline: none;
    cursor: pointer;
    opacity: 1;
  }
  .red {
  	background: #FF5643;
    border-radius: 300px 0 0 0;
  }
  .red:hover{
    box-shadow: -2px -2px 4px black;
  }
  .blue {
  	background: dodgerblue;
    border-radius: 0 300px 0 0;
  }
  .blue:hover{
    box-shadow: 2px -2px 4px black;
  }
  .yellow {
  	background: #FEEF33;
    border-radius: 0 0 0 300px;
  }
  .yellow:hover{
    box-shadow: -2px 2px 4px black;
    position: sticky;
  }
  .green {
  	background: chartreuse;
    border-radius: 0 0 300px 0;
  }
  .green:hover{
    box-shadow: 2px 2px 4px black;
  }
  .active{
    outline: none;
    opacity: 1;
  }
  /* Adaptive mobile */
  @media only screen and (min-width: 720px) and (max-width: 767px) {
    .game-section{
      display: grid;
      float: unset;
      width: 100%;
      justify-items: center;
      margin-top: 5px;
    }
    .game-section div{
      margin: 0;
      height: 170px;
    }
    button{
      width: 170px;
      height: 170px;
      outline: none;
      cursor: pointer;
      border: none;
      padding: 0;
      margin: 0;
    }
    .red:hover, .blue:hover, .yellow:hover, .green:hover{
      box-shadow: none;
    }
  }
  @media only screen and (min-width: 580px) and (max-width: 719px) {
    .game-section{
      display: grid;
      float: unset;
      width: 100%;
      justify-items: center;
      margin-top: 5px;
    }
    .game-section div{
      margin: 0;
      height: 160px;
    }
    button{
      width: 160px;
      height: 160px;
      outline: none;
      cursor: pointer;
      border: none;
      padding: 0;
      margin: 0;
    }
    .red:hover, .blue:hover, .yellow:hover, .green:hover{
      box-shadow: none;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 579px) {
    .game-section{
      display: grid;
      float: unset;
      width: 100%;
      justify-items: center;
      margin-top: 5px;
    }
    .game-section div{
      margin: 0;
      height: 140px;
    }
    button{
      width: 140px;
      height: 140px;
      outline: none;
      cursor: pointer;
      border: none;
      padding: 0;
      margin: 0;
    }
    .red:hover, .blue:hover, .yellow:hover, .green:hover{
      box-shadow: none;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 479px) {
    .game-section{
      display: grid;
      float: unset;
      width: 100%;
      justify-items: center;
      margin-top: 5px;
    }
    .game-section div{
      margin: 0;
      height: 145px;
    }
    button{
      width: 145px;
      height: 145px;
      outline: none;
      cursor: pointer;
      border: none;
      padding: 0;
      margin: 0;
    }
    .red:hover, .blue:hover, .yellow:hover, .green:hover{
      box-shadow: none;
    }
  }
  @media only screen and (min-width: 360px) and (max-width: 374px) {
    .game-section{
      display: grid;
      float: unset;
      width: 100%;
      justify-items: center;
      margin-top: 5px;
    }
    .game-section div{
      margin: 0;
      height: 130px;
    }
    button{
      width: 130px;
      height: 130px;
      outline: none;
      cursor: pointer;
      border: none;
      padding: 0;
      margin: 0;
    }
    .red:hover, .blue:hover, .yellow:hover, .green:hover{
      box-shadow: none;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 359px) {
    .game-section{
      display: grid;
      float: unset;
      width: 100%;
      justify-items: center;
      margin-top: 5px;
    }
    .game-section div{
      margin: 0;
      height: 130px;
    }
    button{
      width: 130px;
      height: 130px;
      outline: none;
      cursor: pointer;
      border: none;
      padding: 0;
      margin: 0;
    }
    .red:hover, .blue:hover, .yellow:hover, .green:hover{
      box-shadow: none;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 319px) {
    .game-section{
      display: grid;
      float: unset;
      width: 100%;
      justify-items: center;
      margin-top: 5px;
    }
    .game-section div{
      margin: 0;
      height: 130px;
    }
    button{
      width: 130px;
      height: 130px;
      outline: none;
      cursor: pointer;
      border: none;
      padding: 0;
      margin: 0;
    }
    .red:hover, .blue:hover, .yellow:hover, .green:hover{
      box-shadow: none;
    }
  }
</style>





