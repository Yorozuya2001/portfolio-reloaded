import styles from "../Welcome/Welcome.module.css";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h2 className={`${styles.animateCharcter} text-6xl`}>{title}</h2>;
};

export default Title;
