import React from "react"
import styled from "styled-components"

import { LOGIN_URL } from "../../constants"
import Panel from "../../components/atoms/Panel"
import Logo from "../../components/atoms/Logo"
import Button from "../../components/atoms/Button"
import Footer from "../../components/organisms/Footer"

const LoginPage: React.FC = () => {
	const redirectToLastFMLogin = (): void => {
		window.location.href = LOGIN_URL
	}

	return (
		<PageContainer>
			<Content>
				<Panel>
					<Logo width={"50%"} />
					<h1>Artist Finder</h1>
					<ButtonContainer>
						<Button onClick={redirectToLastFMLogin}>Log In</Button>
					</ButtonContainer>
				</Panel>
			</Content>
			<Footer />
		</PageContainer>
	)
}

const PageContainer = styled.main`
	align-items: center;
	background-color: ${(props): string =>
		props.theme.secondaryBackgroundColor};
	display: flex;
	flex-direction: column;
`

const Content = styled.div`
	align-items: center;
	display: flex;
	flex: 1;

	div:first-child {
		padding: 2rem;
	}
`

const ButtonContainer = styled.div`
	display: flex;
	width: 80%;
`

export default LoginPage
