import styles from "./testimonials.module.css";
import Cards from "./card/cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentOne}>
        <div className={styles.innerContent}>
          <div className={styles.testimonials}>TESTIMONIALS</div>
          <div className={styles.even}>
            Check what our volunteers are saying
          </div>
        </div>
        <div className={styles.advocate}>
          We advocate for vulnerable animals, providing safety while promoting
          responsible pet ownership. We uplift both animals and communities.
        </div>
      </div>
      <div className={styles.contentTwo}>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Testimonials;
