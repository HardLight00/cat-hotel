import { IconName, Size } from '@/types';
import * as icons from '@/assests/icons';

// @ts-ignore
export const mapIconName = (name: IconName) => icons[`${name[0].toLocaleUpperCase()}${name.slice(1)}Icon`];

export const mapIconSize = (size: Size): number => {
  switch (size) {
    case 'xs':
      return 16;
    case 's':
      return 24;
    case 'm':
      return 32;
    case 'l':
      return 64;
    default:
      return +size || 0;
  }
}
