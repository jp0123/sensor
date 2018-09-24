import determineDataSetIds from "../determineDataSetIds";

const arrayOfData = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "b" }, { id: "c" }, { id: "c" }, { id: "c" }];

const arrayOfIds = ["a", "b", "c"];

test('returns an array of ids equal to ["a", "b", "c"] ', () => {
  expect(determineDataSetIds(arrayOfData)).toEqual(arrayOfIds);
});