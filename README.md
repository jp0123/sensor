# Sensor Dashboard

A dashboard that displays an overview of sensor information. Specifically, temperature average, median, and mode are rendered.

The sensors collect temperature data from fridges in supermarkets.

![Sensor Dashboard](/public/images/sensor_dashboard.png)

# Table Of Contents
* [Overview](#overview)
* [Application Setup](#application-setup)
* [Application Testing](#application-testing)
* [Application](#application)
  * [App flow](#app-flow)
  * [Data](#data)
  * [Utility functions](#utility-functions)
* [Documentation](#documentation)
  * [Assumptions](#assumptions)
  * [Design decisions](#design-decisions)
* [Resources](#resources)


## Overview

Create an application that outputs the average, median and mode temperature for each fridge sensor to 2 decimal places in the following JSON format:

```
[{"id":"c","average":3.72,"median":3.95,"mode":[3.36,3.96]}, {"id":"a","average":3.78,"median":3.65,"mode":[3.53]}, {"id":"b","average":4.08,"median":4.14,"mode":[4.15]}]
```
## Implementation Guidelines
* Implement a runnable solution that meets the requirements
* Implement the mean, mode and average yourself (don’t use a library)
* Provide instructions on how to run your application
* Provide instructions on how to test your application
* Document any assumptions you made
* Document important design decisions and trade-offs

# Application Setup

To set up and run the application please:
1. Clone or download the repository.
2. `npm install` in the root directory to download dependencies.
3. `npm run start` in the root directory to run the app locally (localhost:3000).

Note: no environment variables are required.

# Application Testing

To run tests on the application please:
* `npm run test` in the root directory

Jest tests have been set up for the utility functions. 

# Application

## App Flow
The application receives a dataset containing information from multiple sensors in a single an array of objects.

The application will output a newly created dataset organised by sensor ID. Each object in the array contains the following information: average, median, and mode temperatures.

This sensor information is then displayed on the dashboard.

## Data
### Original dataset
The original data provided by SafetyCulture was placed in a [javascript file](./src/data/sensorData.js).

From this file I have filtered the original dataset to create individual datasets (arrays) that are specific to each sensor ID.

These sensor ID specific arrays were then exported to be used in the rest of the application.

### Modified dataset

The modified dataset in JSON format as specified in the overview has been completed in [sensorDataOverview.js](./src/data/sensorDataOverview.js).

An array that contains each sensor's average, median, and mode temperatures is exported from the above file. Utility functions were used. Please see below.

## Utility functions

The following utility functions were manually created to determine the average, median, and mode temperatures from the dataset. 
* [calculateAverage](./src/utility/calculateAverage.js)
* [calculateMedian](./src/utility/calculateMedian.js)
* [calculateMode](./src/utility/calculateMode.js)
* [determineDataSetIds](./src/utility/determineDataSetIds.js)
* [generateTemperaturesArray](./src/utility/generateTemperaturesArray.js)

# Documentation

## Assumptions
1. While the original dataset was hardcoded and expected to be read via a file, this application can easily be refactored to execute a HTTP request to SafetyCulture's sensor API. The dataset can be saved to state and relevant data can be passed via props.
2. The temperature data will be given in the correct format (e.g. degrees celsius).
3. Sensors will/can capture other data. The app was build and structured in such a way that new components can be easily rendered to account for new/other data.
4. Sensors may capture data other than temperature that require the calculation of averages, medians, and modes. Therefore utility functions were created instead. 

## Design decisions

### Style guide
The overall design of the application was inspired by and deliberately followed to SafetyCulture's style guide and standards (design.safetyculture.io/).

### Approach
My strategy involved defining the overall problem and scope and then breaking it down into smaller prioritised tasks to work on. I implemented agile methodology into my work. 

#### A breakdown of my initial strategy:
1. Create individual arrays for each sensor by id
	* Each element of the array will contain the timestamp and temperature of the said sensor.
2. For each individual sensor array
	* Collect all temperature values, in preparation for applying calculations.
	* Store the length of the array, in preparation for applying calculations.
3. Temperature Information | Calculation
	* Create utility functions
		1. Average
		2. Median
		3. Mode
	* Execute functions
		* Invoke each function to the array of temperatures to obtain the desired data.
4. Create and store the sensor’s new data in JSON format.
5. Merge all sensor data into a single data structure in JSON format as requested.
6. Render sensor information to a dashboard.

E.g. The trello board at one point in time:
![Trello](/public/images/trello.png)

### Responsive design
SafetyCulture is a mobile application driven company and their customers use their smartphones to use the products. 
Therefore, this application was build to be responsive so users can check sensor data on their smartphones. 

### Utility functions
As mentioned earlier, to keep this application's codebase efficient and to uphold the principle of DRY, a utility folder containing functions that have useful and general functionality, can be used across the application.

### React
React was used in conjunction with JavaScript to build this application. React was chosen because it is a great JavaScript library for building user interfaces. 

Specifically, within the scope of this application, the components and props, enable effective and efficient rendering of the dataset. Furthermore, by reusing components, this can assist in designing for scalability. 

Although, this was not a requirement, I wanted to build an application that could potentially be used by users. Therefore, a simple MVP was built. 

### Notes
Within the application, I tried to apply "self documenting" code as much as possible, so other develoeprs can easily and quickly understand it and further develop it if needed. On top of this, it keeps the application clean and efficient. In areas that I felt could use a little more explanation, comments were left. 

The buttons on the sensor cards serve no functionality at the moment. In the future, they are intended to show details of the specific sensor in greater detail. For now, they are there as a visual aid.

### Dependencies
This application uses Bootstrap and Reactstrap. They were used to build a great user interface that is also responsive. 

As requested, no dependencies were used for calculating the average, median, and mode temperatures. 

No other dependencies were used to keep this application as independent and robust as possible and to not use modules for the sake of doing so. 

## Resources

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">MDN | Objects</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">MDN | Arrays</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" target="_blank">MDN | Array Map</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">MDN | Array Filter</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">MDN | Array Reduce</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" target="_blank">MDN | Array.from()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" target="_blank">MDN | Set</a>
* <a href="https://reactjs.org/" target="_blank">React | ReactJS</a>
* <a href="https://github.com/facebook/create-react-app" target="_blank">React | create-react-app</a>
