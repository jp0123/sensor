import React from 'react'
import { Col } from 'reactstrap';
import Data from './Data';

const Sensor = ({ id, averageTemperature, medianTemperature, modeTemperature }) => {
  const sensorId = `Sensor ${id}`
  return (
    <Col md="4" sm="12">
      <h1 className="text-center">{sensorId}</h1>
      <Data title="Average temperature" data={averageTemperature} />
      <Data title="Median temperature" data={medianTemperature} />
      <Data title="Mode temperature" data={modeTemperature} />
    </Col>
  )
}

export default Sensor