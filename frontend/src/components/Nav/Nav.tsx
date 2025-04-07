import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { MENU_POSITIONS } from "../../constants/menuPositions";

export function Nav() {
	return (
		<ul className={styles.nav}>
			{MENU_POSITIONS.map((link) => {
				return (
					<li key={link.name} className={styles.link}>
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
