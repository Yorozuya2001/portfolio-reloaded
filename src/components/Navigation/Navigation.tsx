import Link from "next/link";
import styles from "./Navigation.module.css";
import Logo from "../../../public/logo.svg";
import Image from "next/image";

const Navigation = () => {
  return (
    <header className={`${styles.header} containerCustom flex justify-center items-center`}>
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
