import React from 'react'
import { Row, Col, CardText } from 'reactstrap'

const Data = ({ title, data }) => {

  return (
    <Row>
      <Col xs="5">
        <CardText className="data-info-text data-info-title text-headers">
          {title}
        </CardText>
      </Col>
      <Col xs="7">
        <CardText className="data-info-text data-info-value">
          {data}
        </CardText>
      </Col>
    </Row>
  )
}

export default Data;