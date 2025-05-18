import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import Post from "./components/Post";
import ProfileSwitcher from "./components/profileSwitcher";
import SuggestionContainer from "./components/SuggestionsContainer";
import styles from "@/app/styles.module.css";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Sidebar></Sidebar>

      <main>
        <div className={styles.contentContainer}>
          <Stories></Stories>

          <div className={styles.posts}>
            <Post postProfileName="nicecat" likesAmount={256}></Post>
            <Post postProfileName="thegreatcat" likesAmount={542}></Post>
            <Post postProfileName="badcat" likesAmount={1203}></Post>
            <Post postProfileName="nicecat" likesAmount={256}></Post>
            <Post postProfileName="thegreatcat" likesAmount={542}></Post>
            <Post postProfileName="badcat" likesAmount={1203}></Post>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <ProfileSwitcher></ProfileSwitcher>

          <SuggestionContainer></SuggestionContainer>
        </div>
      </main>
    </div>
  );
}
