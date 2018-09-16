import generateTemperaturesArray from "../generateTemperaturesArray";

const arrayOfData = [{ temperature: 10.0 }, { temperature: 10.00 }, { temperature: 10.000 }];

const temperaturesArray = [10, 10, 10];

test('generate an array of temperature values to equal [10, 10, 10]', () => {
  expect(generateTemperaturesArray(arrayOfData)).toEqual(temperaturesArray);
});

