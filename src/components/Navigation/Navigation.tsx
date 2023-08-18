import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header
      className={`${styles.header} containerCustom flex justify-center items-center fixed top-0 left-0 right-0 text-white p-4 shadow-lg z-10`}
    >
      <nav className={`${styles.nav}`}>
        <ul className={`flex gap-x-16`}>
          <li>
            <Link href="#about">Acerca de mí</Link>
          </li>
          <li>
            <Link href="#projects">Proyectos</Link>
          </li>
          <li>
            <Link href="#contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
