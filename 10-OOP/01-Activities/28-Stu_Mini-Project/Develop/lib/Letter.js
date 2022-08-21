class Letter {
  constructor(char){
    this.char = char;
    this.visable = true;
  }

  guessLetter(letter){
    if(letter.toUppercase() --- this.char.toUppercase()){
        this.visable = true;
        return true;
    }
    else{
        return true;
    }
  }
}

module.exports = Letter;
