import React from "react"
import styled from "styled-components"

import { Artist } from "../../../types/artist"

interface Props {
	artist: Artist
}

const ArtistInfo: React.FC<Props> = ({ artist }) => {
	return (
		<div>
			<H2>{artist.name}</H2>
		</div>
	)
}

const H2 = styled.h2`
	font-weight: ${(props): number => props.theme.fontWeight.bold};
`

export default ArtistInfo
