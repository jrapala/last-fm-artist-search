import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { ArrowLeft, Star } from "react-feather"
import DOMPurify from "dompurify"

import { fetchArtistDetails, fetchArtistTopAlbums } from "../../../utils/api"
import { FavoritesContext } from "../../FavoritesProvider"
import { Artist, ArtistDetails } from "../../../types/artist"
import { Album } from "../../../types/album"
import BaseButton from "../../atoms/BaseButton"
import TopAlbums from "../../molecules/TopAlbums"

interface Props {
	artist: Artist
	handleArtistSelect: (artist: Artist | null) => void
}

const ArtistInfo: React.FC<Props> = ({ artist, handleArtistSelect }) => {
	const [artistDetails, setArtistDetails] = useState<ArtistDetails>()
	const [artistTopAlbums, setArtistTopAlbums] = useState<Album[]>()
	const { favorites, handleSelection } = useContext(FavoritesContext)

	useEffect(() => {
		fetchArtistDetails(artist.mbid).then(details =>
			setArtistDetails(details)
		)

		fetchArtistTopAlbums(artist.mbid).then(albums =>
			setArtistTopAlbums(albums)
		)
	}, [artist.mbid])

	const handleStarPress = (): void => {
		handleSelection(artist)
	}

	const isFavorited =
		favorites.map(artist => artist.mbid).indexOf(artist.mbid) >= 0

	if (artistDetails) {
		return (
			<Container>
				<SubNav>
					<BaseButton onClick={(): void => handleArtistSelect(null)}>
						<ArrowLeft />
						<span>Go Back to Results</span>
					</BaseButton>
					<BaseButton onClick={handleStarPress}>
						{isFavorited ? <YellowStar /> : <Star />}
						<span>
							{isFavorited
								? "Remove from Favorites"
								: "Add to Favorites"}
						</span>
					</BaseButton>
				</SubNav>
				<h2>{artistDetails && artistDetails.name}</h2>
				{artistDetails.bio.summary && (
					<p
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(
								artistDetails.bio.summary
							),
						}}
					></p>
				)}
				{artistTopAlbums && <TopAlbums albums={artistTopAlbums} />}
			</Container>
		)
	}
	return null
}

const Container = styled.div`
	width: 60vw;

	h2 {
		text-align: center;
	}

	h2,
	h3,
	h4 {
		font-weight: ${(props): number => props.theme.fontWeight.bold};
	}
`

const SubNav = styled.div`
	display: flex;
	justify-content: space-between;

	span {
		margin-left: 0.25rem;
	}
`
const YellowStar = styled(Star)`
	fill: ${(props): string => props.theme.starColor};
	stroke: ${(props): string => props.theme.starColor};
`

export default ArtistInfo
