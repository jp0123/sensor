import React from 'react'
import calculateAverage from '../utility/calculateAverage';

const Sensor = data => {
  const sensorDataById = data.data;
  const sensorId = `Sensor ${sensorDataById[0].id}`
  const temperatureArray = [];
  sensorDataById.forEach(element => {
    temperatureArray.push(element.temperature);
  })
  const averageTemperature = calculateAverage(temperatureArray);

  return (
    <div>
      <h1>{sensorId}</h1>
      <h2>Average Temperature: {averageTemperature}</h2>
    </div>
  )
}

export default Sensor