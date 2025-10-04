import Image from "next/image";
import styles from "@/app/styles.module.css";
import Link from "next/link";

export default function Post({ postProfileName, likesAmount }) {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <div className={styles.postProfileInfos}>
          <Link href="/profile">
            <Image
              className={styles.postProfileImage}
              src="/test.jpeg"
              width="48"
              height="48"
              alt="post profile image"
            ></Image>
          </Link>

          <div>
            <Link href="/profile">
              <span className={styles.postProfileName}>{postProfileName}</span>
            </Link>

            <span className={styles.postDate}> • 8h</span>
          </div>
        </div>

        <Image
          className={styles.moreButton}
          src="/assets/icons/three-points.svg"
          width="38"
          height="38"
          alt="more icon"
        ></Image>
      </div>

      <div className={styles.postContainer}>
        <div className={styles.postFooter}>
          <div className={styles.postFooterContainer}>
            <Image
              className={styles.favorite}
              src="/assets/icons/like.svg"
              width="32"
              height="32"
              alt="like icon"
            ></Image>
            {likesAmount}
          </div>

          <Image
            className={styles.like}
            src="/assets/icons/favorite.svg"
            width="32"
            height="32"
            alt="favorite icon"
          ></Image>
        </div>

        <Image
          className={styles.postImage}
          src="/assets/test.jpeg"
          width="200"
          height="200"
          alt="post image"
          unoptimized={true}
        ></Image>
      </div>
    </div>
  );
}
