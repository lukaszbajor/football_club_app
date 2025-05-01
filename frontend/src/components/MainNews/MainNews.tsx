import { Link } from "react-router-dom";
import styles from "./MainNews.module.css";
import { NewsItem } from "../../types";

interface MainNewsProps {
	mainNews: NewsItem | undefined;
}

export function MainNews({ mainNews }: MainNewsProps) {
	if (!mainNews) return null;
	return (
		<div className={styles.mainNews}>
			<div>
				<div>Data</div>
				<div>Strzałki</div>
				<Link to="#">{mainNews.title}</Link>
				<p>{mainNews.desc}</p>
			</div>
		</div>
	);
}
