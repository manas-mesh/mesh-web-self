import { oldTheme } from 'themes/oldTheme';

interface ColorCodedDateI {
  timeStamp: number;
  color: string;
  reason: string;
  isCrossed: boolean;
}

export default class ColorCodedDate {
  timeStamp: number;
  color: string;
  reason: string;
  isCrossed: boolean;

  constructor({ timeStamp, color, reason, isCrossed = false }: ColorCodedDateI) {
    // should have received timestamp as variable.
    this.timeStamp = timeStamp;
    this.color = color;
    this.reason = reason;
    this.isCrossed = isCrossed;
  }

  static fromJSON({ timeStamp, color, reason, isCrossed }: ColorCodedDateI) {
    return new ColorCodedDate({
      timeStamp,
      color: getColorCode(color),
      reason: reason || '',
      isCrossed: isDateCrossed(color) || isCrossed,
    });
  }
}

function isDateCrossed(color: string) {
  // this logic needs to fixed with backend. otherwise going forward it will be chaos.
  return String(color).endsWith('_CROSSED') || String(color).startsWith('DARK_');
}

function getColorCode(color: string) {
  switch (color) {
    case 'GREEN':
    case 'GREEN_CROSSED':
    case 'DARK_GREEN':
      return oldTheme.palette.green.main;

    case 'GREY':
    case 'GREY_CROSSED':
    case 'DARK_GREY':
      return oldTheme.palette.grey.dark;

    case 'LIGHT_GREY':
      return oldTheme.palette.grey.main;

    case 'RED':
    case 'RED_CROSSED':
    case 'DARK_RED':
      return oldTheme.palette.red.main;

    case 'BLUE':
      return oldTheme.palette.primary.main;
    case 'DARK_BLUE':
      return oldTheme.palette.primary.main;

    case 'ORANGE':
      return oldTheme.palette.orange.main;

    default:
      return null;
  }
}

/* 
- actual date,
- color of text and background color,
- reason of that color,
- isCrossed, means changeable or not.

*/
