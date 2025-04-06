import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
	onClick: () => void;
	className?: string;
	children: ReactNode;
	type?: "button" | "submit" | "reset";
}

export function Button({ onClick, className, children, type }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`${styles.button}${className}`}
			type={type}
		>
			{children}
		</button>
	);
}
