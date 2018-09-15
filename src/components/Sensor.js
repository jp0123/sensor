import React from 'react'

const Sensor = data => {
  const sensorDataById = data.data;
  const sensorId = sensorDataById[0].id
  const numberOfSensorDataEntries = sensorDataById.length;
  const temperatureArray = [];
  sensorDataById.forEach(element => {
    temperatureArray.push(element.temperature);
  })

  return (
    <div>
      <h1> Sensor </h1>
    </div>
  )
}

export default Sensor