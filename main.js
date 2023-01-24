const prompt = require("prompt-sync")({ sigint: true });
const { generateField } = require("./util");
class Field {
  constructor(field = generateField()) {
    this.field = field;
  }
  print() {
    this.field.map((row) => console.log(row.join("")));
  }
}
const myField = new Field();
myField.print();
