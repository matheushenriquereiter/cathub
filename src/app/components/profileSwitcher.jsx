import Image from "next/image";
import styles from "@/app/styles.module.css";

export default function SwitchAccount() {
  return (
    <div className={styles.profileSwitcher}>
      <div className={styles.profileInfo}>
        <Image
          className={styles.profileImage}
          src="/test.jpeg"
          width={64}
          height={64}
          alt="profile image"
        ></Image>
        <span className={styles.profileName}>myprofile</span>
      </div>

      <span className={styles.switchAccountButton}>Switch</span>
    </div>
  );
}
