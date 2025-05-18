import Image from "next/image";
import styles from "@/app/styles.module.css";
import Link from "next/link";

export default function SwitchAccount() {
  return (
    <div className={styles.profileSwitcher}>
      <div className={styles.profileInfo}>
        <Link href="/profile">
          <Image
            className={styles.profileImage}
            src="/test.jpeg"
            width={64}
            height={64}
            alt="profile image"
          ></Image>
        </Link>

        <Link href="/profile">
          <span className={styles.profileName}>myprofile</span>
        </Link>
      </div>

      <span className={styles.switchAccountButton}>Switch</span>
    </div>
  );
}
