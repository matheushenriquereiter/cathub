import Image from "next/image";
import styles from "@/app/styles.module.css";
import Link from "next/link";

export default function ({ profileName }) {
  return (
    <div className={styles.storie}>
      <Link href="/storie">
        <Image
          className={styles.storieImage}
          src="/test.jpeg"
          height="72"
          width="72"
          alt="storie profile image"
        ></Image>
      </Link>

      <Link href="/storie">
        <span className={styles.storieProfile}>{profileName}</span>
      </Link>
    </div>
  );
}
