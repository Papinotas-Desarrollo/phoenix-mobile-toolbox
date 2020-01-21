
/**
 * @param {Object} object Object input
 * @param {string} propertyTreeAsString Property depth 
 * @param {any} defaultValue Return value if property not found
 * @description Use this function when accessing object properties that can fail by passing through an undefined
    object or property.
    For example, if you have the object `account = {guardian: {first_name: 'John'}}`, and then try
    to access the `first_name` of the guardian, but you are no longer sure that `guardian` is defined, use
    `console.log(safeAccess(account, 'guardian.first_name'))` instead of
    `console.log(account.guardian.first_name)`
    As the latter will raise an exception. (Cannot read property 'first_name' of undefined).
    In case of failure undefined is returned if no optional param is given
 */
export declare function sa(object: Object, propertyTreeAsString: string, defaultValue: Object): any;
