/**
 * Common event handler function
 * @param {Function} eventHandler any event handler like onclickhandler, etc
 * @param {Array} args arguments to be added to the event handler function
 */
//example usage

// const textInputChange(value):void=>{
// console.log(value)
// }
// const textInputHandler = (e): void => {
//     commonInputHandler(textInputChange, [e.target.value]);
//   };
export const commonInputHandler = (eventHandler?: Function, args?: any[]): void => {
  if (eventHandler) eventHandler.apply(this, args);
};
