import Button from '../Button/Button';
import './Card.scss';

type CardProps = {
  title: string,
  description: string,
  background: string,
  className?: string,
  titleSize?: 'small' | 'large',
}

const Card = ({
  title,
  description,
  background,
  className,
  titleSize = 'large',
}: CardProps) => {
  return <div className={`card ${className} grid-0`} style={{ backgroundImage: `url(${background})` }}>
    <div className='card__content col-sm-7 col-md-11 col-lg-8'>
      <h3 className={`card__title card__title--${titleSize}`}>{title}</h3>
      <p className='card__description'>{description}</p>
      <Button variant='secondary' label='Learn more' className='card__button'></Button>
    </div>
  </div>;
};

export default Card;
