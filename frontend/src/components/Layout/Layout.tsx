import { Outlet } from "react-router-dom";
import { MainContent } from "../MainContent/MainContent";
import { Navbar } from "../Navbar/Navbar";

export function Layout() {
	return (
		<>
			<Navbar />
			<MainContent>
				<Outlet />
			</MainContent>
		</>
	);
}
