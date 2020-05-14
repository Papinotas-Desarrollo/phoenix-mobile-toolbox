/**
 * 
 * @param logObject Object with restrictions to evaluate over the app
 * @param name The name of the path of the object
 * @param cb The function to be called if log is active
 * 
 * Example:
 * 
 * const logObject = {
 *  SCREEN_1: false,
 *  SCREEN_2: {
 *    FUNCTION_1: true,
 *    FUNCTION_2: false,
 *  }
 * };
 * 
 * ------
 * 
 * showLog(logObject, 'SCREEN_1', () => console.log("I will never be called"))
 * showLog(logObject, 'SCREEN_2.FUNCTION_1', () => console.log("I will be called"))
 * showLog(logObject, 'SCREEN_2.FUNCTION_2', () => console.log("I will never be called"))
 */

export declare function showLog(logObject: Object, name?: String, cb?: Function): any;