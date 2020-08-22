<template>
  <div class='game-section'>
    <div>
      <button class="red"></button>
      <button class="blue"></button>
    </div>
    <div>
    <button class="yellow"></button>
    <button class="green"></button>
    </div>
  </div>
</template>

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
</style>