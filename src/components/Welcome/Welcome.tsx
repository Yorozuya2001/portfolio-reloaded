import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <section className={`${styles.section}`}>
      <h2 className={`${styles.animateCharcter} text-6xl`}>Axel Ariel Valiente</h2>
      <p className={`${styles.animateCharcter} text-3xl	mt-4`}>
        Full Stack Developer - Estudiante de Ingeniería
      </p>
    </section>
  );
};

export default Welcome;
