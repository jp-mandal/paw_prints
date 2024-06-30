import Image from "next/image";
import styles from "./donation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Donation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <div className={styles.image}>
          <Image
            className={styles.img}
            src="/pawPrints.png"
            alt=""
            width={452}
            height={669}
          ></Image>
        </div>
        <div className={styles.pawprints}>Pawprints</div>
      </div>
      <div className={styles.content}>
        <div className={styles.first}>
          <div className={styles.one}>A HELP TO THOSE WHO NEED IT</div>
          <div className={styles.two}>Transform lives with donations</div>
          <div className={styles.three}>
            Your donation can save lives. Help us provide care and find loving
            homes for rescued animals. Every contribution counts. Donate now!
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.progressBar}>
            <div className={styles.progress}>
              <span className={styles.percent}>60%</span>
            </div>
          </div>
          <div className={styles.gr}>
            <div className={styles.goal}>GOAL:$1340</div>
            <div className={styles.raised}>RAISED:$800</div>
          </div>
          <div className={styles.input}>
            <div className={styles.dol}>$</div>
            <input className={styles.inp} type="text" placeholder="10.00" />
          </div>
          <div className={styles.buttn}>
            <button className={styles.but}>$10.00</button>
            <button className={styles.but}>$25.00</button>
            <button className={styles.but}>$50.00</button>
            <button className={styles.but}>$100.00</button>
            <button className={styles.but}>$250.00</button>
          </div>
        </div>

        <button className={styles.butt}>
          <p> Donate Now</p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </button>
      </div>
    </div>
  );
};
export default Donation;
