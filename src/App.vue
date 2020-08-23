<template>
  <div id="app">
    <h1>Simple game</h1>
    <div class="game">
      <Game 
        :playSound="playSound"
        :switchOver="switchOver"
        :incrementOfRound="incrementOfRound"
        :endGame="endGame"
        :timing="timing"
        ref="Game"
      />
      <Score 
        :startGame="startGame"
        :round="round" 
        :isOver="isOver" 
        :finallCount="finallCount" 
        @send-game-diff="takeGameDiff"
        :switchOver="switchOver"
        :endGame="endGame"
      />
    </div>
  </div>
</template>

<script>
import Game from '@/components/Game-section'
import Score from '@/components/Score-section'

export default {
  name: 'App',
  components: {Game, Score},
  data: function() {
    return{
      round: 0,
      finallCount: 0,
      isOver: false,
      diff: 'easy',
      timing: 1500
    }
  },
  methods: {
    switchOver() {
      this.isOver = false
    },
    incrementOfRound() {
      this.round += 1
    },
    endGame(data) {
      this.isOver = true
      this.round > 0 ? this.finallCount = this.round - 1 : this.finallCount = this.round
      this.round = 0
    },
    takeGameDiff(data) {
      this.diff = data.diff.toString()
      this.timing = data.timing
    },
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound)
        audio.play()
      }
    },
    startGame() {
      this.$refs.Game.startGame()
    }
  }
}
</script>

<style scoped>
  #app{
    font-family: Arial;
  }
  h1{
    text-align: center;
  }
  .game{
    grid-template-columns: repeat(2, 48%);
    gap: 4%;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-top: 50px;
  }
</style>
