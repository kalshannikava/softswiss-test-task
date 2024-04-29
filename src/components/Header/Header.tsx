import Navigation from '../Navigation/Navigation';
import logo from '../../assets/icons/logo.svg';
import logoText from '../../assets/icons/logoText.svg';
import './Header.scss';

type HeaderProps = {
  className?: string,
}

const Header = ({
  className,
}: HeaderProps) => {
  return <header className={`header ${className}`}>
    <div className='logo'>
      <img src={logo} alt='logo' className='logo__icon'/>
      <img src={logoText} alt='GO' className='logo__text'/>
    </div>
    <Navigation />
  </header>;
};

export default Header;
