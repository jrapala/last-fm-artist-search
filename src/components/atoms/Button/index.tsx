import React from "react"
import styled from "styled-components"

interface Props {
	componentStyle?: "primary" | "secondary"
	type?: "button" | "submit" | "reset"
	onClick?: () => void
	disabled?: boolean
}

interface ButtonProps {
	componentStyle?: "primary" | "secondary"
}

const Button: React.FC<Props> = ({
	children,
	componentStyle = "primary",
	type = "button",
	onClick = (): void => {},
	disabled = false,
}) => {
	return (
		<StyledButton
			type={type}
			componentStyle={componentStyle}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</StyledButton>
	)
}

export const StyledButton = styled.button<ButtonProps>`
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
	cursor: pointer;
	font-size: 1.125rem;
	font-weight: ${(props): number => props.theme.fontWeight.bold};
	padding: 0.75em;
	text-transform: uppercase;
	width: 80%;
	&:disabled {
		opacity: 0.5;
	}
	&:hover {
		opacity: 0.8;
	}
`

export default Button
