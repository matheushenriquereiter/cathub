import Image from "next/image";
import styles from "@/app/styles.module.css";

export default function Suggestion() {
  return (
    <div className={styles.suggestion}>
      <div className={styles.suggestionProfile}>
        <Image
          className={styles.suggestionProfileImage}
          src="/test.jpeg"
          width={48}
          height={48}
          alt="profile image"
        ></Image>
        <span className={styles.suggestionProfileName}>mortadela</span>
      </div>

      <span className={styles.followButton}>Follow</span>
    </div>
  );
}
