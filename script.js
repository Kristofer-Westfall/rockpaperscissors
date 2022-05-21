let compChoice = 0;
const timeOut = setInterval(5000);

const choiceButton = document.querySelectorAll('[data-choice');
choiceButton.forEach(choiceButton => {
    choiceButton.addEventListener('click', () =>{
     const choiceName =  choiceButton.dataset.choice;
     computerChoice();
     isWinner(choiceName, compChoice);
    })
})

function computerChoice(){
    let i = Math.floor(Math.random() * 3);
    return compChoice = options[i];
}

const options=[{
    context: "rock",
    beats: "scissors",
},
{
    context: "paper",
    beats: "rock", 
},
{
    context: "scissors",
    beats: "paper",
}
]

function reset(){
    document.getElementById("youLose").className = "default";
    document.getElementById("youTie").className = "default";
    document.getElementById("youWin").className = "default";
}

function isWinner(choiceName, compChoice) {
    if (choiceName === compChoice.beats){
       document.getElementById("youLose").className = "result";
       setTimeout(reset, 1000);
        }
     else if (choiceName === compChoice.context){
        document.getElementById("youTie").className = "result";
        setTimeout(reset, 1000);
    } else {
        document.getElementById("youWin").className = "result";
        setTimeout(reset, 1000);

    }
}

const results = document.getElementsByClassName