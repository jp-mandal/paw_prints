import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import FirstPage from "@/components/firstPage/firstPage";
import AboutUs from "@/components/secondPage/aboutUs";
import Cause from "@/components/thirdPage/Cause";
import Donation from "@/components/fourthPage/Donation";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Navbar></Navbar>
        <FirstPage></FirstPage>
      </div>
      <div className={styles.aboutUs}>
        <AboutUs></AboutUs>
      </div>
      <div className={styles.cause}>
        <Cause></Cause>
      </div>
      <div className={styles.donation}>
        <Donation></Donation>
      </div>
    </div>
  );
}
