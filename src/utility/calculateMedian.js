const calculateMedian = (arrayOfData) => {
  // Sort array
  const orderedArray = arrayOfData.sort((a, b) => {
    if (a < b) { return -1 };
    if (a > b) { return 1 };
    return 0;
  });
  // Calculate median value based on even or odd length of array
  const numberOfDataEntries = orderedArray.length
  const middlePoint = numberOfDataEntries / 2;
  const arrayLengthEven = numberOfDataEntries % 2 === 0;
  let medianValue;
  if (arrayLengthEven) {
    medianValue = medianCalculationForEvenArray(orderedArray, middlePoint);
  } else {
    medianValue = medianCalculationForOddArray(orderedArray, middlePoint);
  };
  return medianValue;
}

const medianCalculationForEvenArray = (sortedArray, middlePoint) => {
  const medianValue = (sortedArray[middlePoint] + sortedArray[middlePoint - 1]) / 2;
  return medianValue.toFixed(2);
}

const medianCalculationForOddArray = (sortedArray, middlePoint) => {
  const middlePointValue = Math.floor(middlePoint);
  const medianValue = sortedArray[middlePointValue];
  return medianValue.toFixed(2);
}

export default calculateMedian;