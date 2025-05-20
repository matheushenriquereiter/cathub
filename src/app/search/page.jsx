import styles from "./search.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Search() {
  return (
    <div className={styles.pageWrapper}>
      <div>
        Search:
        <input className={styles.searchInput} type="search" />
      </div>

      <div className={styles.profiles}>
        <div className={styles.profile}>
          <Link href="/profile">
            <Image
              className={styles.profileImage}
              src="/test.jpeg"
              width={48}
              height={48}
              alt="profile image"
            ></Image>
          </Link>

          <Link href="/profile">
            <span className={styles.profileName}>mortadela</span>
          </Link>
        </div>
        <div className={styles.profile}>
          <Link href="/profile">
            <Image
              className={styles.profileImage}
              src="/test.jpeg"
              width={48}
              height={48}
              alt="profile image"
            ></Image>
          </Link>

          <Link href="/profile">
            <span className={styles.profileName}>mortadela</span>
          </Link>
        </div>

        <div className={styles.profile}>
          <Link href="/profile">
            <Image
              className={styles.profileImage}
              src="/test.jpeg"
              width={48}
              height={48}
              alt="profile image"
            ></Image>
          </Link>

          <Link href="/profile">
            <span className={styles.profileName}>mortadela</span>
          </Link>
        </div>
        <div className={styles.profile}>
          <Link href="/profile">
            <Image
              className={styles.profileImage}
              src="/test.jpeg"
              width={48}
              height={48}
              alt="profile image"
            ></Image>
          </Link>

          <Link href="/profile">
            <span className={styles.profileName}>mortadela</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
