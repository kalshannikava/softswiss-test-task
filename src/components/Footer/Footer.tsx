import './Footer.scss';
import rocket from '../../assets/icons/rocket.svg';

type FooterProps = {
  className?: string,
}

const Footer = ({
  className,
}: FooterProps) => {
  return <footer className={`footer ${className}`}>
    <img src={rocket} alt='Rocket' className='footer__icon'/>
    <p className='footer__text'>Exciting space adventure!</p>
  </footer>;
};

export default Footer;
