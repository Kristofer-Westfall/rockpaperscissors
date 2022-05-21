const choiceButton = document.querySelectorAll('[data-choice');
choiceButton.forEach(choiceButton => {
    choiceButton.addEventListener('click', () =>{
     const choiceName =  choiceButton.dataset.choice;
     makeChoice(choiceName);

    })
})
let compChoice = 0;


function computerChoice(){
    let i = Math.floor(Math.random() * 3);
    return compChoice = options[i];
}

function choiceAssign(){
    let choice = function(){
        if (choiceName == options.context)  {
            return options.context;
        }
    }
}

function isWinner(choice, compPlay){
    if (choice.beats === compPlay.context){
        console.log("You win!");
    } else{
        console.log("you lose!");
    }
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

function makeChoice(){
    choiceAssign();
    const compPlay = computerChoice();
    const youWin = isWinner(choice, compPlay);
    const computerWin = isWinner(compPlay, choice);
}
