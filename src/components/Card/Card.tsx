import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Button from '../Button/Button';
import './Card.scss';
import { getScreenSize } from '../../utils/helpers';

type CardProps = {
  title: string,
  description: string,
  backgroundL: string,
  backgroundM: string,
  backgroundS: string,
  className?: string,
  titleSize?: 'small' | 'large',
}

const Card = ({
  title,
  description,
  backgroundL,
  backgroundM,
  backgroundS,
  className,
  titleSize = 'large',
}: CardProps) => {
  const { width } = useWindowSize();
  const [background, setBackground] = useState<string>('');

  useEffect(() => {
    const size = getScreenSize(width);
    if (size === 'small') setBackground(backgroundS);
    else if (size === 'medium') setBackground(backgroundM);
    else setBackground(backgroundL);
  }, [width]);

  return <div className={`card ${className} grid-0`} style={{ backgroundImage: `url(${background})` }}>
    <div className='card__content col-sm-7 col-md-11 col-lg-8'>
      <h3 className={`card__title card__title--${titleSize}`}>{title}</h3>
      <p className='card__description'>{description}</p>
      <Button variant='secondary' label='Learn more' className='card__button'></Button>
    </div>
  </div>;
};

export default Card;
