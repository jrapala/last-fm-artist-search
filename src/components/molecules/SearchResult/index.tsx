import React from "react"
import styled from "styled-components"

import { Artist } from "../../../types/artist"
import Button from "../../atoms/Button"

interface Props {
	artist: Artist
	handleArtistSelect: (artist: Artist) => void
}

const SearchResult: React.FC<Props> = ({ artist, handleArtistSelect }) => {
	return (
		<Item>
			<span>{artist.name}</span>
			<ButtonContainer>
				<Button
					variant="secondary"
					onClick={(): void => handleArtistSelect(artist)}
				>
					Select
				</Button>
			</ButtonContainer>
		</Item>
	)
}

const Item = styled.li`
	align-items: center;
	border-bottom: 1px solid ${(props): string => props.theme.borderColor};
	display: flex;
	justify-content: space-between;
	padding: 1rem 0;
`

const ButtonContainer = styled.div`
	display: flex;
	width: 100px;
`
export default SearchResult
