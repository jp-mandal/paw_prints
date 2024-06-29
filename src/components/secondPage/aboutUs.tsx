import styles from "./AboutUs.module.css";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.who}>WHO WE ARE AND OUR MISSION</div>
        <div className={styles.about}>About our shelter and values</div>
        <div className={styles.we}>
          We advocate for vulnerable animals, providing safety while promoting
          responsible pet ownership. We uplift both animals and communities.
        </div>
      </div>
      <div className={styles.headingTwo}>
        <div className={styles.subhead}>
          <div className={styles.your}>
            Your donations help us run important projects
          </div>
          <div className={styles.desc}>
            As a pioneer of the no-kill movement, Paw Print leads the way with
            national and international programs designed to increase adoptions
            and raise awareness about the plight of homeless animals, continuing
            to make a significant impact.
          </div>
          <button className={styles.button}>Donate for Pets</button>
        </div>
        <div className={styles.subbottom}>
          <Image src="/dogs.png" alt="" width={747} height={430}></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
