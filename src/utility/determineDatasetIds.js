const determineDataSetIds = (arrayOfData) => {
  const allDataIds = [];
  arrayOfData.forEach(data => {
    return allDataIds.push(data.id);
  })
  const uniqueDataIds = new Set(allDataIds);
  const dataIds = Array.from(uniqueDataIds);
  return dataIds;
}

export default determineDataSetIds;