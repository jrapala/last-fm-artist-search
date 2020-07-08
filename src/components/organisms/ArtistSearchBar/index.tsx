import React from "react"
import styled from "styled-components"

import Button from "../../atoms/Button"
interface Props {
	handleChangeQuery: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	query: string
}

const ArtistSearchBar: React.FC<Props> = ({
	handleSubmit,
	handleChangeQuery,
	query,
}) => {
	return (
		<Form onSubmit={handleSubmit}>
			<label htmlFor="query">Search for an Artist:</label>
			<input name="query" value={query} onChange={handleChangeQuery} />
			<ButtonContainer>
				<Button type="submit" disabled={query.trim().length < 1}>
					Search
				</Button>
			</ButtonContainer>
		</Form>
	)
}

const Form = styled.form`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 2rem 0;
	width: 80vw;

	label {
		font-size: ${(props): string => props.theme.typeScale.h3};
	}

	input {
		border-radius: ${(props): string => props.theme.panelBorderRadius};
		padding: 0.75rem;
		margin-top: 1rem;
		width: 100%;
	}

	button {
		margin-top: 1rem;
	}

	@media (min-width: 769px) {
		flex-direction: row;
		justify-content: space-between;
		width: 60vw;

		label {
			font-size: ${(props): string => props.theme.typeScale.h3};
			margin: 0 1rem 0 0;
			flex-shrink: 0;
		}

		input {
			border-radius: ${(props): string => props.theme.panelBorderRadius};
			padding: 0.75rem;
			margin: 0 1rem 0 0;
		}

		button {
			margin-top: 0;
			min-width: 100px;
		}
	}
`

const ButtonContainer = styled.div`
	width: 100%;

	@media (min-width: 769px) {
		width: auto;
	}
`

export default ArtistSearchBar
