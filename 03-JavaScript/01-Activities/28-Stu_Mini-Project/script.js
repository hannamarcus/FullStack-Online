var userChoice = prompt("Pick r, p or s");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "r";
}else if(computerChoice <=0.67){
    computerChoice = "p";
}else{
    computerChoice = "s";
}
var  compare = function (userChoice,computerChoice){
    if(userChoice === computerChoice){
        alert ("The result is a tie!");
    }
    if(userChoice === "r"){
        if(computerChoice === "s"){
            alert ("You win")
        }
        else if (computerChoice === p)
            alert ("")
        }
    }
    if(userChoice === "p"){
        if(computerChoice === "r"){
            alert ("paper wins")
        }
        else{
            alert ("scissors wins")
        }
    }
    if(userChoice === "s"){
        if(computerChoice === "r"){
            alert ("rock wins")
        }
        else{
            alert ("scissors wins")
        }
    }
};
compare(userChoice,computerChoice)