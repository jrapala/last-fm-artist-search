import React from "react"
import styled from "styled-components"

import BaseButton from "../BaseButton"

interface Props {
	componentSize?: "large" | "small"
	componentStyle?: "primary" | "secondary"
	type?: "button" | "submit" | "reset"
	onClick?: () => void
	disabled?: boolean
}

interface ButtonProps {
	componentSize?: "large" | "small"
	componentStyle?: "primary" | "secondary"
}

const Button: React.FC<Props> = ({
	children,
	componentStyle = "primary",
	componentSize = "large",
	type = "button",
	onClick = (): void => {},
	disabled = false,
}) => {
	return (
		<StyledButton
			type={type}
			componentSize={componentSize}
			componentStyle={componentStyle}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</StyledButton>
	)
}

export const StyledButton = styled(BaseButton)<ButtonProps>`
	background-color: ${(props): string =>
		props.componentStyle === "primary"
			? props.theme.secondaryColor
			: "transparent"};
	border: ${(props): string =>
		props.componentStyle === "primary" ? "none" : "2px solid #000000"};
	border-radius: ${(props): string => props.theme.buttonBorderRadius};
	color: ${(props): string =>
		props.componentStyle === "primary"
			? props.theme.textColorOnSecondaryColor
			: props.theme.textColorOnBackgroundColor};
	font-size: 1.125rem;
	font-weight: ${(props): number => props.theme.fontWeight.bold};
	padding: 0.75rem;
	text-transform: uppercase;
	width: ${(props): string =>
		props.componentSize === "large" ? "80%" : "20%"};

	&:hover:not(:disabled) {
		opacity: 0.8;
	}
`

export default Button
