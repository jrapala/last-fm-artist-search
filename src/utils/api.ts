import { Artist, ArtistDetails } from "../types/artist"
import { ARTIST_SEARCH_URL, ARTIST_INFO_URL } from "../constants"

export async function searchArtists(query: string): Promise<Artist[]> {
	const result = await fetch(`${ARTIST_SEARCH_URL}${query}`).then(response =>
		response.json()
	)

	return result.results.artistmatches.artist
}

export async function fetchArtistDetails(id: string): Promise<ArtistDetails> {
	const result = await fetch(`${ARTIST_INFO_URL}${id}`).then(response =>
		response.json()
	)

	return result.artist
}
