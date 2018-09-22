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
let sensorDataOverview = []; // Contains each sensor's id, average, median and mode values
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

sensorDataOverview = sortSensorDataOverviewByPriority(sensorDataOverview);

function sortSensorDataOverviewByPriority(arrayOfSensors) {
  const sortedArray = arrayOfSensors.sort((a, b) => {
    const prioritySensors = ["c", "a", "b"];
    const prioritySensorsArrayLength = prioritySensors.length; // Required to ensure sorting continues to work if more priority sensors are added to the list
    const sensorA = a.id;
    const sensorB = b.id;
    let priorityLevelA = prioritySensors.indexOf(sensorA);
    let priorityLevelB = prioritySensors.indexOf(sensorB);

    // indexOf() returns -1 if element is not found in array. This affects .sort().
    if (priorityLevelA === -1) { priorityLevelA = prioritySensorsArrayLength; };
    if (priorityLevelB === -1) { priorityLevelB = prioritySensorsArrayLength; };
    // Sorting procedure
    if (priorityLevelA < priorityLevelB) { return -1 };
    if (priorityLevelA > priorityLevelB) { return 1 };
    return 0;
  });
  return sortedArray;
}

export default sensorDataOverview;