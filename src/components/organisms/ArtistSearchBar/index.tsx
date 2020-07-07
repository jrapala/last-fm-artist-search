import React, { useState } from "react"
import styled from "styled-components"

import Button from "../../atoms/Button"
import { searchArtists } from "../../../utils/api"
import { Artist } from "../../../types/artist"

interface Props {
	setSearchResults: React.Dispatch<React.SetStateAction<Artist[]>>
}

const ArtistSearchBar: React.FC<Props> = ({ setSearchResults }) => {
	const [query, setQuery] = useState("")

	const handleChangeQuery = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		setQuery(e.target.value)
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		searchArtists(query).then(results => {
			setSearchResults(results)
		})
	}
	return (
		<Form onSubmit={handleSubmit}>
			<label>Search for an Artist:</label>
			<input name="query" value={query} onChange={handleChangeQuery} />
			<Button type="submit" disabled={query.length < 1}>
				Search
			</Button>
		</Form>
	)
}

const Form = styled.form`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 2rem 0;

	label {
		font-size: ${(props): string => props.theme.typeScale.h3};
	}

	input {
		border-radius: ${(props): string => props.theme.panelBorderRadius};
		padding: 0.5rem;
		margin-top: 1rem;
	}

	button {
		margin-top: 1rem;
	}

	@media (min-width: 769px) {
		flex-direction: row;
		label {
			flex-shrink: 0;
			font-size: ${(props): string => props.theme.typeScale.h3};
		}

		input {
			border-radius: ${(props): string => props.theme.panelBorderRadius};
			flex: 2;
			padding: 0.5rem;
			margin-left: 1.5rem;
			margin-top: 0;
		}

		button {
			margin-left: 1.5rem;
			margin-top: 0;
		}
	}
`

export default ArtistSearchBar
