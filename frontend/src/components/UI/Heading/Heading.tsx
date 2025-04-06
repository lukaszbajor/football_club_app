import { JSX, ReactNode } from "react";
import styles from "./Heading.module.css";

interface HeadingProps {
	children: ReactNode;
	className?: string;
	level: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({ children, className, level = 1 }: HeadingProps) {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;

	return <Tag className={`${styles.heading} ${className}`}>{children}</Tag>;
}
