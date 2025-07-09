import { AsideBlocks } from "../../components/AsideBlocks/AsideBlocks";
import { FlexContainer } from "../../components/FlexContainer/FlexContainter";
import { News } from "../../components/News/News";

export function MainPage() {
	return (
		<FlexContainer>
			<News />
			<FlexContainer>
				<AsideBlocks />
			</FlexContainer>
		</FlexContainer>
	);
}
