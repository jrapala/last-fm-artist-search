import React from "react"
import styled from "styled-components"
import { sanitizeUrl } from "@braintree/sanitize-url"

import { ReactComponent as Slash } from "../../../assets/slash.svg"
import { Album } from "../../../types/album"
import { NULL_ALBUM } from "../../../constants"

interface Props {
	album: Album
}

const AlbumInfo: React.FC<Props> = ({ album }) => {
	const image =
		album.image && Array.isArray(album.image)
			? album.image.find(image => image.size === "medium")
			: album.image

	if (album.name !== NULL_ALBUM) {
		return (
			<Row>
				{image && image["#text"] ? (
					<img
						src={sanitizeUrl(image["#text"])}
						alt={`${album.name} album cover`}
					/>
				) : (
					<Slash />
				)}
				<h4>{album.name}</h4>
			</Row>
		)
	}
	return null
}

const Row = styled.li`
	display: flex;
	margin-bottom: 1rem;

	h4 {
		margin-left: 1rem;
	}
`
export default AlbumInfo
