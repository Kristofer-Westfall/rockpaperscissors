let compChoice = 0;

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

function isWinner(choiceName, compChoice) {
    if (choiceName == compChoice.beats){
        console.log("you lose!");
    } else if (choiceName == compChoice.context){
        console.log("tie!")
    } else {
        console.log("You win!")
    }
}