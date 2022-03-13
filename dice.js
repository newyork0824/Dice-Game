const rollDiceBtn = document.getElementById("roll-dice-btn")
const resetBtn = document.getElementById('reset-btn')
const playerOneScoreEl = document.getElementById("player-one-score-el")
const playerTwoScoreEl = document.getElementById("player-two-score-el")
const playerOneDiceEl = document.getElementById("player-one-dice-el")
 const playerTwoDiceEl = document.getElementById("player-two-dice-el")
 const playerTurnEl = document.getElementById("playerTurn-el")
const targetScoreInputEl = document.getElementById("target-score-input-el")
const choiceTargetScoreBtn = document.getElementById("choice-target-score-btn")
const scoreMsgEl = document.getElementById("score-msg-el")

let playerOneScore = 0
let playerTwoScore = 0
let winningScore = 20
let playerOneTurn = true
let playerTwoTurn = false
let playerOneHasWon = false
let playerTwoHasWon = false

choiceTargetScoreBtn.addEventListener('click', function(){
 winningScore = targetScoreInputEl.value
 choiceTargetScoreBtn.style.display="none"
targetScoreInputEl.style.display="none"  
rollDiceBtn.style.display="block"
scoreMsgEl.style.display="none"

})


function rollDice() {
  if(playerOneTurn === true) {
    let diceRoll = Math.floor(Math.random() *6) + 1
    playerOneDiceEl.textContent = diceRoll
  console.log(diceRoll)
  
  playerOneScore = playerOneScore + diceRoll
    playerOneScoreEl.innerHTML = `Score: ${playerOneScore}`
    
    if(playerOneScore >= winningScore) {
      playerOneHasWon = true
      declareWinner()
    }else{
    playerOneTurn = false
    playerTwoTurn = true
    playerOneDiceEl.classList.remove("active-dice")
    playerTwoDiceEl.classList.add("active-dice")
    playerTurnEl.textContent = "Player Two Turn"
    
    playerOneDiceEl
    }
  }else if(playerTwoTurn === true) {
    let diceRoll = Math.floor(Math.random() *6) + 1
    playerTwoDiceEl.textContent = diceRoll
  console.log(diceRoll)
  playerTwoScore = playerTwoScore + diceRoll
  playerTwoScoreEl.innerHTML = `Score: ${playerTwoScore}`
    
    console.log(playerTwoScore)
    if(playerTwoScore >= winningScore) {
      playerTwoHasWon = true
      declareWinner()
    }else{
    playerOneTurn = true
    playerTwoTurn = false
    playerOneDiceEl.classList.add("active-dice")
    playerTwoDiceEl.classList.remove("active-dice")
    playerTurnEl.textContent = "Player One Turn"
    }
  }
}

function declareWinner(){
  if(playerOneHasWon === true) {
    playerTurnEl.textContent = "Player One is The Winner!"
    
}else if(playerTwoHasWon === true){
  playerTurnEl.textContent = "Player Two is the Winner!"
}else{
  playerTurnEl.textContent = "No Winner"
 }
  rollDiceBtn.style.display=("none")
  resetBtn.style.display=("block")
}

resetBtn.addEventListener("click",function(){
  playerOneScore = 0
  playerTwoScore = 0
  playerOneScoreEl.innerHTML = `Score: 0`
  playerTwoScoreEl.innerHTML = `Score: 0`
  playerOneDiceEl.textContent = "-"
  playerTwoDiceEl.textContent = "-"
  
  
  
  rollDiceBtn.style.display=("block")
  resetBtn.style.display=("none")
  
})



rollDiceBtn.addEventListener("click", rollDice)
