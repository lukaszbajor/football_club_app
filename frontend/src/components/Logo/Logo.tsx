import styles from "./Logo.module.css";

export function Logo() {
	return (
		<div className={styles.box}>
			<img src="/images/logo.jpg" alt="Logo klubu" className={styles.logo} />
		</div>
	);
}
