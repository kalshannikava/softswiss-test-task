import './Navigation.scss';
import cart from '../../assets/icons/cart.svg';
import menu from '../../assets/icons/menu.svg';

const Navigation = () => {
  return <nav>
    <input id='burger-menu-toggle' className='burger-menu-toggle' type='checkbox' />
    <label className='burger-menu-button' htmlFor='burger-menu-toggle'>
      <div className='burger-menu-button__icon'>
        <img src={menu} alt='menu'/>
      </div>
    </label>
    <ul className='nav'>
      <li className='nav__item'><a className='nav__link' href='/'>Home</a></li>
      <li className='nav__item'><a className='nav__link' href='/'>Products</a></li>
      <li className='nav__item'>
        <a className='nav__link' href='/'>
          <img className='nav__cart' src={cart} alt='Cart' />
        </a>
      </li>
    </ul>
  </nav>;
};

export default Navigation;
