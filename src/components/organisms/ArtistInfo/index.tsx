import React, { useContext } from "react"
import styled from "styled-components"
import { ArrowLeft, Star } from "react-feather"
import DOMPurify from "dompurify"

import { FavoritesContext } from "../../FavoritesProvider"
import { MOCK_TOP_ALBUMS, MOCK_ARTIST_INFO } from "../../../constants"
import { Artist } from "../../../types/artist"
import BaseButton from "../../atoms/BaseButton"
import TopAlbums from "../../molecules/TopAlbums"

interface Props {
	artist: Artist
	handleArtistSelect: (artist: Artist | null) => void
}

interface IconProps {
	isFavorited: boolean
}

const ArtistInfo: React.FC<Props> = ({ artist, handleArtistSelect }) => {
	const { favorites, handleSelection } = useContext(FavoritesContext)

	const handleStarPress = (): void => {
		handleSelection(artist)
	}

	const isFavorited =
		favorites.map(artist => artist.mbid).indexOf(artist.mbid) >= 0

	return (
		<Container>
			<SubNav>
				<BaseButton onClick={(): void => handleArtistSelect(null)}>
					<ArrowLeft />
					<span>Go Back to Results</span>
				</BaseButton>
				<BaseButton onClick={handleStarPress}>
					<StyledStar isFavorited={isFavorited} />
					<span>
						{isFavorited
							? "Remove from Favorites"
							: "Add to Favorites"}
					</span>
				</BaseButton>
			</SubNav>
			<h2>{MOCK_ARTIST_INFO.name}</h2>
			<p
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(MOCK_ARTIST_INFO.bio.summary),
				}}
			></p>
			<TopAlbums albums={MOCK_TOP_ALBUMS} />
		</Container>
	)
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
const StyledStar = styled(Star)<IconProps>`
	fill: ${(props): string =>
		props.isFavorited ? props.theme.starColor : "none"};
	stroke: ${(props): string =>
		props.isFavorited
			? props.theme.starColor
			: props.theme.textColorOnBackgroundColor};
`
export default ArtistInfo
