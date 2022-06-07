//regular expression to check if a textinput is a valid number (includes negative,positive,decimal numbers)
export const isValidNumberRegExp: RegExp = /^-?\d*\.?\d{0,6}$/;

export const noOp = () => {};
export type noOpType = typeof noOp;
