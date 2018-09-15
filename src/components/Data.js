import React from 'react'
import { Row, Col } from 'reactstrap'

const Data = ({ title, data }) => {
  return (
    <Row>
      <Col xs="4">
        <p>Icon</p>
      </Col>
      <Col xs="4">
        <p>{title}</p>
      </Col>
      <Col xs="4">
        <p>{data}</p>
      </Col>
    </Row>
  )
}

export default Data;