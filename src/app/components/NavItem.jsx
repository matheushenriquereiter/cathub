"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles.module.css";
import { usePathname } from "next/navigation";

const capitalizeFirstLetter = string => {
  return string[0].toUpperCase() + string.slice(1);
};

export default function NavItem({ name }) {
  const path = name == "home" ? "/" : `/${name}`;
  const currentPath = usePathname();

  return (
    <li className={styles.NavItem}>
      <Link href={`${path}`} className={styles.navLink}>
        <Image
          alt={`${name} image`}
          src={`/assets/icons/${name}.svg`}
          width={28}
          height={28}
        ></Image>

        <span className={currentPath == path ? styles.bold : ""}>
          {capitalizeFirstLetter(name)}
        </span>
      </Link>
    </li>
  );
}
