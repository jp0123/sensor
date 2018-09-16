import calculateAverage from "../calculateAverage";

const arrayOfData = [1, 2, 3, 4, 5];

test('calculates average value of 1-5 to equal 3', () => {
  expect(calculateAverage(arrayOfData)).toEqual(3);
});