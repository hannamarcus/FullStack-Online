const Letter = require("./Letter");

class Word {
    constructor(word){
    this.letters = word.split('').map(char => new Letter(char))
}
guessLetter(char){
    let foundLetter = false;
    this.letters.forEach(letter => {
        if(letter.guessLetter(char))) {
            foundLetter = true;
}
})


module.exports = Word;
}