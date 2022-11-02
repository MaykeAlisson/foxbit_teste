const { parseRoverPosition, parseGridSize } = require("../src/provider/parseInput")

test('Deve retornar um array de posicoes quando chamar parseRoverPosition', () => {
    expect(parseRoverPosition("1 2 N")).toEqual([1, 2, "N"]);
});

test('Deve retornar um array com o tamando do grid quando chamar parseGridSize', () => {
    expect(parseGridSize("5 5")).toEqual([5, 5]);
});