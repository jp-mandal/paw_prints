import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import FirstPage from "@/components/firstPage/firstPage";
import AboutUs from "@/components/secondPage/aboutUs";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Navbar />
        <FirstPage />
      </div>
      <div className={styles.aboutUs}>
        <AboutUs></AboutUs>
      </div>
    </div>
  );
}
