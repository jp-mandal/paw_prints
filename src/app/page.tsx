import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import FirstPage from "@/components/firstPage/firstPage";
import AboutUs from "@/components/secondPage/aboutUs";
import Cause from "@/components/thirdPage/Cause";
import Donation from "@/components/fourthPage/Donation";
import Events from "@/components/fifthPage/Events";
import Testimonials from "@/components/sixthPage/Testimonials";
import Contact from "@/components/seventhPage/Contact";
import Footer from "@/components/footer/Footer";
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
      <div className={styles.event}>
        <Events></Events>
      </div>
      <div className={styles.testimonials}>
        <Testimonials></Testimonials>
      </div>
      <div>
        <Contact></Contact>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
