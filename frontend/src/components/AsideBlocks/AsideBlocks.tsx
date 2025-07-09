import { LastMatch } from "../LastMatch/LastMatch";
import { NextMatch } from "../NextMatch/NextMatch";
import { ResultsTable } from "../ResultsTable/ResultsTable";
import styles from "./AsideBlocks.module.css";

export function AsideBlocks() {
	return (
		<div className={`${styles.asideBlocks}`}>
			<LastMatch />
			<NextMatch />
			<ResultsTable />
		</div>
	);
}
