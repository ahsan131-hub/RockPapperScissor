let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.getElementById("result_p");
const rock_div = document.getElementsByClassName("r");
const scissor_div = document.getElementsByClassName("s");
const paper_div = document.getElementsByClassName("p");


function fullForm(string) {
    if(string=="r"){
        return "Rock";
    }
    if(string=="p"){
        return "Paper";
    }
    return "Scissor"

}

function wins(user ,comp) {
    userScore++;
    userScore_span.innerText=(userScore);
    compScore_span.innerText=compScore;
    const smallUser="user".fontsize(3).sub();
    const compt="comp".fontsize(3).sub();
    result_p.innerHTML= `${fullForm(user)} ${smallUser}  beats  ${fullForm(comp)} ${compt}. you wins!`;
    document.getElementById('scoreBoard').classList.add('win');
    setTimeout(function () {
        document.getElementById('scoreBoard').classList.remove('win');
    },500);
}



function loose(user ,comp) {
    compScore++;
    userScore_span.innerText=(userScore);
    compScore_span.innerText=compScore;
    const smallUser="user".fontsize(3).sub();
    const compt="comp".fontsize(3).sub();
    result_p.innerHTML= `${fullForm(user)} ${smallUser}  losses to  ${fullForm(comp)} ${compt}. you Lost...`;
    document.getElementById('scoreBoard').classList.add('lost');
    setTimeout(function () {
        document.getElementById('scoreBoard').classList.remove('lost');
    },500);
}
function draw(user ,comp) {
    const smallUser="user".fontsize(3).sub();
    const compt="comp".fontsize(3).sub();
    result_p.innerHTML= `${fullForm(user)} ${smallUser}  equals  ${fullForm(comp)} ${compt}. Tie...`;
    document.getElementById('scoreBoard').classList.add('tie');
    setTimeout(function () {
        document.getElementById('scoreBoard').classList.remove('tie');
    },500);
}

function getComputerChoice() {
    const choice = ['r', 'p', 's']
    const rand = Math.floor((Math.random() * 3));
    return choice[rand]
}


function game(userChoice) {
    let compChoice=getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice,compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break;
    }
}


function main() {
    paper_div[0].addEventListener('click', function (event) {
        game("p");
    });
    scissor_div[0].addEventListener('click', function (event) {
        game("s");
    });
    rock_div[0].addEventListener('click', function (event) {
        game("r");
    });

}

main();

