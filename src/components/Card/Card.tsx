import Image from "next/image";
import imagen from "../../../public/projectsPhotos/aerodynamic-store.png";
import styles from "./Card.module.css";
import Link from "next/link";

interface CardProps {
  name: string;
  url: string;
  repo: string;
}

const Card: React.FC<CardProps> = ({ name, url, repo }) => {
  return (
    <div
      className={`${styles.cardBg} ${styles.cardAnimation} w-72 rounded  overflow-hidden shadow-lg`}
    >
      <Image className="w-full" src={imagen} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-col">
        <div className="flex flex-col justify-center items-center gap-3">
          <Link href={url} className={styles.cardButton}>
            Deploy 📁
          </Link>
          <Link href={repo} className={styles.cardButton}>
            Repositorio 🚀
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
