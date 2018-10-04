// function findMax(arr) {
//   return Math.max(...arr);
// }
//
// function findMin(arr) {
//   return Math.min(...arr);
// }
//
// function checksum(data) {
//   let diffArr = data.map(arr => (findMax(arr) - findMin(arr)))
//   return diffArr.reduce(((acc, curr) => acc + curr), 0)
// }


function checksum(nestedArr) {
  return nestedArr.reduce((sum, innerArr) => {
    return sum + Math.max(...innerArr) - Math.min(...innerArr);
  }, 0)
}
