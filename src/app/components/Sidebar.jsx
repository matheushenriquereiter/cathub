import styles from "@/app/styles.module.css";
import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <h1 className={styles.title}>CatHub</h1>
      <nav>
        <ul className={styles.navItems}>
          <NavItem name="home"></NavItem>
          <NavItem name="search"></NavItem>
          <NavItem name="explore"></NavItem>
          <NavItem name="reels"></NavItem>
          <NavItem name="notifications"></NavItem>
          <NavItem name="create"></NavItem>
          <NavItem name="more"></NavItem>
        </ul>
      </nav>
    </aside>
  );
}
