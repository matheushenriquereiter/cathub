"use client";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import Post from "./components/Post";
import ProfileSwitcher from "./components/profileSwitcher";
import SuggestionContainer from "./components/SuggestionsContainer";
import styles from "@/app/styles.module.css";

export default function Home() {
  const handleClick = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="page-wrapper">
      <Sidebar />

      <main>
        <div className={styles.contentContainer}>
          <Stories />

          <div className={styles.posts}>
            <button onClick={handleClick}>Banana</button>
            <Post postProfileName="nicecat" likesAmount={256} />
            <Post postProfileName="thegreatcat" likesAmount={542} />
            <Post postProfileName="badcat" likesAmount={1203} />
            <Post postProfileName="nicecat" likesAmount={256} />
            <Post postProfileName="thegreatcat" likesAmount={542} />
            <Post postProfileName="badcat" likesAmount={1203} />
          </div>
        </div>

        <div className={styles.rightPanel}>
          <ProfileSwitcher />

          <SuggestionContainer />
        </div>
      </main>
    </div>
  );
}
