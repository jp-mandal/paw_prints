"use client";
import styles from "./card.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface Testimonial {
  fullName: string;
  content: string;
  imagePath: string;
}

const Cards = () => {
  const [data, setData] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/Himal-Marasini/frontend-task/main/testinomial_data.json"
      );
      const jsonData = await res.json();
      setData(jsonData.testimonial);
      console.log("res", jsonData.testimonial);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    };
    getData();
  }, []);

  const increaseIndex = (index: number) => {
    const dataLength = data?.length;

    if (index !== dataLength - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      return;
    }
  };

  const decreaseIndex = (index: number) => {
    if (index !== 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      return;
    }
  };

  console.log("current INdex", currentIndex);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={data[currentIndex]?.imagePath}
            width={452}
            height={560}
            alt="user-image"
          />
        </div>
        <div className={styles.description}>
          <div className={styles.quoteContainer}>
            <Image src="/quote.svg" width={45} height={45} alt="quote-image" />
          </div>
          <div className={styles.content}>{data[currentIndex]?.content}</div>
          <div className={styles.name}>{data[currentIndex]?.fullName}</div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              disabled={currentIndex === 0}
              onClick={() => decreaseIndex(currentIndex)}
            >
              <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
            </button>
            <button
              className={styles.button}
              disabled={currentIndex === data?.length - 1}
              onClick={() => increaseIndex(currentIndex)}
            >
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
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
