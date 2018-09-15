import React from 'react'
import { Row, Col } from 'reactstrap';
import Data from './Data';

const Sensor = ({ id, averageTemperature, medianTemperature, modeTemperature }) => {
  const sensorId = `Sensor ${id}`
  return (
    <Col md="4" sm="12">
      <h1 className="text-center">{sensorId}</h1>
      <Data title="Average" data={averageTemperature} />
      <Data title="Median" data={medianTemperature} />
      <Data title="Mode" data={modeTemperature} />
    </Col>
  )
}

export default Sensor