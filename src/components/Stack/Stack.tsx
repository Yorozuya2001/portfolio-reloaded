"use client";

import Image from "next/image";
import styles from "./Stack.module.css";

const Stack = () => {
  const imageFiles = require.context(
    "../../../public/stack",
    false,
    /\.(jpg|png|gif|svg)$/
  );
  const images = imageFiles.keys().map(imageFiles);

  return (
    <div>
      {images.map((image, index) => (
        <Image className={`${styles.stackImage}`} key={index} src={image.default} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default Stack;
