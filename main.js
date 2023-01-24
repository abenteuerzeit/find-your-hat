const { generateField, movePlayer } = require("./util");
class Field {
  constructor(field = generateField()) {
    this.field = field;
    this.PlayerLocation = { x: 0, y: 0 };
  }
  print() {
    this.field.map((row) => console.log(row.join("")));
  }
  playGame(){
    console.log("Welcome to Find Your Hat! (Press Ctrl + C to quit the game.)");
    console.log("Use WASD and Enter to move around the field. (W = Up, A = Left, S = Down, D = Right);");
    let playing = true;
    while (playing) {
      this.print();
      playing = movePlayer(this.field, this.PlayerLocation);
    }
  }
}
const myField = new Field();
myField.playGame();
