import React, { useState } from "react"
import styled from "styled-components"

import { Artist } from "../../types/artist"
import ArtistSearchBar from "../../components/organisms/ArtistSearchBar"
import Results from "../../components/organisms/SeearchResults"

const SearchPage: React.FC = () => {
	const [searchResults, setSearchResults] = useState<Artist[]>([])

	return (
		<PageContainer>
			<Content>
				<ArtistSearchBar setSearchResults={setSearchResults} />
				<Results results={searchResults} />
			</Content>
		</PageContainer>
	)
}

const PageContainer = styled.main`
	align-items: center;
	background-color: ${(props): string => props.theme.primaryBackgroundColor};
	display: flex;
	flex-direction: column;
`

const Content = styled.div`
	width: 50%;
`

export default SearchPage
