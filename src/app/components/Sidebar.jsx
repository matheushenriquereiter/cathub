import NavItem from "./NavItem";
import Link from "next/link";
import styles from "@/app/styles.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <Link href="/">
        <h1 className={styles.title}>CatHub</h1>
      </Link>
      <nav>
        <ul className={styles.navItems}>
          <NavItem name="home"></NavItem>
          <NavItem name="search"></NavItem>
          <NavItem name="explore"></NavItem>
          <NavItem name="reels"></NavItem>
          <NavItem name="create"></NavItem>
          <NavItem name="register"></NavItem>
          <NavItem name="more"></NavItem>
        </ul>
      </nav>
    </aside>
  );
}
