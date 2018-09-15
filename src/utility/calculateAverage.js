
const calculateAverage = (arrayOfData) => {
  const sumOfData = arrayOfData.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
  const numberOfDataEntries = arrayOfData.length;
  const averageValue = (sumOfData / numberOfDataEntries);
  return averageValue.toFixed(2);
}

export default calculateAverage;