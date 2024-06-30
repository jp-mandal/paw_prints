import styles from "./card.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Card = () => {
  return (
    <div className={styles.container}>
      {data.map((help, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.image}>
            <Image src={help.img} alt="" fill></Image>
          </div>
          <div className={styles.back}>
            <div className={styles.gr}>
              <div className={styles.goal}>GOAL:${help.goal}</div>
              <div className={styles.raised}>RAISED:${help.raised}</div>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progress}>
                <span className={styles.percent}>60%</span>
              </div>
            </div>
          </div>
          <div className={styles.contentBelow}>
            <div className={styles.heading}>{help.heading}</div>
            <div className={styles.content}>{help.content}</div>
            <button className={styles.view}>
              <p>VIEW DETAILS</p>
              <p>
                <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;

interface dataType {
  img: string;
  goal: number;
  raised: number;
  heading: string;
  content: string;
}
const data: dataType[] = [
  {
    img: "/dog1.png",
    goal: 1340,
    raised: 800,
    heading: "New chance for animals",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "/dog2.png",
    goal: 1340,
    raised: 800,
    heading: "Help the eco system",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "/dog3.png",
    goal: 1340,
    raised: 800,
    heading: "New Sustainability",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
