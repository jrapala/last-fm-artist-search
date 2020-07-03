import React from "react"
import styled from "styled-components"

import Footer from "../../components/organisms/Footer"

const LoginPage: React.FC = () => {
	return (
		<PageContainer>
			<LoginContainer>
				<h1>Artist Finder</h1>
				<button>Log In</button>
			</LoginContainer>
			<Footer />
		</PageContainer>
	)
}

const PageContainer = styled.main`
	align-items: center;
	background-color: ${(props): string => props.theme.secondaryColor};
	display: flex;
	flex-direction: column;
`

const LoginContainer = styled.div`
	align-items: center;
	background-color: ${(props): string => props.theme.backgroundColor};
	display: flex;
	flex-direction: column;
`

export default LoginPage
