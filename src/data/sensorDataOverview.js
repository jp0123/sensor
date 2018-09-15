import { sensorA, sensorB, sensorC } from "./sensorData";
import calculateAverage from "../utility/calculateAverage";
import calculateMedian from "../utility/calculateMedian";
import calculateMode from "../utility/calculateMode";
import generateTemperaturesArray from "../utility/generateTemperaturesArray";

const sensorDataOverview = [];

// Sensor A
const sensorAData = {};
const temperatureDataSensorA = generateTemperaturesArray(sensorA)
sensorAData.id = sensorA[0].id;
sensorAData.average = calculateAverage(temperatureDataSensorA);
sensorAData.median = calculateMedian(temperatureDataSensorA);
sensorAData.mode = calculateMode(temperatureDataSensorA);

// Sensor B
const sensorBData = {};
const temperatureDataSensorB = generateTemperaturesArray(sensorB)
sensorBData.id = sensorB[0].id;
sensorBData.average = calculateAverage(temperatureDataSensorB);
sensorBData.median = calculateMedian(temperatureDataSensorB);
sensorBData.mode = calculateMode(temperatureDataSensorB);

// Sensor C
const sensorCData = {};
const temperatureDataSensorC = generateTemperaturesArray(sensorC)
sensorCData.id = sensorC[0].id;
sensorCData.average = calculateAverage(temperatureDataSensorC);
sensorCData.median = calculateMedian(temperatureDataSensorC);
sensorCData.mode = calculateMode(temperatureDataSensorC);

// Create modified sensor data
sensorDataOverview.push(sensorCData, sensorAData, sensorBData);

export default sensorDataOverview;