import styles from "./create.module.css";

export default function Create() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>Create new content</div>

        <div className={styles.cardContent}>
          <form>
            <div className={styles.container}>
              <select defaultValue="post" className={styles.selectType}>
                <option value="post">Post</option>
                <option value="storie">Storie</option>
              </select>

              <label className={styles.selectButton}>
                Select from computer
                <input
                  className={styles.input}
                  type="file"
                  name="jorge"
                ></input>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
