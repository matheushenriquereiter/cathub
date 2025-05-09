import Storie from "./Storie";
import styles from "@/app/styles.module.css";

export default function Stories() {
  return (
    <div className={styles.stories}>
      <Storie profileName="jorgecat"></Storie>
      <Storie profileName="jamescatu"></Storie>
      <Storie profileName="nicecat"></Storie>
      <Storie profileName="bigcatsonnow"></Storie>
      <Storie profileName="litlecat"></Storie>
    </div>
  );
}
