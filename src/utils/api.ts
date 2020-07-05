import { Artist } from "../types/artist"
import { ARTIST_SEARCH_URL } from "../constants"

export async function searchArtists(query: string): Promise<Artist[]> {
	const result = await fetch(`${ARTIST_SEARCH_URL}${query}`).then(response =>
		response.json()
	)

	return result.results.artistmatches.artist
}
