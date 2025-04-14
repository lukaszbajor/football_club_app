import { ReactNode } from "react";
import styles from "./FlexContainer.module.css";

interface FlexContainerProps {
	children: ReactNode;
	className?: string;
}

export function FlexContainer({ children, className }: FlexContainerProps) {
	return (
		<div className={`${styles.flexContainer} ${className}`}>{children}</div>
	);
}
