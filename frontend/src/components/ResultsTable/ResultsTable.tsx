import styles from "./ResultsTable.module.css";

export function ResultsTable() {
	const teams = [
		{
			name: "Orzeł Kosowy",
			matches: 10,
			points: 24,
			goalsScored: 18,
			goalsConceded: 7,
		},
		{
			name: "LKS Hucina",
			matches: 10,
			points: 20,
			goalsScored: 15,
			goalsConceded: 10,
		},
		{
			name: "Błękitni Siedlanka",
			matches: 10,
			points: 18,
			goalsScored: 12,
			goalsConceded: 11,
		},
		{
			name: "Marmury Przyłęk",
			matches: 10,
			points: 15,
			goalsScored: 10,
			goalsConceded: 12,
		},
		{
			name: "Huragan Przedbórz",
			matches: 10,
			points: 12,
			goalsScored: 9,
			goalsConceded: 14,
		},
	];
	return (
		<div className={`${styles.resultsTable}`}>
			<h2>Tabela ligowa</h2>
			<h4>Klasa B - Kolbuszowa 2025/2026</h4>
			<table className={`${styles.table}`}>
				<thead>
					<tr>
						<th className={`${styles.tableHead}`}>Poz.</th>
						<th className={`${styles.tableHead}`}>Drużyna</th>
						<th className={`${styles.tableHead}`}>M</th>
						<th className={`${styles.tableHead}`}>P</th>
						<th className={`${styles.tableHead}`}>G+</th>
						<th className={`${styles.tableHead}`}>G-</th>
					</tr>
				</thead>
				<tbody>
					{teams.map((team, index) => (
						<tr key={index}>
							<td className={`${styles.tableBody}`}>{index + 1}</td>
							<td className={`${styles.tableBody}`}>{team.name}</td>
							<td className={`${styles.tableBody}`}>{team.matches}</td>
							<td className={`${styles.tableBody}`}>{team.points}</td>
							<td className={`${styles.tableBody}`}>{team.goalsScored}</td>
							<td className={`${styles.tableBody}`}>{team.goalsConceded}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
