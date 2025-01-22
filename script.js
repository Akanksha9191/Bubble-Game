const bubblecontainer = document.querySelector('.bubble-container');
const timerDisplay = document.getElementById('timer')
const targetDisplay = document.getElementById('target')
const scoreDisplay = document.getElementById('score')
const originaltime = 10;
let leftTime = 10;
let score = 0;

// create bubbles
let bubbleCounter = 100;
function crerateBubbles(){
    bubblecontainer.innerHTML = ``
    for(i = 0; i<=bubbleCounter; i++){
        const bubble = document.createElement('div')
        bubble.classList.add('bubble');
        bubble.textContent = Math.floor(Math.random()*10);
        bubblecontainer.appendChild(bubble)
    }
}
crerateBubbles();

// generate target
function createTarget(){
    const target = Math.floor(Math.random()*10);
    targetDisplay.textContent = target
}
createTarget();


// Set time
function setTime() {
    const timeInterval = setInterval(() => {
        if (leftTime > 0) {
            leftTime--;
            timerDisplay.textContent = leftTime;
        } else {
            clearInterval(timeInterval);
            bubblecontainer.innerHTML = `
            <div class="end-container">
                <div class="game-over">Game Over !!</div>
                <div class="final-score">Score: ${score}</div>
                <button class="reset-btn" onclick="resetGame()">Reset</button>
            </div>`;
        }
    }, 1000);
}


//for starting game
function startGame(){
    crerateBubbles();
    createTarget();
    setTime();
}
startGame()

// 
function resetGame(){
    leftTime = originaltime;
    score = 0;
    timerDisplay.textContent = leftTime;
    scoreDisplay.textContent = 0;
    startGame();
}
resetGame();

//

bubblecontainer.addEventListener('click', (event)=>{
    if(event.target.classList.contains('bubble')){
        
        if(event.target.textContent === targetDisplay.textContent){
            score += 10;
        }else{
            score -= 5;
        }
        scoreDisplay.textContent = score;
        createTarget();
        crerateBubbles();
    }
})
