import { FlexContainer } from "../../components/FlexContainer/FlexContainter";
import { News } from "../../components/News/News";

export function NewsPage() {
	return (
		<FlexContainer>
			<h1>Aktualności</h1>
			<News />
		</FlexContainer>
	);
}
