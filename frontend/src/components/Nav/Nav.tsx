import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { MENU_POSITIONS } from "../../constants/menuPositions";

interface NavProps {
	onHandleCloseMenu: () => void;
}

export function Nav({ onHandleCloseMenu }: NavProps) {
	return (
		<ul className={styles.nav}>
			{MENU_POSITIONS.map((link) => {
				return (
					<li
						key={link.name}
						className={styles.link}
						onClick={() => {
							onHandleCloseMenu();
						}}
					>
						<NavLink
							to={link.path}
							// className={({ isActive }) => (isActive ? styles.active : "")}
						>
							{link.name}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
}
