const calculateMode = (arrayOfData) => {
  // Determine data repetition
  const counter = {};
  arrayOfData.forEach(data => {
    counter[data] = (counter[data] || 0) + 1
  });

  const modeValues = [];
  const counterValues = Object.values(counter);
  const highestValue = Math.max(...counterValues);

  // Push object keys that match the highest value in an array
  if (highestValue > 1) { // Execute only if data repeats
    for (let key in counter) {
      if (counter[key] === highestValue) {
        modeValues.push(key);
      }
    }
  }
  return modeValues
}

export default calculateMode;