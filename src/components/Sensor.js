import React from 'react'

const Sensor = ({ id, averageTemperature, medianTemperature, modeTemperature }) => {

  const sensorId = `Sensor ${id}`
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