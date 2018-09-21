import data from "./sensorData";
import Sensor from "../classes/Sensor";
import determineDataSetIds from "../utility/determineDataSetIds";
import calculateAverage from "../utility/calculateAverage";
import calculateMedian from "../utility/calculateMedian";
import calculateMode from "../utility/calculateMode";
import generateTemperaturesArray from "../utility/generateTemperaturesArray";

// Organise data set by sensor ID
const sensorDataById = []; // Contains an array of objects that contain sensor id specific data
const sensorIds = determineDataSetIds(data); // Array of unique ids
sensorIds.forEach(id => {
  const sensorData = data.filter(sensor => {
    return sensor.id === id;
  })
  sensorDataById.push(sensorData);
});

// Output sensor overview 
const sensorDataOverview = []; // Contains each sensor's id, average, median and mode values
sensorDataById.forEach(sensor => {
  const sensorId = sensor[0].id;
  const temperatures = generateTemperaturesArray(sensor);
  sensorDataOverview.push(new Sensor(
    sensorId,
    calculateAverage(temperatures),
    calculateMedian(temperatures),
    calculateMode(temperatures)
  ));
})

export default sensorDataOverview;