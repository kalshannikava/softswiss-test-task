import './Footer.scss';
import rocket from '../../assets/icons/rocket.svg';

const Footer = () => {
  return <footer className='footer'>
    <img src={rocket} alt='Rocket' className='footer__icon'/>
    <p className='footer__text'>Exciting space adventure!</p>
  </footer>;
};

export default Footer;
