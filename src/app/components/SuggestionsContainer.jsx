import Suggestion from "./Suggestion";
import styles from "@/app/styles.module.css";

export default function SuggestionContainer() {
  return (
    <div className={styles.suggestionsContainer}>
      <div className={styles.suggestionTextContainer}>
        <span className={styles.suggestionText}>Suggestions for you</span>
        <span className={styles.seeAllText}>See All</span>
      </div>

      <div className={styles.suggestions}>
        <Suggestion></Suggestion>
        <Suggestion></Suggestion>
        <Suggestion></Suggestion>
        <Suggestion></Suggestion>
        <Suggestion></Suggestion>
      </div>
    </div>
  );
}
