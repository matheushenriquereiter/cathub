import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className="page-wrapper">
      <Sidebar></Sidebar>

      <main>
        <div className={styles.container}>
          <div className={styles.profileHeader}>
            <Image
              className={styles.profileImage}
              src="/test.jpeg"
              width="168"
              height="168"
              alt="post profile image"
            ></Image>

            <div className={styles.profileInfo}>
              <div className={styles.wrapper}>
                <span className={styles.profileName}>bigcat</span>

                <button className={styles.followButton}>Follow</button>
              </div>

              <div className={styles.profileData}>
                <span className="bold">
                  1,861<span className="regular"> posts</span>
                </span>

                <span className="bold">
                  4M<span className="regular"> followers</span>
                </span>

                <span className="bold">
                  454<span className="regular"> following</span>
                </span>
              </div>

              <div>I am the nicest cat of all time.</div>
            </div>
          </div>

          <div className={styles.posts}>
            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>

            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>

            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>

            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>

            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>

            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>

            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>

            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>

            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>

            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>

            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>

            <Image
              className={styles.post}
              src="/test.jpeg"
              width="300"
              height="400"
              alt="post profile image"
              unoptimized={true}
            ></Image>
          </div>
        </div>
      </main>
    </div>
  );
}
