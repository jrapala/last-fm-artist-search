import React from "react"
import styled from "styled-components"

import Card from "../../components/atoms/Card"
import Logo from "../../components/atoms/Logo"
import Button from "../../components/atoms/Button"
import Footer from "../../components/organisms/Footer"

const LoginPage: React.FC = () => {
	return (
		<PageContainer>
			<Content>
				<Card>
					<Logo width={"50%"} />
					<h1>Artist Finder</h1>
					<Button>Log In</Button>
				</Card>
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
`

export default LoginPage
