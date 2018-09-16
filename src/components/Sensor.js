import React from 'react'
import {
  Col, Card, Button, CardHeader, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import Data from './Data';

const Sensor = ({ id, averageTemperature, medianTemperature, modeTemperature }) => {
  const sensorId = `Sensor ${id}`
  const infoType = `Temperature`
  return (
    <Col md="4" sm="12">
      <Card>
        <CardHeader tag="h3" className="text-headers text-center">{sensorId}</CardHeader>
        <CardBody>
          <CardTitle>{infoType}</CardTitle>
          <CardText>
            <Data title="Average" data={averageTemperature} />
          </CardText>
          <CardText>
            <Data title="Median" data={medianTemperature} />
          </CardText>
          <CardText>
            <Data title="Mode" data={modeTemperature} />
          </CardText>
          <div className="sensor-button-container">
            <Button className="sensor-details-button">Details</Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Sensor