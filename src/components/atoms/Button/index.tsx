import React from "react"
import styled from "styled-components"

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
	width: ${(props): string =>
		props.componentSize === "large" ? "80%" : "20%"};
	&:disabled {
		opacity: 0.5;
	}
	&:hover {
		opacity: 0.8;
	}
`

export default Button
