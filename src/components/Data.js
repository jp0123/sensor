import React from 'react';
import { Row, Col, CardText } from 'reactstrap';
import "./css/Data.css";

const Data = ({ title, data }) => {
  let modifiedArrayData;
  let dataTitle = title;
  let dataValue = data;

  if (Array.isArray(data)) {
    const arrayOfData = dataValue;
    if (arrayOfData.length > 1) {
      modifiedArrayData = arrayOfData.join(', ')
      dataValue = false;
    }
  }

  return (
    <Row>
      <Col xs="5">
        <CardText className="data-info-text data-info-title text-headers">
          {dataTitle}
        </CardText>
      </Col>
      <Col xs="7">
        <CardText className="data-info-text data-info-value">
          {dataValue || modifiedArrayData}
        </CardText>
      </Col>
    </Row>
  )
}

export default Data;