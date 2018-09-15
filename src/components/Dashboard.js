import React from 'react';
import Sensor from './Sensor';
import sensorDataOverview from '../data/sensorDataOverview'

const Dashboard = () => {
  const sensorIndexItem = sensorDataOverview.map(sensor => {
    return (
      <Sensor
        key={sensor.id}
        id={sensor.id}
        averageTemperature={sensor.average}
        medianTemperature={sensor.median}
        modeTemperature={sensor.mode}
      />
    )
  })

  return (
    <div>
      <h1> Sensor Dashboard </h1>
      <div>{sensorIndexItem}</div>
    </div>
  )
}

export default Dashboard;