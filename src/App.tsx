import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router } from "react-router-dom"

import { GlobalStyle, lightTheme } from "./styles"
import Routes from "./components/Routes"
import AuthProvider from "./components/AuthProvider"

const App: React.FC = () => {
	const [theme] = useState(lightTheme)

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</Router>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App
