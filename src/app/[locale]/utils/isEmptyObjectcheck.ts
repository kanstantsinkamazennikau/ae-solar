export default function isEmptyObjectCheck(obj: { [key: string]: any }) {
  for (let key in obj) {
    if (obj[key] instanceof Object === true) {
      if (isEmptyObjectCheck(obj[key]) === false) return false;
    } else if (obj[key].length !== 0) return false;
  }
  return true;
}
