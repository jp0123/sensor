const generateTemperaturesArray = (arrayOfData) => {
  const temperaturesArray = [];
  arrayOfData.forEach(data => {
    const temperature = (data.temperature).toFixed(2);
    temperaturesArray.push(Number(temperature));
  });
  return temperaturesArray;
}

export default generateTemperaturesArray;