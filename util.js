// Character constants
const HAT = "^";
const HOLE = "O";
const FIELD_CHARACTER = "░";
const PATH_CHARACTER = "*";

const Settings = {
    width: 16,
    height: 16,
    difficulty: 0.2
};

function generateField(settings = Settings){
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

module.exports = 
{
    generateField 
}
