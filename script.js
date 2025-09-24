let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else if (choice == 2) {
        return "scissors";
    }
}

function getHumanChoice () {
    let choice = prompt("Please enter your choice: ");
    console.log(choice);
    if (!choice) {
        console.log("No input provided.");
        return null;
    }
    return choice.toLowerCase();
}

function playRound (humanChoice,computerChoice) {
    if (humanChoice=="rock" && computerChoice=="scissors")
    {
        ++humanScore;
        console.log("You win! Rock beats Scissors");
    }
    else if (humanChoice=="rock" && computerChoice=="paper")
    {
        ++computerScore;
        console.log("You lose! Paper beats Rock");
    }
    else if (humanChoice=="scissors" && computerChoice=="rock")
    {
        ++computerScore;
        console.log("You lose! Scissors beats Rock");
    }
    else if (humanChoice=="scissors" && computerChoice=="paper")
    {
        ++humanScore;
        console.log("You win! Scissors beats Paper")
    }
    else if (humanChoice=="paper" && computerChoice=="scissors")
    {
        ++computerScore;
        console.log("You lose! Scissors beats Paper");
    }
    else if (humanChoice=="paper" && computerChoice=="rock")
    {
        ++humanScore;
        console.log("You win! Paper beats Rock");
    }
    else if (humanChoice=="paper" && computerChoice=="paper")
    {
        console.log("It's a tie");
    }
    else if (humanChoice=="scissors" && computerChoice=="scissors")
    {
        console.log("It's a tie");
    }
    else if (humanChoice=="rock" && computerChoice=="rock")
    {
        console.log("It's a tie");
    }
}

for (let round = 0; round < 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (humanScore==3) {
        break;
    }
    else if (computerScore==3) {
        break;
    }
}

if (humanScore >= 3) {
    console.log ("You win!");
}
else if (computerScore >= 3) {
    console.log ("You lose!");
        
}
else {
    console.log ("It's a tie!");
}
