import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { Button } from "../UI/Button/Button";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRightToBracket,
	faUserPlus,
	faBars,
	faX,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar() {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

	useEffect(() => {
		function handleResize() {
			const isNowDesktop = window.innerWidth > 992;
			if (isNowDesktop !== isDesktop) {
				setIsDesktop(isNowDesktop);
				setIsMenuOpen(false);
			}
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return (
		<div className={styles.wrapper}>
			<div className={styles.navbar}>
				<Logo />
				{(isDesktop || isMenuOpen) && <Nav />}
				<div className={styles.buttons}>
					<Button
						onClick={() => console.log("Logowanie")}
						className={styles.navigationBtns}
					>
						<FontAwesomeIcon icon={faArrowRightToBracket} />
					</Button>
					<Button
						onClick={() => navigate("/rejestracja")}
						className={styles.navigationBtns}
					>
						<FontAwesomeIcon icon={faUserPlus} />
					</Button>
					<Button
						className={styles.hamburger}
						onClick={() => {
							setIsMenuOpen((prev) => !prev);
						}}
					>
						<FontAwesomeIcon icon={isMenuOpen ? faX : faBars} />
					</Button>
				</div>
			</div>
		</div>
	);
}
