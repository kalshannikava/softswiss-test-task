import { breakpoints } from '../constants/ui';

/**
 * 
 * @param {number} width Screen's width.
 * @returns {String} String representation of screen's width.
 */
export const getScreenSize = (width: number): 'small' | 'medium' | 'large' => {
  if (width <= breakpoints.small) return 'small';
  else if (width <= breakpoints.medium) return 'medium';
  else return 'large';
};
