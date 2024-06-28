import styles from "./firstPage.module.css";
import Image from "next/image";
const FirstPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrow}>
        <Image src="/Frame7.png" alt="" height={52} width={52}></Image>
        <Image src="/Frame8.png" alt="" height={52} width={52}></Image>
      </div>
    </div>
  );
};

export default FirstPage;
