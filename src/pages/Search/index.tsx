import React, { useState } from "react"

import { Artist } from "../../types/artist"
import Layout from "../../components/organisms/Layout"
import ArtistSearchBar from "../../components/organisms/ArtistSearchBar"
import SearchResults from "../../components/organisms/SearchResults"

import { MOCK_ARTIST_RESULTS } from "../../constants"

const SearchPage: React.FC = () => {
	const [searchResults, setSearchResults] = useState<Artist[]>([])

	return (
		<Layout>
			<ArtistSearchBar setSearchResults={setSearchResults} />
			<SearchResults results={MOCK_ARTIST_RESULTS} />
		</Layout>
	)
}

export default SearchPage
