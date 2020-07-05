import React from "react"

import { Artist } from "../../../types/artist"

interface Props {
	results: Artist[]
}

const SearchResults: React.FC<Props> = ({ results }) => {
	return (
		<ul>
			{results.map(artist => (
				<li key={`${artist.name}-${artist.mbid}`}>{artist.name}</li>
			))}
		</ul>
	)
}

export default SearchResults
