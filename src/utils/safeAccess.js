/* 
  Use this function when accessing object properties that can fail by passing through an undefined
  object or property.
  For example, if you have the object `account = {guardian: {first_name: 'John'}}`, and then try
  to access the `first_name` of the guardian, but you are no longer sure that `guardian` is defined, use
  `console.log(safeAccess(account, 'guardian.first_name'))` instead of
  `console.log(account.guardian.first_name)`
  As the latter will raise an exception. (Cannot read property 'first_name' of undefined).
  In case of failure undefined is returned if no optional param is given
*/
export const safeAccess = (
  object,
  propertyTreeAsString,
  defaultValue = undefined
) => {
  if (object === undefined || object === null) {
    return defaultValue;
  }
  if (
    propertyTreeAsString === undefined ||
    propertyTreeAsString === null ||
    propertyTreeAsString === ''
  ) {
    return object;
  }
  const propertyArr = propertyTreeAsString.split('.');
  let currProp = object;
  for (let i = 0; i < propertyArr.length; i++) {
    const property = propertyArr[i];
    currProp = currProp[property];
    if (currProp === undefined || currProp === null) return defaultValue;
  }
  return currProp;
};

// sa is an alias of safeAccess.
export const sa = (object, propertyTreeAsString, defaultValue) =>
  safeAccess(object, propertyTreeAsString, defaultValue);
