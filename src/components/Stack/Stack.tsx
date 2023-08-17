import Image from "next/image";
import styles from "./Stack.module.css";
import fs from "fs";
import path from "path";

const Stack: React.FC = () => {
  const stackPath = path.join(process.cwd(), "public/stack");
  const imageFiles = fs
    .readdirSync(stackPath)
    .filter((file) => /\.(jpg|png|gif|svg)$/.test(file));

  return (
    <div className={styles.stackContainer}>
      {imageFiles.map((imageFile, index: number) => (
        <Image
          className={styles.image}
          width={60}
          height={60}
          key={index}
          src={`/stack/${imageFile}`}
          alt={`${imageFile.replace(/\.svg$/, "")}`}
        />
      ))}
    </div>
  );
};

export default Stack;
