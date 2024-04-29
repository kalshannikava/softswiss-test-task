import space1Lg from './assets/images/space1-lg.png';
import space1Sm from './assets/images/space1-sm.png';
import space2Lg from './assets/images/space2-lg.png';
import space2Md from './assets/images/space2-md.png';
import space2Sm from './assets/images/space2-sm.png';
import space3Lg from './assets/images/space3-lg.png';
import space3Md from './assets/images/space3-md.png';
import space3Sm from './assets/images/space3-sm.png';
import space4Lg from './assets/images/space4-lg.png';
import space4Sm from './assets/images/space4-sm.png';

export const cards: {
  id: number,
  title: string,
  description: string,
  backgroundL: string,
  backgroundM: string,
  backgroundS: string,
  classNames: string,
  titleSize: 'large' | 'small',
}[] = [
  {
    id: 1,
    title: 'Move the borders of reality!',
    description: 'Go on a space adventure',
    backgroundL: space1Lg,
    backgroundM: space1Lg,
    backgroundS: space1Sm,
    classNames: 'col-sm-8 col-md-6 col-lg-12',
    titleSize: 'large',
  },
  {
    id: 2,
    title: 'Space is not just stars and planets',
    description: 'it is a majestic journey to',
    backgroundL: space2Lg,
    backgroundM: space2Md,
    backgroundS: space2Sm,
    classNames: 'col-sm-8 col-md-6 col-lg-6',
    titleSize: 'small',
  },
  {
    id: 3,
    title: 'For those who dream of stars',
    description: 'Our offer: make your dream come true',
    backgroundL: space3Lg,
    backgroundM: space3Md,
    backgroundS: space3Sm,
    classNames: 'col-sm-8 col-md-6 col-lg-6',
    titleSize: 'small',
  },
  {
    id: 4,
    title: 'Fulfill your fantastic dreams',
    description: 'Space has never been so close',
    backgroundL: space4Lg,
    backgroundM: space4Lg,
    backgroundS: space4Sm,
    classNames: 'col-sm-8 col-md-6 col-lg-12',
    titleSize: 'large',
  },
];

export const articles = [
  {
    id: 1,
    visibleText: 'Traveling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.',
    hiddenText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Embark on a space journey',
    classNames: 'col-sm-8 col-md-12 col-lg-12',
  }
];
