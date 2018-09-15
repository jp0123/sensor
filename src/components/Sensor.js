import React from 'react'
import { Col } from 'reactstrap';

const Sensor = ({ id, averageTemperature, medianTemperature, modeTemperature }) => {

  const sensorId = `Sensor ${id}`
  return (
    <Col sm="12" md="4">
      <h1 className="text-center">{sensorId}</h1>
      <p>Average Temperature: {averageTemperature}</p>
      <p>Median Temperature: {medianTemperature}</p>
      <p>Mode Temperature: {modeTemperature}</p>
    </Col>
  )
}

export default Sensor