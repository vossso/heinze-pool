const getArrayIds = (array) => {
  let newArray = [];

  array.map((element, index) => {
    newArray.push({ ...element, id: index });
  });
  return newArray;
};
export default getArrayIds;
