const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(
    field = [
      ["*", "░", "O"],
      ["░", "O", "░"],
      ["░", "^", "░"],
    ]
  ) {
    this.field = field;
  }
  print() {
    this.field.map((row) => console.log(row.join("")));
  }
}
const myField = new Field();
myField.print();
