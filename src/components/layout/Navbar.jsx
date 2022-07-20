import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div>
        <nav className={styles.navbar}>
          <a className={`text-white ${styles.logo}`} href='/'>Traz Pra Mim</a>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href='/findtravel'>Encontrar Viagens</a>
            </li>
            <li className={styles.item}>
              <a href="/travels">Viagens</a>
            </li>
            <li className={styles.item}>
              <a href="/travels">Meus Interesses</a>
            </li>
            <li className={styles.item}>
              <a href="/travels">Reservados</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
