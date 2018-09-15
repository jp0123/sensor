import React from 'react';
import Sensor from './Sensor';
import sensorDataOverview from '../data/sensorDataOverview'
import { Container, Row } from 'reactstrap';

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
    <Container>
      <h1 className="text-center"> Sensor Dashboard </h1>
      <Row>
        {sensorIndexItem}
      </Row>
    </Container>
  )
}

export default Dashboard;