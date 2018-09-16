import React from 'react'
import {
  Col, Card, Button, CardHeader, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import Data from './Data';

const Sensor = ({ id, averageTemperature, medianTemperature, modeTemperature }) => {
  const sensorId = `Sensor ${id}`;
  const infoType = `Temperature`;
  const infoTitleAverage = `Average`;
  const infoTitleMedian = `Median`;
  const infoTitleMode = `Mode`;

  return (
    <Col md="4" sm="12">
      <Card className="sensor-card">
        <CardHeader tag="h3" className="text-headers text-center">{sensorId}</CardHeader>
        <CardBody>
          <CardTitle>{infoType}</CardTitle>
          <CardText>
            <Data title={infoTitleAverage} data={averageTemperature} />
          </CardText>
          <CardText>
            <Data title={infoTitleMedian} data={medianTemperature} />
          </CardText>
          <CardText>
            <Data title={infoTitleMode} data={modeTemperature} />
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