const prompt = require("prompt-sync")({ sigint: true });

const HAT = "^";
const HOLE = "O";
const FIELD_CHARACTER = "░";
const PATH_CHARACTER = "*";


const defaultSettings = {
    width: 16,
    height: 16,
    difficulty: 0.2
};

// const Settings = {
//     width: prompt("Enter the width of the field: "),
//     height: prompt("Enter the height of the field: "),
//     difficulty: prompt("Enter the difficulty of the game (0.1 - 0.5): "),
//   };


  const generateField = (settings = defaultSettings) => {
    const { width, height, difficulty: percentage } = settings;
    const field = new Array(height).fill(FIELD_CHARACTER).map(() => new Array(width).fill(FIELD_CHARACTER));
    const hatLocation = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
    };
    let holeCount = 0;
    while (holeCount < width * height * percentage) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        if (x !== 0 && y !== 0 && x !== hatLocation.x && y !== hatLocation.y) {
        field[y][x] = HOLE;
        holeCount++;
        }
    }
    field[0][0] = PATH_CHARACTER;
    field[hatLocation.y][hatLocation.x] = HAT;
    return field;
    };


const isWin = (field, location) => field[location.y][location.x] === HAT;
const isOutOfBounds = (field, location) => location.x < 0 || location.x >= field[0].length || location.y < 0 || location.y >= field.length;
const isHole = (field, location) => field[location.y][location.x] === HOLE;
const movePlayer = (field, location) => {
    const direction = prompt("Which way? ").toUpperCase();
    console.clear();
    switch (direction) {
        case "W":
        location.y--;
        break;
        case "S":
        location.y++;
        break;
        case "A":
        location.x--;
        break;
        case "D":
        location.x++;
        break;
        default:
        console.log("Invalid input");
        break;
    }
    if (isOutOfBounds(field, location)) {
        console.log("Out of bounds! Game over!");
        return false;
    }
    if (isHole(field, location)) {
        console.log("You fell in a hole! Game over!");
        return false;
    }
    if (isWin(field, location)) {
        console.log("You found your hat! You win!");
        return false;
    }
    field[location.y][location.x] = PATH_CHARACTER;
    return true;
};



module.exports = 
{
    generateField, 
    movePlayer,
}
