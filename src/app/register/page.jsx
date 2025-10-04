"use client";
import styles from "./register.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateUser = async event => {
    event.preventDefault();

    const { username, email, password } = formData;

    try {
      const registerResponse = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!registerResponse.ok) {
        const errorData = await registerResponse.json();
        throw new Error(
          errorData.message || "Registration failed. Please try again."
        );
      }

      const loginResponse = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!loginResponse.ok) {
        throw new Error("Login failed after registration");
      }

      const data = await loginResponse.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        router.push("/");
      } else {
        throw new Error("Token not received from server");
      }
    } catch (error) {
      console.error("Registration/Login error:", error);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleCreateUser}>
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
                Username
                <input
                  value={formData.username}
                  onChange={handleChange}
                  name="username"
                  className={styles.input}
                  type="text"
                />
              </label>

              <label className={styles.label}>
                Email
                <input
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  className={styles.input}
                  type="text"
                />
              </label>

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
            </div>

            <div className={styles.wrapper}>
              <button className={styles.submitButton}>Register</button>

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
