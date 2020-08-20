import "lodash";

function clone(source) {
  return cloneDeep(source)
}

const obj = {a: 1}
const clonedObj = clone(obj)
console.log(clonedObj, clonedObj === obj)

