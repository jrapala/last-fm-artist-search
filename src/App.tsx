import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"

import { GlobalStyle, lightTheme } from "./styles"

const App: React.FC = () => {
	const [theme] = useState(lightTheme)

	return (
		<ThemeProvider theme={theme}>
			<Main>
				<h1>Artist Finder</h1>
				<button>Log In</button>
			</Main>
			<Footer>
				<p>Powered by last.fm</p>
			</Footer>
			<GlobalStyle />
		</ThemeProvider>
	)
}

const Main = styled.main`
	align-items: center;
	background-color: ${(props): string => props.theme.backgroundColor};
	display: flex;
	flex-direction: column;
`

const Footer = styled.footer`
	display: flex;
	justify-content: center;
`

export default App
