import styles from "./cards.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Cards = () => {
  return (
    <div className={styles.container}>
      {data.map((help, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.contentup}>
            <div className={styles.date}>{help.date}</div>
            <div className={styles.back}>{help.month}</div>
          </div>
          <div className={styles.contentBelow}>
            <div className={styles.heading}>{help.raised}</div>
            <div className={styles.subContent}>
              <div className={styles.content}>{help.time}</div>
              <div className={styles.place}>{help.place}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cards;

interface dataType {
  date: string;
  month: string;
  raised: string;
  time: string;
  place: string;
}
const data: dataType[] = [
  {
    date: "08",
    month: "JUNE",
    raised: "Disaster Relief for Animals",
    time: "07:00 AM - 10:00 PM",
    place: "Kathmandu",
  },
  {
    date: "08",
    month: "JUNE",
    raised: "Disaster Relief for Animals",
    time: "07:00 AM - 10:00 PM",
    place: "Kathmandu",
  },
  {
    date: "08",
    month: "JUNE",
    raised: "Disaster Relief for Animals",
    time: "07:00 AM - 10:00 PM",
    place: "Kathmandu",
  },
];
