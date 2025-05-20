import styles from "./register.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <h1 className={styles.title}>Let your cat be famous</h1>

            <div className={styles.wrapper}>
              <div className={styles.otherTypes}>
                <div>
                  <Image
                    className={styles.types}
                    src="/assets/icons/google.svg"
                    width={20}
                    height={20}
                    alt="google icon"
                  ></Image>
                </div>

                <div>
                  <Image
                    className={styles.types}
                    src="/assets/icons/github.svg"
                    width={28}
                    height={28}
                    alt="github icon"
                  ></Image>
                </div>
              </div>

              <div className={styles.division}>
                <hr />
                register
                <hr />
              </div>
            </div>

            <div className={styles.inputs}>
              <label className={styles.label}>
                Email
                <input className={styles.input} type="text" />
              </label>

              <label className={styles.label}>
                Username
                <input className={styles.input} type="text" />
              </label>

              <label className={styles.label}>
                Password
                <input className={styles.input} type="password" />
              </label>
            </div>

            <div className={styles.wrapper}>
              <Link href="/" className={styles.submitLink}>
                <button className={styles.submitButton}>Register</button>
              </Link>

              <span>
                Already have an account?&nbsp;
                <Link className={styles.signinLink} href="/login">
                  Log in
                </Link>
              </span>
            </div>
          </form>
        </div>

        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/test2.png"
            height={0}
            width={0}
            alt="jorge"
            unoptimized={true}
          ></Image>
        </div>
      </div>
    </div>
  );
}
