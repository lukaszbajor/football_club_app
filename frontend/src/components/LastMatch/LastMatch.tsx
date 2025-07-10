import styles from "./LastMatch.module.css";

export function LastMatch() {
	const isMatch = true;
	return (
		<div className={`${styles.lastMatch}`}>
			<h2>Ostatni mecz</h2>
			{isMatch ? (
				<div>
					<div>
						<img src="" alt="Drużyna A" />
						<p>Orzeł Kosowy</p>
					</div>
					<span>3:1</span>
					<div>
						<img src="" alt="Drużyna B" />
						<p>Marmury Przyłęk</p>
					</div>
				</div>
			) : (
				<p className={`${styles.info}`}>Brak meczów</p>
			)}
		</div>
	);
}
