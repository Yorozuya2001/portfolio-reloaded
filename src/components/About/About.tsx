import styles from "./About.module.css";
import PhotoSource from "../../../public/my-photo.jpg";
import Image from "next/image";
import Title from "../Title/Title";
import Stack from "../Stack/Stack";

const About = () => {
  return (
    <section id="about" className={`${styles.about}`}>
      <div className={`${styles.imageWithShadow}`}>
        <Image
          className={`${styles.myPhoto}`}
          src={PhotoSource}
          alt="Imagen de Axel Valiente"
        />
        <div className={`${styles.imageShadow}`}></div>
      </div>
      <p className={`${styles.aboutText}`}>
        Soy Axel, tengo 22 años y actualmente resido en Buenos Aires. Mi
        principal dedicación es el estudio y la autodidacta, aprovechando mi
        tiempo libre para sumergirme en la programación y desarrollar proyectos
        con los conocimientos adquiridos en los cursos que realizo. Me apasiona
        la programación y disfruto aplicar mis habilidades en mis propias
        creaciones. Además, estoy estudiando Ingeniería en Informática en la
        Universidad Nacional de La Matanza y actualmente me encuentro en el
        segundo año de la carrera. Mi objetivo mientras continúo con mis
        estudios es ganar experiencia y crecer profesionalmente junto a una
        organización en el campo de la tecnología de la información. Trabajo
        constantemente en mejorar mis habilidades y conocimientos, siempre
        buscando oportunidades para ampliar mi experiencia en el área. Estoy
        entusiasmado por explorar nuevas posibilidades y contribuir con mis
        capacidades a un equipo en el campo de la informática. Agradezco la
        oportunidad de poder expresar mi interés y espero poder contribuir con
        mis habilidades y entusiasmo en futuras oportunidades.
      </p>
      <div>
        <Title title="Stack" />
        <Stack />
      </div>
    </section>
  );
};

export default About;
