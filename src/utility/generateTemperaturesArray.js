const generateTemperaturesArray = (arrayOfData) => {
  const temperaturesArray = [];
  arrayOfData.forEach(data => {
    temperaturesArray.push(data.temperature);
  });
  return temperaturesArray;
}

export default generateTemperaturesArray;