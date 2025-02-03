let userScore=0;
let compScore=0;
let userScoreText=document.getElementById('user-score');
let compScoreText=document.getElementById('computer-score');
let choices=document.querySelectorAll('.choice');
let message=document.querySelector('#msg');
choices.forEach(function(choice){
    choice.addEventListener('click',()=>{
        // const userChoice=choice.getAttribute("id");
        // // console.log(userChoice);
        // playGame(userChoice);
        playGame(choice.id);
    })
}
);

const gameDraw=()=>{
    msg.innerText="Game was Draw!";
    msg.style.backgroundColor='#4b2a1f'
}

const showWinner=(userChoice,compChoice,userWin)=>{
    
    if(userWin){
        userScore++;
        userScoreText.innerHTML=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        compScoreText.innerHTML=compScore;
        msg.innerText=`You Lose! Your ${userChoice} is beaten by ${compChoice}`;
        msg.style.backgroundColor="red";      
    }
}

const playGame=(userChoice)=>{
    const compChoice=generate();
    if(userChoice===compChoice){
        gameDraw();
    }
    else{
        let userWin=true;
        if(userChoice==='rock')
       {userWin=compChoice==='paper'?false:true;}
        else if(userChoice==='paper')
      { userWin=compChoice==='scissors'?false:true;}
        else if(userChoice==='scissors')
      { userWin=compChoice==='rock'?false:true;}
      showWinner(userChoice,compChoice,userWin);
    }
}

const generate=()=>{
    const choicesArray=['rock','paper','scissors'];
    return choicesArray[Math.floor(Math.random()*3)];
}