import React, { Component } from 'react';
import Sensor from './Sensor';
import { sensorA, sensorB, sensorC } from '../data/sensorData';
class Dashboard extends Component {

  render() {
    return (
      <div>
        <h1> Sensor Dashboard </h1>
        <Sensor data={sensorA} />
        <Sensor data={sensorB} />
        <Sensor data={sensorC} />
      </div>
    )
  }
}

export default Dashboard;