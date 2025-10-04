"use client";
import styles from "./login.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginUser = async event => {
    event.preventDefault();

    const { email, password } = formData;

    try {
      const loginResponse = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!loginResponse.ok) {
        console.log("Login failed");
      }

      const data = await loginResponse.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        router.push("/");
      } else {
        throw new Error("Token not received from server");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleLoginUser}>
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
                log in
                <hr />
              </div>
            </div>

            <div className={styles.inputs}>
              <label className={styles.label}>
                Username or email
                <input
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  className={styles.input}
                  type="text"
                />
              </label>
              {!formData.email ? "Email is required" : null}

              <label className={styles.label}>
                Password
                <input
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  className={styles.input}
                  type="password"
                />
              </label>
              {!formData.password ? "Password is required" : null}
            </div>

            <div className={styles.wrapper}>
              <button className={styles.submitButton}>Log in</button>

              <span>
                Don't have an account?&nbsp;
                <Link className={styles.signinLink} href="/register">
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>

        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/assets/test2.png"
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
