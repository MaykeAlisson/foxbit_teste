const fs = require('fs');
const Rover = require('./src/model/Rover');
const Mars = require('./src/model/Mars');

if (process.argv.length != 3) {
    console.error("Informe o arquivo de entrada")
    process.exit(1);
};

const inputs = fs.readFileSync(process.argv[2], 'utf8');
const commands = inputs.split("\n");

const gridSize = parseGridSize(commands[0]);
console.log("A primeira linha com as cordenadas e: " + gridSize);
const mars = new Mars(gridSize[0], gridSize[1]);

const rover1Position = parseRoverPosition(commands[1]);
const rover1 = new Rover("Robo 1", rover1Position[0], rover1Position[1], rover1Position[2]);
rover1.setPath(commands[2]);

const rover2Position = parseRoverPosition(commands[3]);
const rover2 = new Rover("Robo 2", rover2Position[0], rover2Position[1], rover2Position[2]);
rover2.setPath(commands[4]);

mars.addRover(rover1);
mars.addRover(rover2);
mars.init();

function parseGridSize(command) {
    const gridTextArr = command.split(" ");
    return [parseInt(gridTextArr[0]), parseInt(gridTextArr[1])];
}

function parseRoverPosition(command) {
    const sP = command.split(" ");
    return [parseInt(sP[0]), parseInt(sP[1]), sP[2]];
}