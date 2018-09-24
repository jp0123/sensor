import React from 'react';
import { Row, Col, CardText } from 'reactstrap';
import "./css/Data.css";

const Data = ({ title, data }) => {

  let modifiedArrayData;
  if (Array.isArray(data)) {
    if (data.length > 1) {
      modifiedArrayData = data.join(', ')
      data = false;
    }
  }

  return (
    <Row>
      <Col xs="5">
        <CardText className="data-info-text data-info-title text-headers">
          {title}
        </CardText>
      </Col>
      <Col xs="7">
        <CardText className="data-info-text data-info-value">
          {data || modifiedArrayData}
        </CardText>
      </Col>
    </Row>
  )
}

export default Data;