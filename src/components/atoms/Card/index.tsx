import React from "react"
import styled from "styled-components"

const Card: React.FC = ({ children }) => {
	return <CardContainer>{children}</CardContainer>
}

const CardContainer = styled.div`
	align-items: center;
	background-color: ${(props): string => props.theme.primaryBackgroundColor};
	border-radius: ${(props): string => props.theme.panelBorderRadius};
	display: flex;
	flex-direction: column;
	padding: 2.5em;
`

export default Card
