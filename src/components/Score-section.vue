<template>
  <div class="count-section">
    <div class="main">
      <button 
        v-if="isStarted"
        class='start-game start-game_disabled' 
      >
        Start
      </button>
      <button 
        class='start-game' 
        @click="startGame"
        v-else>
        Start
      </button>
    </div>
    <div class="round-number">
      <h1 class="round-number__header">Round:</h1>
      <div class="round">
        {{round}}
      </div>
    </div>
    <div class="difficulty">
      <h2>Difficulty level</h2>
      <fieldset class="difficulty-list" @change="sendGameDiff">
        <label class="difficulty-list__item">
          <input 
            type="radio" 
            name="difficulty" 
            class="difficulty-list__item-child" 
            v-bind:value="{diff: 'easy', timing: 1500}" 
            v-model="difficulty"
          >Easy
        </label>
        <label class="difficulty-list__item">
          <input 
            type="radio" 
            name="difficulty" 
            class="difficulty-list__item-child"
            v-bind:value="{diff: 'middle', timing: 1000}" 
            v-model="difficulty"
          >Middle
        </label>
        <label class="difficulty-list__item">
          <input 
            type="radio" 
            name="difficulty" 
            class="difficulty-list__item-child"
            v-bind:value="{diff: 'hard', timing: 400}" 
            v-model="difficulty"
          >Hard
        </label>
      </fieldset>
    </div>
    <div class="prev-game" v-if="isOver">
      <h2 class="prev-game__header">
        Game Over 
      </h2>
      <div class="prev-game__score">
        You score: {{finallCount}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Score',
  data: () => ({
    difficulty: {
      diff: 'easy',
      timing: 1500
    }
  }),
  props: {
    round: Number,
    finallCount: Number,
    startGame: Function,
    isOver: Boolean,
    isStarted: Boolean,
    switchOver: Function,
    endGame: Function
  },
  methods: {
    sendGameDiff() {
      this.$emit('send-game-diff', {
        diff: this.difficulty.diff,
        timing: this.difficulty.timing
      })
    }
  }
}
</script>

<style scoped>
  .count-section{
    display: grid;
    grid-auto-flow: row;
    justify-items: center;
    width: 50%;
    margin-top: 20px;
    float: right;
  }
  .main{
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin: 10px 0;
  }
  .start-game{
    font-size: 18px;
    width: 200px;
    height: 50px;
    background: lightslategrey;
    color: bisque;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .start-game:active{
    background: slategrey;
  }
  .start-game_disabled{
    background: #ccc;
    color: #777;
  }
  .start-game_disabled:active{
    background: #ccc;
    color: #777;
  }
  .prev-game{
    display: grid;
    justify-items: center;
    width: 100%;
    margin: 10px 0;
  }
  .prev-game__header{
    height: min-content;
    color: #FF5643;
    margin: 0 0 10px 0;
  }
  .prev-game__score{
    font-size: 22px;
    font-weight: bold;
  }
  .round-number{
    display: grid;
    grid-template-columns: repeat(2, 50%);
    justify-items: center;
    align-items: center;
    width: 50%;
    margin: 10px 0 10px 15%;
  }
  .round-number__header{
    margin: 0;
  }
  .round{
    font-size: 24px;
    font-weight: bold;
    justify-self: flex-start;
    margin-left: 30px;
  }
  .difficulty{
    display: grid;
    justify-items: center;
    width: 50%;
    margin: 10px 0;
  }
  .difficulty h2{
    margin: 0;
  }
  .difficulty-list{
    border: none;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 20px;
  }
  .difficulty-list__item{
    margin-top: 10px;
  }
    .difficulty-list__item-child{
    margin-right: 10px;
  }

  /* Adaptive mobile */
  @media only screen and (min-width: 720px) and (max-width: 767px) {
    .count-section{
      display: grid;
      grid-auto-flow: row;
      justify-items: center;
      width: 100%;
      margin-top: 0;
      float: unset;
    }
    .main{
      display: grid;
      justify-items: center;
      align-items: center;
      width: 100%;
      height: 50px;
      margin: 10px 0;
    }
    .start-game{
      font-size: 18px;
      width: 180px;
      height: 60px;
      background: lightslategrey;
      color: bisque;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .prev-game{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .prev-game__header{
      height: min-content;
      font-size: 18px;
      color: #FF5643;
      margin: 0 0 2px 0;
    }
    .prev-game__score{
      font-size: 18px;
      font-weight: bold;
    }
    .round-number{
      display: grid;
      grid-template-columns: repeat(2, 50%);
      justify-items: center;
      align-items: center;
      width: 100%;
      margin: 10px 0 0 0;
    }
    .round-number__header{
      font-size: 18px;
      margin: 0;
      justify-self: flex-end;
    }
    .round{
      font-size: 18px;
      font-weight: bold;
      justify-self: flex-start;
      margin-left: 20px;
    }
    .difficulty{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .difficulty h2{
      margin: 0;
      font-size: 18px;
    }
    .difficulty-list{
      border: none;
      display: inline;
      padding: 0;
    }
    .difficulty-list__item{
      margin-top: 10px;
    }
    .difficulty-list__item-child{
      margin: 10px;
    }
  }
  @media only screen and (min-width: 580px) and (max-width: 719px) {
    .count-section{
      display: grid;
      grid-auto-flow: row;
      justify-items: center;
      width: 100%;
      margin-top: 0;
      float: unset;
    }
    .main{
      display: grid;
      justify-items: center;
      align-items: center;
      width: 100%;
      height: 50px;
      margin: 10px 0;
    }
    .start-game{
      font-size: 18px;
      width: 150px;
      height: 40px;
      background: lightslategrey;
      color: bisque;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .prev-game{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .prev-game__header{
      height: min-content;
      font-size: 18px;
      color: #FF5643;
      margin: 0 0 2px 0;
    }
    .prev-game__score{
      font-size: 18px;
      font-weight: bold;
    }
    .round-number{
      display: grid;
      grid-template-columns: repeat(2, 50%);
      justify-items: center;
      align-items: center;
      width: 100%;
      margin: 10px 0 0 0;
    }
    .round-number__header{
      font-size: 18px;
      margin: 0;
      justify-self: flex-end;
    }
    .round{
      font-size: 18px;
      font-weight: bold;
      justify-self: flex-start;
      margin-left: 20px;
    }
    .difficulty{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .difficulty h2{
      margin: 0;
      font-size: 18px;
    }
    .difficulty-list{
      border: none;
      display: inline;
      padding: 0;
    }
    .difficulty-list__item{
      margin-top: 10px;
    }
    .difficulty-list__item-child{
      margin: 10px;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 579px) {
    .count-section{
      display: grid;
      grid-auto-flow: row;
      justify-self: flex-start;
      width: 100%;
      margin-top: 0;
      float: unset;
    }
    .main{
      display: grid;
      justify-items: center;
      align-items: center;
      width: 100%;
      height: 50px;
      margin: 10px 0;
    }
    .start-game{
      font-size: 18px;
      width: 160px;
      height: 50px;
      background: lightslategrey;
      color: bisque;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .prev-game{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .prev-game__header{
      height: min-content;
      font-size: 19px;
      color: #FF5643;
      margin: 0 0 2px 0;
    }
    .prev-game__score{
      font-size: 19px;
      font-weight: bold;
    }
    .round-number{
      display: grid;
      grid-template-columns: repeat(2, 50%);
      justify-items: center;
      align-items: center;
      width: 100%;
      margin: 10px 0 0 0;
    }
    .round-number__header{
      font-size: 19px;
      margin: 0;
      justify-self: flex-end;
    }
    .round{
      font-size: 19px;
      font-weight: bold;
      justify-self: flex-start;
      margin-left: 20px;
    }
    .difficulty{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .difficulty h2{
      margin: 0;
      padding: 0;
      font-size: 19px;
    }
    .difficulty-list{
      border: none;
      display: inline;
      padding: 0;
    }
    .difficulty-list__item{
      margin-top: 10px;
    }
    .difficulty-list__item-child{
      margin: 10px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 479px) {
    .count-section{
      display: grid;
      grid-auto-flow: row;
      justify-items: center;
      width: 100%;
      margin-top: 0;
      float: unset;
    }
    .main{
      display: grid;
      justify-items: center;
      align-items: center;
      width: 100%;
      height: 50px;
      margin: 10px 0;
    }
    .start-game{
      font-size: 18px;
      width: 170px;
      height: 50px;
      background: lightslategrey;
      color: bisque;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .prev-game{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .prev-game__header{
      height: min-content;
      font-size: 20px;
      color: #FF5643;
      margin: 0 0 2px 0;
    }
    .prev-game__score{
      font-size: 20px;
      font-weight: bold;
    }
    .round-number{
      display: grid;
      grid-template-columns: repeat(2, 50%);
      justify-items: center;
      align-items: center;
      width: 100%;
      margin: 10px 0 0 0;
    }
    .round-number__header{
      font-size: 20px;
      margin: 0;
      justify-self: flex-end;
    }
    .round{
      font-size: 20px;
      font-weight: bold;
      justify-self: flex-start;
      margin-left: 20px;
    }
    .difficulty{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .difficulty h2{
      margin: 0;
      font-size: 20px;
    }
    .difficulty-list{
      border: none;
      display: inline;
      padding: 0;
    }
    .difficulty-list__item{
      margin-top: 10px;
      font-size: 20px;
    }
    .difficulty-list__item-child{
      margin: 10px;
    }
  }
  @media only screen and (min-width: 360px) and (max-width: 374px) {
    .count-section{
      display: grid;
      grid-auto-flow: row;
      justify-items: center;
      width: 100%;
      margin-top: 0;
      float: unset;
    }
    .main{
      display: grid;
      justify-items: center;
      align-items: center;
      width: 100%;
      height: 50px;
      margin: 10px 0;
    }
    .start-game{
      font-size: 18px;
      width: 150px;
      height: 40px;
      background: lightslategrey;
      color: bisque;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .prev-game{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .prev-game__header{
      height: min-content;
      font-size: 18px;
      color: #FF5643;
      margin: 0 0 2px 0;
    }
    .prev-game__score{
      font-size: 18px;
      font-weight: bold;
    }
    .round-number{
      display: grid;
      grid-template-columns: repeat(2, 50%);
      justify-items: center;
      align-items: center;
      width: 100%;
      margin: 10px 0 0 0;
    }
    .round-number__header{
      font-size: 18px;
      margin: 0;
      justify-self: flex-end;
    }
    .round{
      font-size: 18px;
      font-weight: bold;
      justify-self: flex-start;
      margin-left: 20px;
    }
    .difficulty{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .difficulty h2{
      margin: 0;
      font-size: 18px;
    }
    .difficulty-list{
      border: none;
      display: inline;
      padding: 0;
    }
    .difficulty-list__item{
      margin-top: 10px;
    }
    .difficulty-list__item-child{
      margin: 10px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 359px) {  
    .count-section{
      display: grid;
      grid-auto-flow: row;
      justify-items: center;
      width: 100%;
      margin-top: 0;
      float: unset;
    }
    .main{
      display: grid;
      justify-items: center;
      align-items: center;
      width: 100%;
      height: 50px;
      margin: 10px 0;
    }
    .start-game{
      font-size: 18px;
      width: 150px;
      height: 40px;
      background: lightslategrey;
      color: bisque;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .prev-game{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .prev-game__header{
      height: min-content;
      font-size: 18px;
      color: #FF5643;
      margin: 0 0 2px 0;
    }
    .prev-game__score{
      font-size: 18px;
      font-weight: bold;
    }
    .round-number{
      display: grid;
      grid-template-columns: repeat(2, 50%);
      justify-items: center;
      align-items: center;
      width: 100%;
      margin: 10px 0 0 0;
    }
    .round-number__header{
      font-size: 18px;
      margin: 0;
      justify-self: flex-end;
    }
    .round{
      font-size: 18px;
      font-weight: bold;
      justify-self: flex-start;
      margin-left: 20px;
    }
    .difficulty{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .difficulty h2{
      margin: 0;
      font-size: 18px;
    }
    .difficulty-list{
      border: none;
      display: inline;
      padding: 0;
    }
    .difficulty-list__item{
      margin-top: 10px;
    }
    .difficulty-list__item-child{
      margin: 10px;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 319px) {
    .count-section{
      display: grid;
      grid-auto-flow: row;
      justify-items: center;
      width: 100%;
      margin-top: 0;
      float: unset;
    }
    .main{
      display: grid;
      justify-items: center;
      align-items: center;
      width: 100%;
      height: 50px;
      margin: 10px 0;
    }
    .start-game{
      font-size: 18px;
      width: 150px;
      height: 40px;
      background: lightslategrey;
      color: bisque;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .prev-game{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .prev-game__header{
      height: min-content;
      font-size: 18px;
      color: #FF5643;
      margin: 0 0 2px 0;
    }
    .prev-game__score{
      font-size: 18px;
      font-weight: bold;
    }
    .round-number{
      display: grid;
      grid-template-columns: repeat(2, 50%);
      justify-items: center;
      align-items: center;
      width: 100%;
      margin: 10px 0 0 0;
    }
    .round-number__header{
      font-size: 18px;
      margin: 0;
      justify-self: flex-end;
    }
    .round{
      font-size: 18px;
      font-weight: bold;
      justify-self: flex-start;
      margin-left: 20px;
    }
    .difficulty{
      display: grid;
      justify-items: center;
      width: 100%;
      margin: 10px 0;
    }
    .difficulty h2{
      margin: 0;
      font-size: 18px;
    }
    .difficulty-list{
      border: none;
      display: inline;
      padding: 0;
    }
    .difficulty-list__item{
      margin-top: 10px;
    }
    .difficulty-list__item-child{
      margin: 10px;
    }
  }
</style>