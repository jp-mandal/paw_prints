import NavLink from "./navLink/NavlLink";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <NavLink></NavLink>
    </div>
  );
};

export default Navbar;
