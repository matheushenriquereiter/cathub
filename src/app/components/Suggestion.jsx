import Image from "next/image";
import styles from "@/app/styles.module.css";
import Link from "next/link";

export default function Suggestion() {
  return (
    <div className={styles.suggestion}>
      <div className={styles.suggestionProfile}>
        <Link href="/profile">
          <Image
            className={styles.suggestionProfileImage}
            src="/test.jpeg"
            width={48}
            height={48}
            alt="profile image"
          ></Image>
        </Link>

        <Link href="/profile">
          <span className={styles.suggestionProfileName}>mortadela</span>
        </Link>
      </div>

      <span className={styles.followButton}>Follow</span>
    </div>
  );
}
