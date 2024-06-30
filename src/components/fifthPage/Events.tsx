import styles from "./event.module.css";
import Cards from "./card/cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Events = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentOne}>
        <div className={styles.innerContent}>
          <div className={styles.calender}>CALENDER</div>
          <div className={styles.even}>Event Schedule</div>
        </div>
        <div className={styles.advocate}>
          We advocate for vulnerable animals, providing safety while promoting
          responsible pet ownership. We uplift both animals and communities.
        </div>
      </div>
      <div className={styles.contentTwo}>
        <Cards></Cards>
      </div>
      <button className={styles.button}>
        <p> View All</p>
        <p>
          <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </button>
    </div>
  );
};

export default Events;
