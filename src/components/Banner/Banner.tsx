import Button from '../Button/Button';
import './Banner.scss';

type BannerProps = {
  className?: string,
}

const Banner = ({
  className,
}: BannerProps) => {
  return <section className={`banner ${className}`}>
    <div className='banner__content'>
      <h2 className='banner__title'>Discover the vast expanses of <strong className='banner__title--strong'>space</strong></h2>
      <p className='banner__text'>Where the possibilities are <strong className='banner__text--strong'>endless!</strong></p>
      <Button label='Learn more' className='banner__button'/>
    </div>
  </section>;
};

export default Banner;
