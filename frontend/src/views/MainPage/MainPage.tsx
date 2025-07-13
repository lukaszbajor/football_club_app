import { AsideBlocks } from "../../components/AsideBlocks/AsideBlocks";
import { FlexContainer } from "../../components/FlexContainer/FlexContainter";
import { News } from "../../components/News/News";

export function MainPage() {
	return (
		<FlexContainer>
			<FlexContainer className="separateBlocks">
				<News />
				<AsideBlocks />
			</FlexContainer>
		</FlexContainer>
	);
}
