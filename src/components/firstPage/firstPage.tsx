import styles from "./firstPage.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const FirstPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrow}>
        <Image src="/Frame 7.png" alt="" height={52} width={52}></Image>
        <Image src="/Frame 8.png" alt="" height={52} width={52}></Image>
      </div>
      <div className={styles.heroText}>
        <div className={styles.head1}>SAVING LIVES EVERY DAY</div>
        <div className={styles.head2}>
          Saving lives of cats and dogs across world
        </div>
        <div className={styles.head3}>
          We advocate for vulnerable animals, providing safety while promoting
          responsible pet ownership. We uplift both animals and communities.
        </div>
        <button className={styles.aboutBtn}>
          About Us
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <Image
        src="/cat.png"
        alt=""
        width={420}
        height={623}
        className="styles.cat"
      ></Image>
    </div>
  );
};

export default FirstPage;
