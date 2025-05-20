import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import styles from "./explore.module.css";

export default function Explore() {
  return (
    <div className="page-wrapper">
      <Sidebar></Sidebar>

      <main>
        <div>
          <div className={styles.posts}>
            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>

            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>

            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>

            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>

            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>

            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>

            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>

            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>

            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>

            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>

            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>

            <div className={styles.post}>
              <Image
                className={styles.postImage}
                src="/test.jpeg"
                width="300"
                height="300"
                alt="post profile image"
                unoptimized={true}
              ></Image>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
