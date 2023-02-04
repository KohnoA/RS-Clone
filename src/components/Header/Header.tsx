import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Header: React.FC = () => {
  return (
    <header
      className={ `container ${styles.header}` }
    >
      <Logo />
      <Search />
      <Navigation />

      <button className={ styles.header__add }>+</button>
      <Button text="Login"/>
    </header>
  );
}

export default Header;