import styles from "./NewsDate.module.css";

export function NewsDate() {
	return (
		<div className={styles.date}>
			<p className={styles.numberOfDay}>11</p>
			<hr />
			<p className={styles.month}>lip</p>
		</div>
	);
}
