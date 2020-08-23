<template>
  <div class='game-section'>
    <div>
      <button 
        @click="panelClicked($event, 'https://faradarata.000webhostapp.com/sounds/1.mp3')" 
        class="red"
        id="1"
      ></button>
      <button
       @click="panelClicked($event, 'https://faradarata.000webhostapp.com/sounds/2.mp3')"
        class="blue"
        id="2"
      ></button>
    </div>
    <div>
    <button 
      @click="panelClicked($event, 'https://faradarata.000webhostapp.com/sounds/3.mp3')"
      class="yellow"
      id="3"
    ></button>
    <button 
      @click="panelClicked($event, 'https://faradarata.000webhostapp.com/sounds/4.mp3')"
      class="green"
      id="4"
    ></button>
    </div>
    <button @click="startGame">fgdfggd</button>
  </div> 
</template>

<script>
export default {
  name: 'Game',
  props: {
    playSound: Function
  },
  data: () => ({
    canClick: false
  }),
  mounted() {
    this.red = this.$el.children[0].children[0]
    this.blue = this.$el.children[0].children[1]
    this.yellow = this.$el.children[1].children[0]
    this.green = this.$el.children[1].children[1]
    
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
          this.playSound('https://faradarata.000webhostapp.com/sounds/1.mp3')
          break
        case 'blue':
          this.playSound('https://faradarata.000webhostapp.com/sounds/2.mp3')
          break
        case 'yellow':
          this.playSound('https://faradarata.000webhostapp.com/sounds/3.mp3')
          break
        case 'green':
          this.playSound('https://faradarata.000webhostapp.com/sounds/4.mp3')
          break
      }
      return new Promise(resolve => {
        panel.className += ' active'
        setTimeout(() => {
          panel.className = panel.className.replace(' active', '')
          setTimeout(() => {
            resolve()
          }, 250)
        }, 1000)
      })
    },
    panelClicked(event, sound) {
      const target = event.currentTarget
      this.playSound(sound)
      
      if (!this.canClick) return
      console.log(this.canClick);
      const expactedPanel = this.sequenceToGuess.shift()
      console.log(expactedPanel);

      if (this.expactedPanel === this.target) {
        if (this.sequenceToGuess.length === 0) {
          this.sequence.push(this.getRandomPanel())
          this.sequenceToGuess = [...this.sequence]
          setTimeout(() => {
            this.startGame()
          }, 1000)
        }
      } else {
        this.sequence = [this.getRandomPanel()]
        this.sequenceToGuess = [...this.sequence]

        alert('game over')
      }
    },
    async startGame() {
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





