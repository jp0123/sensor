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
    <div>
      <div className="dashboard-header">
        <h1 className="text-center text-headers"> Sensor Dashboard </h1>
      </div>
      <Container>
        <Row>
          {sensorIndexItem}
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard;