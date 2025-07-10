import styles from "./NextMatch.module.css";

export function NextMatch() {
	const isMatch = true;
	return (
		<div className={`${styles.nextMatch}`}>
			<h2>Najbliższy mecz</h2>
			{isMatch ? (
				<div>
					<div>
						<img src="" alt="Drużyna A" />
						<p>Orzeł Kosowy</p>
					</div>
					<span>-</span>
					<div>
						<img src="" alt="Drużyna B" />
						<p>Błękitni Siedlanka</p>
					</div>
				</div>
			) : (
				<p className={`${styles.info}`}>Brak meczów</p>
			)}
			<p>2d 14h 23m 17s</p>
		</div>
	);
}