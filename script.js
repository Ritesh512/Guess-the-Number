'use strict';

let secretNum = Math.floor(Math.random() *20)+1;
let score=20;
let highScore =0;

const displayMess = function(mess){
    document.querySelector('.message').textContent = mess;
}

document.querySelector('.check').addEventListener('click', function(){
    const guessNum = Number(document.querySelector('.guess').value);
    console.log(guessNum);
    if(!guessNum){
        displayMess("⛔ No Number");
    }else if(guessNum === secretNum){
        displayMess("🎉 Correct Number");
        document.querySelector('.number').textContent=secretNum;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }else if(guessNum!==secretNum){
        if(score>1){
            document.querySelector('.message').textContent = guessNum > secretNum? "📈 Too High":"📉 Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMess("🥴🥴 You lose the game");
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener("click", function(){
    secretNum = Math.floor(Math.random() *20)+1;
    score=20;

    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').textContent="";

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});