import Image from "next/image";
import styles from "./Card.module.css";
import imagen from "../../../public/projectsPhotos/aerodynamic-store.png";
const Card = () => {
  return (
    <div className={`${styles.cardBg} w-72 rounded  overflow-hidden shadow-lg`}>
      <Image className="w-full" src={imagen} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span
          className={`${styles.span} inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}
        >
          #photography
        </span>
        <button>Sitio Web</button>
        <button>Repositorio de Github</button>
      </div>
    </div>
  );
};

export default Card;
