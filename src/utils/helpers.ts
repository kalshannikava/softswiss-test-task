import { breakpoints } from '../constants/ui';

export const getScreenSize = (width: number): 'small' | 'medium' | 'large' => {
  if (width <= breakpoints.small) return 'small';
  else if (width <= breakpoints.medium) return 'medium';
  else return 'large';
};
