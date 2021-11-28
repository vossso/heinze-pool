const getArrayIds = (array) => {
  let newArray = [];

  array.map((element, index) => {
    newArray.push({ ...element, id: index });
  });
  console.log(newArray);
  return newArray;
};
export default getArrayIds;
