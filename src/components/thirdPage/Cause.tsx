import styles from "./cause.module.css";
import Card from "./card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Cause = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentOne}>
        <div className={styles.innerContent}>
          <div className={styles.help}>A HELP TO THOSE WHO NEED IT</div>
          <div className={styles.each}>Each donation is an essential</div>
        </div>
        <div className={styles.advocate}>
          We advocate for vulnerable animals, providing safety while promoting
          responsible pet ownership. We uplift both animals and communities.
        </div>
      </div>
      <div className={styles.contentTwo}>
        <Card></Card>
      </div>
      <button className={styles.button}>
        <p> View All Cause</p>
        <p>
          <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </button>
    </div>
  );
};

export default Cause;
