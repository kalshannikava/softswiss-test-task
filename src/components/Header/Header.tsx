import Navigation from '../Navigation/Navigation';
import logo from '../../assets/icons/logo.svg';
import logoText from '../../assets/icons/logoText.svg';
import './Header.scss';

const Header = () => {
  return <header className='header'>
    <div className='logo'>
      <img src={logo} alt='logo' className='logo__icon'/>
      <img src={logoText} alt='GO' className='logo__text'/>
    </div>
    <Navigation />
  </header>;
};

export default Header;
