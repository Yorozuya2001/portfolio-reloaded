import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-16">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
