<template>
  <div class="count-section">
    <div class="round-number">
      <h1 class="round-number__header">Round:</h1>
      <div class="round">
        {{round}}
      </div>
    </div>
    <div class="main">
      <button 
        class='start-game' 
        @click="startGame">
        Start
      </button>
    </div>
    <div class="prev-game" v-if="isOver">
      <h2 class="prev-game__header">
        Game Over 
      </h2>
      <div class="prev-game__score">
        You score: {{finallCount}}
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
            v-bind:value="{diff: 'easy'}" 
            v-model="difficulty"
          >Easy
        </label>
        <label class="difficulty-list__item">
          <input 
            type="radio" 
            name="difficulty" 
            class="difficulty-list__item-child"
            v-bind:value="{diff: 'middle'}" 
            v-model="difficulty"
          >Middle
        </label>
        <label class="difficulty-list__item">
          <input 
            type="radio" 
            name="difficulty" 
            class="difficulty-list__item-child"
            v-bind:value="{diff: 'hard'}" 
            v-model="difficulty"
          >Hard
        </label>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Score',
  data: () => ({
    difficulty: {
      diff: 'easy'
    }
  }),
  props: {
    round: Number,
    finallCount: Number,
    isOver: Boolean,
    startGame: Function,
    endGame: Function
  },
  methods: {
    sendGameDiff() {
      this.$emit('send-game-diff', {
        difficulty: this.difficulty.diff
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
</style>