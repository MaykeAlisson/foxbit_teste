const Rover = require("../src/model/Rover");

test('Deve testar rotacao para esquerda', () => {
    var rover = new Rover("rover1", 1, 1, "N")
    rover.turn("L");
    expect(rover.facing).toEqual("W");
});

test('Deve testar rotacao para direira', () => {
    var rover = new Rover("rover1", 1, 1, "S")
    rover.turn("R");
    expect(rover.facing).toEqual("W");
});

test('Deve testar multiplas rotacao para esquerda', () => {
    var rover = new Rover("rover1", 1, 1, "N")
    rover.turn("LLLL");
    expect(rover.facing).toEqual("N");
});

test('Deve testar multiplas rotacao para direita', () => {
    var rover = new Rover("rover1", 1, 1, "N")
    rover.turn("RRRR");
    expect(rover.facing).toEqual("N");
});

test('Deve testar movimentacao para frente', () => {
    var rover = new Rover("rover1", 1, 2, "N")
    rover.moveForward("M");
    expect(rover.position).toEqual([1, 3]);
});

test('Deve testar a movimentacao do robo quando passado informado a direcao infrente corretamente', () => {
    var rover = new Rover("rover1", 1, 2, "N")
    rover.setPath("LMLMLMLMM");
    rover.initMission();
    expect(rover.facing).toEqual("N");
});

test('Deve testar o posicionamento correto do robo quando a direcao e passada corretamente', () => {
    var rover = new Rover("rover1", 1, 2, "N")
    rover.setPath("LMLMLMLMM");
    rover.initMission();
    expect(rover.position).toEqual([1, 3]);
});