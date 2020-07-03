import React from "react"

interface Props {
	width: string
}

const Logo: React.FC<Props> = ({ width }) => (
	<svg width={width} viewBox="0 0 194 186" xmlns="http://www.w3.org/2000/svg">
		<title>Artist Finder Logo</title>
		<desc>A pair of headphones</desc>
		<g transform="translate(-624 -317)" fill="none" fillRule="evenodd">
			<path
				d="M798.854 416.095c0-43.268-35.268-78.681-78.359-78.681-43.088 0-78.356 35.413-78.356 78.68V446H635v-43.15c0-47.223 38.465-85.85 85.495-85.85C767.532 317 806 355.627 806 402.85V446h-7.146v-29.905z"
				fill="#F58A73"
			/>
			<path
				d="M649 486c-14.302-3.174-25-15.85-25-31 0-15.149 10.698-27.828 25-31v62zM793 486c14.307-3.174 25-15.85 25-31 0-15.149-10.697-27.828-25-31v62z"
				fill="#000"
				fillRule="nonzero"
			/>
			<path
				d="M668 407c-10.449 0-19 8.56-19 19.01v57.982c0 10.455 8.551 19.008 19 19.008s19-8.553 19-19.008V426.01c0-10.45-8.551-19.01-19-19.01zM774.001 407C763.548 407 755 415.56 755 426.01v57.982c0 10.455 8.548 19.008 19.001 19.008 10.45 0 18.999-8.553 18.999-19.008V426.01c0-10.45-8.548-19.01-18.999-19.01z"
				fill="#F58A73"
			/>
		</g>
	</svg>
)

export default Logo
