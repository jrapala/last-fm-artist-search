import React from "react"
import styled from "styled-components"

import { Artist } from "../../../types/artist"
import Button from "../../atoms/Button"

interface Props {
	artist: Artist
	handleClick: (artist: Artist) => void
	variant: "select" | "remove"
}

const ArtistListItem: React.FC<Props> = ({ artist, handleClick, variant }) => {
	const label = variant === "select" ? "Select" : "Remove"
	return (
		<Item>
			<span>{artist.name}</span>
			<ButtonContainer>
				<Button
					variant="secondary"
					onClick={(): void => handleClick(artist)}
				>
					{label}
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
export default ArtistListItem
