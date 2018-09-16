import calculateMedian from "../calculateMedian";

const arrayOfData = [1, 2, 3, 4, 5];

test('calculates median value of 1-5 to equal 3', () => {
  expect(calculateMedian(arrayOfData)).toEqual(3);
});