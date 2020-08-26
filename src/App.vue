<template>
  <div id="app">
    <h1>Simon game</h1>
    <div class="wait" v-if="isStarted">Wait!</div>
    <div class="game">
      <Game 
        :playSound="playSound"
        :setGameOverFalse="setGameOverFalse"
        :incrementOfRound="incrementOfRound"
        :endGame="endGame"
        :finallCount="finallCount" 
        :setStarted="setStarted"
        :timing="timing"
        ref="Game"
      />
      <Score 
        :startGame="startGame"
        :round="round" 
        :isGameOver="isGameOver" 
        :finallCount="finallCount" 
        @send-game-diff="takeGameDiff"
        :setGameOverFalse="setGameOverFalse"
        :endGame="endGame"
        :isStarted="isStarted"
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
      isGameOver: false,
      isStarted: false,
      diff: 'easy',
      timing: 1500
    }
  },
  methods: {
    setGameOverFalse() {
      this.isGameOver = false
    },
    incrementOfRound() {
      this.round += 1
    },
    startGame() {
      this.round = 0
      this.$refs.Game.canClick = false
      this.finallCount = 0
      this.$refs.Game.createSequences()
      this.$refs.Game.startGame()
    },
    endGame() {
      this.isGameOver = true
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
    setStarted() {
      this.isStarted = !this.isStarted
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
    align-items: center;
    justify-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 70px;
  }
  .wait{
    display: grid;
    width: 100%;
    position: absolute;
    justify-items: center;
    font-size: 22px;
    font-weight: bold;
    color: tomato;
  }
  @media only screen and (min-width: 720px) and (max-width: 767px) {
    #app{
      font-family: Arial;
    }
    h1{
      text-align: center;
      margin: 0;
    }
    .game{
      grid-template-columns: repeat(2, 48%);
      gap: 4%;
      align-items: center;
      justify-self: center;
      width: 100%;
      margin-top: 20px;
    }
    .wait{
      display: grid;
      width: 100%;
      position: absolute;
      margin-top: 25%;
      font-size: 22px;
      font-weight: bold;
      color: black;
      z-index: 100;
    }
  }
  @media only screen and (min-width: 580px) and (max-width: 719px) {
    #app{
      font-family: Arial;
    }
    h1{
      text-align: center;
      margin: 0;
    }
    .game{
      grid-template-columns: repeat(2, 48%);
      gap: 4%;
      align-items: center;
      justify-self: center;
      width: 100%;
      margin-top: 20px;
    }
    .wait{
      display: grid;
      width: 100%;
      position: absolute;
      margin-top: 40%;
      font-size: 22px;
      font-weight: bold;
      color: black;
      z-index: 100;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 579px) {
    #app{
      font-family: Arial;
    }
    h1{
      text-align: center;
      margin: 0;
    }
    .game{
      display: grid;
      grid-template-columns: 100%;
      gap: 4%;
      align-items: center;
      justify-self: center;
      width: 100%;
      margin-top: 20px;
    }
    .wait{
      width: 100%;
      position: absolute;
      margin-top: 27%;
      font-size: 25px;
      font-weight: bold;
      color: black;
      z-index: 100;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 479px) {
    #app{
      font-family: Arial;
    }
    h1{
      text-align: center;
      margin: 0;
    }
    .game{
      display: grid;
      grid-template-columns: 100%;
      gap: 4%;
      align-items: center;
      justify-self: center;
      width: 100%;
      margin-top: 30px;
    }
    .wait{
      display: grid;
      width: 100%;
      position: absolute;
      margin-top: 40%;
      font-size: 25px;
      font-weight: bold;
      color: black;
      z-index: 100;
    }
  }
  @media only screen and (min-width: 360px) and (max-width: 374px) {
    #app{
      font-family: Arial;
    }
    h1{
      text-align: center;
      margin: 0;
    }
    .game{
      display: grid;
      grid-template-columns: 100%;
      gap: 4%;
      align-items: center;
      justify-self: center;
      width: 100%;
      margin-top: 20px;
    }
    .wait{
      display: grid;
      width: 100%;
      position: absolute;
      margin-top: 40%;
      font-size: 22px;
      font-weight: bold;
      color: black;
      z-index: 100;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 359px) {
    #app{
      font-family: Arial;
    }
    h1{
      text-align: center;
      margin: 0;
    }
    .game{
      display: grid;
      grid-template-columns: 100%;
      gap: 4%;
      align-items: center;
      justify-self: center;
      width: 100%;
      margin-top: 20px;
    }
    .wait{
      display: grid;
      width: 100%;
      position: absolute;
      margin-top: 40%;
      font-size: 22px;
      font-weight: bold;
      color: black;
      z-index: 100;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 319px) {
    #app{
      font-family: Arial;
    }
    h1{
      text-align: center;
      margin: 0;
    }
    .game{
      display: grid;
      grid-template-columns: 100%;
      gap: 4%;
      align-items: center;
      justify-self: center;
      width: 100%;
      margin-top: 20px;
    }
    .wait{
      display: grid;
      width: 100%;
      position: absolute;
      margin-top: 40%;
      font-size: 22px;
      font-weight: bold;
      color: black;
      z-index: 100;
    }
  }
</style>
