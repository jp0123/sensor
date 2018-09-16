import calculateMode from "../calculateMode";

const arrayOfData1 = [1, 2, 3, 3];
const answer1 = [3];
test('calculates mode of [1, 2, 3, 3] to equal [3]', () => {
  expect(calculateMode(arrayOfData1)).toEqual(answer1);
});

const arrayOfData2 = [1, 2, 2, 3, 3];
const answer2 = [2, 3];
test('calculates mode of [1, 2, 2, 3, 3] to equal [2, 3]', () => {
  expect(calculateMode(arrayOfData2)).toEqual(answer2);
});

const arrayOfData3 = [1, 2, 3];
const answer3 = [];
test('calculates mode of [1, 2, 3] to equal []', () => {
  expect(calculateMode(arrayOfData3)).toEqual(answer3);
});