import React from "react"
import styled from "styled-components"

const Footer: React.FC = () => {
	return (
		<Container>
			<p>Powered by last.fm</p>
		</Container>
	)
}

const Container = styled.footer`
	display: flex;
	justify-content: center;
`

export default Footer
