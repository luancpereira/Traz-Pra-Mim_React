import styles from "./Navbar.module.css";
import perfil from '../../images/Perfil.png'
function Navbar() {
  return (
    <>
      <div>
        <nav className={styles.navbar}>
          <a className={`text-white ${styles.logo}`}>Traz Pra Mim</a>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="">Encontrar Viagens</a>
            </li>
            <li className={styles.item}>
              <a href="">Viagens</a>
            </li>
            <li className={styles.item}>
              <a href="">Meus Interesses</a>
            </li>
            <li className={styles.item}>
              <a href="">Reservados</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
