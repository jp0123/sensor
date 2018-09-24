import React from 'react';
import {
  Col, Card, Button, CardHeader, CardBody,
  CardTitle
} from 'reactstrap';
import Data from './Data';
import "./css/Sensor.css";

const Sensor = ({ id, averageTemperature, medianTemperature, modeTemperature }) => {
  const sensorId = `Sensor ${id}`;
  const infoTypeTemperature = `Temperature`;
  const infoTitleAverage = `Average`;
  const infoTitleMedian = `Median`;
  const infoTitleMode = `Mode`;
  const cardButtonTitle = `Details`

  return (
    <Col md="4" sm="12">
      <Card className="sensor-card">
        <CardHeader tag="h3" className="text-headers text-center sensor-header">{sensorId}</CardHeader>
        <CardBody>
          <CardTitle className="text-headers sensor-info-title">{infoTypeTemperature}</CardTitle>
          <Data title={infoTitleAverage} data={averageTemperature} />
          <Data title={infoTitleMedian} data={medianTemperature} />
          <Data title={infoTitleMode} data={modeTemperature} />
          <div className="sensor-button-container">
            <Button className="sensor-details-button">{cardButtonTitle}</Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Sensor