"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Head from "next/head";
interface links {
  title: string;
  path: string;
}

const links: links[] = [
  {
    title: "Campagins & Topics",
    path: "/campagins-and-topics",
  },
  {
    title: "Animals",
    path: "/animals",
  },

  {
    title: "AboutUs",
    path: "/aboutUs",
  },
];

const NavLink = () => {
  const pathName = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.link1}>
          <Image
            src="/Logos.png"
            alt=""
            height={35}
            width={114}
            className={styles.logo}
          ></Image>
          <div className={styles.content}>
            {links.map((link) => (
              <Link href={link.path} key={link.title} className={styles.link}>
                {link.title}
                {
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ marginLeft: "5px" }}
                  />
                }
              </Link>
            ))}
            <Link href={"/contact"} className={styles.link}>
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.volunter}>
        <button className={styles.volbut}>Volunteer</button>
        <button className={styles.donateBut}>Donate</button>
      </div>
    </div>
  );
};

export default NavLink;
