import React, { useState } from "react"

import { Artist } from "../../types/artist"
import Layout from "../../components/organisms/Layout"
import ArtistSearchBar from "../../components/organisms/ArtistSearchBar"
import SearchResults from "../../components/organisms/SearchResults"
import ArtistInfo from "../../components/organisms/ArtistInfo"

import { MOCK_ARTIST_RESULTS } from "../../constants"

const SearchPage: React.FC = () => {
	const [searchResults, setSearchResults] = useState<Artist[]>(
		MOCK_ARTIST_RESULTS
	)
	const [selectedArtist, setSelectedArtist] = useState<Artist | null>()

	const handleArtistSelect = (artist: Artist | null): void => {
		setSelectedArtist(artist)
	}

	return (
		<Layout>
			<ArtistSearchBar setSearchResults={setSearchResults} />
			{selectedArtist ? (
				<ArtistInfo
					artist={selectedArtist}
					handleArtistSelect={handleArtistSelect}
				/>
			) : (
				<SearchResults
					results={searchResults}
					handleArtistSelect={handleArtistSelect}
				/>
			)}
		</Layout>
	)
}

export default SearchPage
