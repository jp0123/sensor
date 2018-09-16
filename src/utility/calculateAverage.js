const calculateAverage = (arrayOfData) => {
  const sumOfData = arrayOfData.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
  const numberOfDataEntries = arrayOfData.length;
  const averageValue = (sumOfData / numberOfDataEntries).toFixed(2);
  return Number(averageValue);
}

export default calculateAverage;