import React from "react"
import styled from "styled-components"
import { ArrowLeft, Star } from "react-feather"
import DOMPurify from "dompurify"

import { MOCK_TOP_ALBUMS, MOCK_ARTIST_INFO } from "../../../constants"
import { Artist } from "../../../types/artist"
import BaseButton from "../../atoms/BaseButton"
import TopAlbums from "../../molecules/TopAlbums"

interface Props {
	artist: Artist
	handleArtistSelect: (artist: Artist | null) => void
}

const ArtistInfo: React.FC<Props> = ({ artist, handleArtistSelect }) => {
	return (
		<Container>
			<SubNav>
				<BaseButton onClick={(): void => handleArtistSelect(null)}>
					<ArrowLeft />
					<span>Go Back to Results</span>
				</BaseButton>
				<BaseButton>
					<Star />
					<span>Add to Favorites</span>
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

const Row = styled.li`
	display: flex;
	margin-bottom: 1rem;

	h4 {
		margin-left: 1rem;
	}
`
export default ArtistInfo
