// import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FlexContainer } from "../FlexContainer/FlexContainter";
import styles from "./News.module.css";
import { Button } from "../UI/Button/Button";
import { MainNews } from "../MainNews/MainNews";
import { NewsItem } from "../../types";
import { useNavigate } from "react-router-dom";
import { NewsDate } from "../NewsDate/NewsDate";

const newsList: NewsItem[] = [
	{
		id: 1,
		title: "Wygrana 4-2",
		desc: "Opis lorem ipsum...",
		date: "22.04.2025",
		img: "",
		isMain: false,
	},
	{
		id: 2,
		title: "Przegrana 4-2",
		desc: "Opis lorem ipsum...",
		date: "22.04.2025",
		img: "",
		isMain: false,
	},
	{
		id: 3,
		title: "Remis 6-6",
		desc: "Opis lorem ipsum...",
		date: "22.04.2025",
		img: "",
		isMain: false,
	},
	{
		id: 4,
		title: "Dziękujemy sponsorom",
		desc: "Opis lorem ipsum...",
		date: "22.04.2025",
		img: "",
		isMain: true,
	},
];

export function News() {
	const navigate = useNavigate();
	const mainNews = newsList.find((news) => news.isMain);
	return (
		<FlexContainer className={styles.newsWrapper}>
			<MainNews mainNews={mainNews} />
			<div className={styles.otherNews}>
				{newsList.map(
					(news) =>
						!news.isMain && (
							<div className={styles.news} key={news.id}>
								<NewsDate />
								<Link to="#">{news.title}</Link>
							</div>
						)
				)}
			</div>
			<Button className={styles.btnMore} onClick={() => navigate("/aktualnosci") }>Więcej</Button>
		</FlexContainer>
	);
}
