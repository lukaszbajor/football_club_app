import { ReactNode } from "react";
import styles from "./MainContent.module.css";

export function MainContent({ children }: { children: ReactNode }) {
	return <main className={styles.mainContent}>{children}</main>;
}
