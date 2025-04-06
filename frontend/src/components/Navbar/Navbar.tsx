import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { Button } from "../UI/Button/Button";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRightToBracket,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function Navbar() {
	const navigate = useNavigate();
	return (
		<div className={styles.navbar}>
			<Logo />
			<Nav />
			<div className={styles.buttons}>
				<Button onClick={() => console.log("Logowanie")}>
					<p>Logowanie</p>
					<FontAwesomeIcon icon={faArrowRightToBracket} />
				</Button>
				<Button onClick={() => navigate("/register")}>
					<p>Rejestracja</p>
					<FontAwesomeIcon icon={faUserPlus} />
				</Button>
			</div>
		</div>
	);
}
