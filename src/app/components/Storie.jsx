import Image from "next/image";
import styles from "@/app/styles.module.css";

export default function ({ profileName }) {
  return (
    <div className={styles.storie}>
      <Image
        className={styles.storieImage}
        src="/test.jpeg"
        height="72"
        width="72"
        alt="storie profile image"
      ></Image>

      <span>{profileName}</span>
    </div>
  );
}
