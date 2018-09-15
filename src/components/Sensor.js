import React from 'react'
import calculateAverage from '../utility/calculateAverage';
import calculateMedian from '../utility/calculateMedian';
import calculateMode from '../utility/calculateMode';

const Sensor = data => {
  const sensorDataById = data.data;
  const sensorId = `Sensor ${sensorDataById[0].id}`
  const temperatureArray = [];
  sensorDataById.forEach(element => {
    temperatureArray.push(element.temperature);
  })
  const averageTemperature = calculateAverage(temperatureArray);
  const medianTemperature = calculateMedian(temperatureArray);
  const modeTemperature = calculateMode(temperatureArray);

  return (
    <div>
      <h1>{sensorId}</h1>
      <h2>Average Temperature: {averageTemperature}</h2>
      <h2>Median Temperature: {medianTemperature}</h2>
      <h2>Mode Temperature: {modeTemperature}</h2>
    </div>
  )
}

export default Sensor