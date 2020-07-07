export const AUTH_BASE_URL = `http://www.last.fm/api/auth/?api_key=${process.env.REACT_APP_API_KEY}`
export const LOGIN_URL = `${AUTH_BASE_URL}&cb=${process.env.REACT_APP_DOMAIN_NAME}auth`
export const API_BASE_URL = `http://ws.audioscrobbler.com/2.0/?api_key=${process.env.REACT_APP_API_KEY}&format=json`
export const ARTIST_SEARCH_URL = `${API_BASE_URL}&method=artist.search&artist=`

export const ACCESS_TOKEN_KEY = "last-fm-access-token"
export const ACCESS_TOKEN_EXPIRATION = "last-fm-access-token-expiration"

export const ROUTES = {
	AUTH: "/auth",
	FAVORITES: "/favorites",
	LOG_IN: "/login",
	SEARCH: "/search",
}

export const NULL_ALBUM = "(null)"

export const MOCK_ARTIST_RESULTS = [
	{
		name: "Radiohead",
		listeners: "4891686",
		mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
		url: "https://www.last.fm/music/Radiohead",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "The Radio Dept.",
		listeners: "601056",
		mbid: "e664d1cd-23ab-48d5-b8fa-e98485daa5be",
		url: "https://www.last.fm/music/The+Radio+Dept.",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "TV on the Radio",
		listeners: "1454099",
		mbid: "eb872766-98f6-453d-883f-2ae908a18315",
		url: "https://www.last.fm/music/TV+on+the+Radio",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Radio Moscow",
		listeners: "266365",
		mbid: "e9be437a-960f-4dcd-8e62-097598d80bfd",
		url: "https://www.last.fm/music/Radio+Moscow",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Go Radio",
		listeners: "189281",
		mbid: "6bcdd659-b1f6-4b6e-afc4-20f4473d7306",
		url: "https://www.last.fm/music/Go+Radio",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "State Radio",
		listeners: "234386",
		mbid: "e3003c05-9b18-415b-b4dc-2f2369eafb56",
		url: "https://www.last.fm/music/State+Radio",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "BBC Radio 4",
		listeners: "72480",
		mbid: "eda922db-3f45-4238-9457-351ecbfa4f55",
		url: "https://www.last.fm/music/BBC+Radio+4",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Bronze Radio Return",
		listeners: "179343",
		mbid: "4c2ca679-2c94-4156-a04c-f07aed50dee2",
		url: "https://www.last.fm/music/Bronze+Radio+Return",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "All India Radio",
		listeners: "119055",
		mbid: "53d2a4d1-556e-4701-a8ac-5fcb74a8e393",
		url: "https://www.last.fm/music/All+India+Radio",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "TBS RADIO 954kHz",
		listeners: "14766",
		mbid: "",
		url: "https://www.last.fm/music/TBS+RADIO+954kHz",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Beta Radio",
		listeners: "204536",
		mbid: "baee4cef-81b6-46d0-8841-43206d12e97c",
		url: "https://www.last.fm/music/Beta+Radio",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Radio Futura",
		listeners: "115986",
		mbid: "f7616ee5-bad8-45c9-986f-0cf47d4407df",
		url: "https://www.last.fm/music/Radio+Futura",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Red City Radio",
		listeners: "38581",
		mbid: "77f30941-342c-44e1-928f-2a496cb753ff",
		url: "https://www.last.fm/music/Red+City+Radio",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Radio 4",
		listeners: "145186",
		mbid: "3d1dc3db-4fc3-42b2-a8cd-4d8983637450",
		url: "https://www.last.fm/music/Radio+4",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Danger Radio",
		listeners: "72893",
		mbid: "0d2abdda-fdf8-46c5-b0dd-bd9306f7cae8",
		url: "https://www.last.fm/music/Danger+Radio",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Radio Birdman",
		listeners: "70441",
		mbid: "c2e2144d-d6c5-47d0-a4b4-aa859de5e0b4",
		url: "https://www.last.fm/music/Radio+Birdman",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "BBC Radio 5 Live",
		listeners: "33159",
		mbid: "",
		url: "https://www.last.fm/music/BBC+Radio+5+Live",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Radio Citizen",
		listeners: "74967",
		mbid: "452fec0f-6330-45e0-9d55-03c3d7a8a5e1",
		url: "https://www.last.fm/music/Radio+Citizen",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Radio Bagdad",
		listeners: "32317",
		mbid: "32190feb-fd35-4307-af7f-91168bdd7052",
		url: "https://www.last.fm/music/Radio+Bagdad",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Porridge Radio",
		listeners: "35905",
		mbid: "",
		url: "https://www.last.fm/music/Porridge+Radio",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
	{
		name: "Primitive Radio Gods",
		listeners: "155339",
		mbid: "2c7b3a60-86dd-4733-9c12-30b21b530280",
		url: "https://www.last.fm/music/Primitive+Radio+Gods",
		streamable: "0",
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "extralarge",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
				size: "mega",
			},
		],
	},
]

export const MOCK_ARTIST_INFO = {
	name: "Radiohead",
	mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
	url: "https://www.last.fm/music/Radiohead",
	image: [
		{
			"#text":
				"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
			size: "small",
		},
		{
			"#text":
				"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
			size: "medium",
		},
		{
			"#text":
				"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
			size: "large",
		},
		{
			"#text":
				"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
			size: "extralarge",
		},
		{
			"#text":
				"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
			size: "mega",
		},
		{
			"#text":
				"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
			size: "",
		},
	],
	streamable: "0",
	ontour: "0",
	stats: {
		listeners: "4891686",
		playcount: "527974972",
	},
	similar: {
		artist: [
			{
				name: "Thom Yorke",
				url: "https://www.last.fm/music/Thom+Yorke",
				image: [
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "small",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "medium",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "large",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "extralarge",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "mega",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "",
					},
				],
			},
			{
				name: "Atoms for Peace",
				url: "https://www.last.fm/music/Atoms+for+Peace",
				image: [
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "small",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "medium",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "large",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "extralarge",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "mega",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "",
					},
				],
			},
			{
				name: "Muse",
				url: "https://www.last.fm/music/Muse",
				image: [
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "small",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "medium",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "large",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "extralarge",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "mega",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "",
					},
				],
			},
			{
				name: "Gorillaz",
				url: "https://www.last.fm/music/Gorillaz",
				image: [
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "small",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "medium",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "large",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "extralarge",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "mega",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "",
					},
				],
			},
			{
				name: "The Strokes",
				url: "https://www.last.fm/music/The+Strokes",
				image: [
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "small",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "medium",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "large",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "extralarge",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "mega",
					},
					{
						"#text":
							"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
						size: "",
					},
				],
			},
		],
	},
	tags: {
		tag: [
			{
				name: "alternative",
				url: "https://www.last.fm/tag/alternative",
			},
			{
				name: "alternative rock",
				url: "https://www.last.fm/tag/alternative+rock",
			},
			{
				name: "rock",
				url: "https://www.last.fm/tag/rock",
			},
			{
				name: "indie",
				url: "https://www.last.fm/tag/indie",
			},
			{
				name: "electronic",
				url: "https://www.last.fm/tag/electronic",
			},
		],
	},
	bio: {
		links: {
			link: {
				"#text": "",
				rel: "original",
				href: "https://last.fm/music/Radiohead/+wiki",
			},
		},
		published: "01 Feb 2006, 19:27",
		summary:
			'\nRadiohead are an English alternative rock band from Abingdon, Oxfordshire, UK which formed in 1985. The band is composed of Thom Yorke (lead vocals, rhythm guitar, piano, beats), Jonny Greenwood (lead guitar, keyboard, other instruments), Ed O\'Brien (guitar, backing vocals), Colin Greenwood (bass guitar) and Phil Selway (drums, percussion).\n\nThe early years (1992 – 1995)\nRadiohead released their first single, "Creep" in 1992. The song was initially unsuccessful <a href="https://www.last.fm/music/Radiohead">Read more on Last.fm</a>',
		content:
			'\nRadiohead are an English alternative rock band from Abingdon, Oxfordshire, UK which formed in 1985. The band is composed of Thom Yorke (lead vocals, rhythm guitar, piano, beats), Jonny Greenwood (lead guitar, keyboard, other instruments), Ed O\'Brien (guitar, backing vocals), Colin Greenwood (bass guitar) and Phil Selway (drums, percussion).\n\nThe early years (1992 – 1995)\nRadiohead released their first single, "Creep" in 1992. The song was initially unsuccessful, but it became a worldwide hit several months after the release of their debut album, Pablo Honey (1993).  Radiohead\'s popularity rose in the United Kingdom with the release of their second album, The Bends (1995). The band\'s textured guitar parts and Yorke\'s falsetto singing were warmly received by critics and fans. \n\nInternational success (1996 - 2000)\nRadiohead\'s third album, OK Computer (1997), propelled them to greater international fame. Featuring an expansive sound and themes of modern alienation, OK Computer has often been acclaimed as a landmark record of the 1990s.\n\nA change in style and leaving EMI (2000 – 2003)\nKid A (2000) and Amnesiac (2001) marked a change in the band\'s musical style. Radiohead incorporated experimental electronic music, Krautrock, post-punk and jazz influences into their songs, dividing fans and critics, but they remained popular. Hail to the Thief (2003), a mix of guitar-driven rock, electronics and lyrics inspired by headlines, was the band\'s final album for their major record label, EMI. \n\nIndependent releases and touring (2005 - 2013)\nIn 2007, Radiohead independently released their seventh album, In Rainbows, originally as a digital download for which each customer could set their own price, later in stores, to critical and chart success.\n\nIn 2011, Radiohead released their eighth album, The King of Limbs - again independently - which was described as an exploration of rhythm and quieter textures.\n\nIn February 2012, Radiohead began The King of Limbs world tour - with concerts in the US, Canada, Mexico, Europe, Japan, Taiwan, South Korea, Australia and New Zealand. In early 2013, following the tour, Thom Yorke released a studio album entitled Amok with his band Atoms for Peace.\n\nNinth Studio Album - "A Moon Shaped Pool"  (2016)\nAfter much speculation, on May 8, 2016, Radiohead released their long awaited ninth album,"A Moon Shaped Pool" on various streaming services. The band announced the release of their latest 11-track album on Twitter. The first track from the album was "Burn the Witch".\n\nGlastonbury 2017\nOn October 20, 2016, Radiohead was announced as the headline act for the opening night at Glastonbury Music Festival in June 2017.\n\n\n\n <a href="https://www.last.fm/music/Radiohead">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.',
	},
}

export const MOCK_TOP_ALBUMS = [
	{
		name: "OK Computer",
		playcount: 70211905,
		mbid: "bdf93ecb-85e8-3505-98f7-e2e8c5052723",
		url: "https://www.last.fm/music/Radiohead/OK+Computer",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/62d26c6cb4ac4bdccb8f3a2a0fd55421.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/62d26c6cb4ac4bdccb8f3a2a0fd55421.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/62d26c6cb4ac4bdccb8f3a2a0fd55421.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/62d26c6cb4ac4bdccb8f3a2a0fd55421.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "In Rainbows",
		playcount: 78840196,
		mbid: "ea92a194-2d60-35c7-9d56-0e1dba20cd45",
		url: "https://www.last.fm/music/Radiohead/In+Rainbows",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/8d91b7dd13084606b99d756175917f7d.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/8d91b7dd13084606b99d756175917f7d.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/8d91b7dd13084606b99d756175917f7d.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/8d91b7dd13084606b99d756175917f7d.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "The Bends",
		playcount: 47289686,
		mbid: "42b46c84-2359-326a-87ee-bb056bd300c8",
		url: "https://www.last.fm/music/Radiohead/The+Bends",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/7b5ba94d58cf5af9474567aad6eaff4c.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/7b5ba94d58cf5af9474567aad6eaff4c.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/7b5ba94d58cf5af9474567aad6eaff4c.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/7b5ba94d58cf5af9474567aad6eaff4c.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Pablo Honey",
		playcount: 27183754,
		mbid: "661e10a1-8a01-4201-8f1b-e3a42684739d",
		url: "https://www.last.fm/music/Radiohead/Pablo+Honey",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/e6b38ee9858b906470ba6826825b9354.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/e6b38ee9858b906470ba6826825b9354.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/e6b38ee9858b906470ba6826825b9354.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/e6b38ee9858b906470ba6826825b9354.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Kid A",
		playcount: 45902331,
		mbid: "b13f061a-bd3c-3aaf-9a60-64a0c6f7aee5",
		url: "https://www.last.fm/music/Radiohead/Kid+A",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/248cb85037351002251836e5f2f0d76b.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/248cb85037351002251836e5f2f0d76b.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/248cb85037351002251836e5f2f0d76b.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/248cb85037351002251836e5f2f0d76b.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Amnesiac",
		playcount: 30374601,
		mbid: "d3f9b159-8eeb-4820-a258-19cc1ebfc770",
		url: "https://www.last.fm/music/Radiohead/Amnesiac",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/0b048bb20da240079c35329b19483bef.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/0b048bb20da240079c35329b19483bef.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/0b048bb20da240079c35329b19483bef.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/0b048bb20da240079c35329b19483bef.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Hail to the Thief",
		playcount: 39944609,
		mbid: "1fb1bcc2-1107-3b79-9fc4-db5b912651d8",
		url: "https://www.last.fm/music/Radiohead/Hail+to+the+Thief",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/d85c9d5f92f648a4b10cecf353149fe9.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/d85c9d5f92f648a4b10cecf353149fe9.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/d85c9d5f92f648a4b10cecf353149fe9.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/d85c9d5f92f648a4b10cecf353149fe9.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "The King of Limbs",
		playcount: 22738103,
		mbid: "5c545925-f48c-3d5b-b448-23a25f9ec048",
		url: "https://www.last.fm/music/Radiohead/The+King+of+Limbs",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/f47f0408a925403cbea2564add58000f.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/f47f0408a925403cbea2564add58000f.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/f47f0408a925403cbea2564add58000f.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/f47f0408a925403cbea2564add58000f.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "The Best Of",
		playcount: 12485498,
		mbid: "af8722d8-6248-4b9c-9d30-2183eafa2ed9",
		url: "https://www.last.fm/music/Radiohead/The+Best+Of",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/5a3111af580c4d77cdc8f59163dcc0bb.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/5a3111af580c4d77cdc8f59163dcc0bb.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/5a3111af580c4d77cdc8f59163dcc0bb.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/5a3111af580c4d77cdc8f59163dcc0bb.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "A Moon Shaped Pool",
		playcount: 16266898,
		url: "https://www.last.fm/music/Radiohead/A+Moon+Shaped+Pool",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/267decde8626b1263f0e3fcb3f43bc4a.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/267decde8626b1263f0e3fcb3f43bc4a.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/267decde8626b1263f0e3fcb3f43bc4a.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/267decde8626b1263f0e3fcb3f43bc4a.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Pablo Honey [COLLECTOR'S EDITION]",
		playcount: 1258724,
		url:
			"https://www.last.fm/music/Radiohead/Pablo+Honey+%5BCOLLECTOR%27S+EDITION%5D",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/dcc91f063e404f2382d57cb6f8a7e080.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/dcc91f063e404f2382d57cb6f8a7e080.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/dcc91f063e404f2382d57cb6f8a7e080.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/dcc91f063e404f2382d57cb6f8a7e080.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "OK Computer (Collector's Edition)",
		playcount: 2907285,
		url:
			"https://www.last.fm/music/Radiohead/OK+Computer+(Collector%27s+Edition)",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/2131f55230d643e3a1b2fabe05935226.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/2131f55230d643e3a1b2fabe05935226.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/2131f55230d643e3a1b2fabe05935226.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/2131f55230d643e3a1b2fabe05935226.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "OK Computer [COLLECTOR'S EDITION]",
		playcount: 1760302,
		url:
			"https://www.last.fm/music/Radiohead/OK+Computer+%5BCOLLECTOR%27S+EDITION%5D",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/3ab624c99d194517a81d5676145ed7f7.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/3ab624c99d194517a81d5676145ed7f7.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/3ab624c99d194517a81d5676145ed7f7.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/3ab624c99d194517a81d5676145ed7f7.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "OK Computer OKNOTOK 1997 2017",
		playcount: 4468445,
		url:
			"https://www.last.fm/music/Radiohead/OK+Computer+OKNOTOK+1997+2017",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/51214507c81379cd2ae8a0d77f1e0f29.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/51214507c81379cd2ae8a0d77f1e0f29.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/51214507c81379cd2ae8a0d77f1e0f29.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/51214507c81379cd2ae8a0d77f1e0f29.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "TKOL RMX 1234567",
		playcount: 1903912,
		mbid: "a1f9ca0a-c300-45b5-b62c-ae24c53da1bc",
		url: "https://www.last.fm/music/Radiohead/TKOL+RMX+1234567",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/68a0546781294ee1a4cef57949e56223.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/68a0546781294ee1a4cef57949e56223.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/68a0546781294ee1a4cef57949e56223.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/68a0546781294ee1a4cef57949e56223.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "My Iron Lung",
		playcount: 1652163,
		mbid: "13c58395-5df0-4db3-8513-5c2d87bfbd7c",
		url: "https://www.last.fm/music/Radiohead/My+Iron+Lung",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/543bc7a0790446ee8fb5038f21524869.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/543bc7a0790446ee8fb5038f21524869.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/543bc7a0790446ee8fb5038f21524869.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/543bc7a0790446ee8fb5038f21524869.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "The Bends [Collectors Edition]",
		playcount: 1328625,
		url:
			"https://www.last.fm/music/Radiohead/The+Bends+%5BCollectors+Edition%5D",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/687579853b0980946e39010cbee6141a.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/687579853b0980946e39010cbee6141a.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/687579853b0980946e39010cbee6141a.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/687579853b0980946e39010cbee6141a.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "I Might Be Wrong: Live Recordings",
		playcount: 2062535,
		mbid: "7ce97f3a-c4ae-44d3-a14c-fdbc6d8bd8ee",
		url:
			"https://www.last.fm/music/Radiohead/I+Might+Be+Wrong:+Live+Recordings",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/5b6ebc4770767c590752ebd70f2b12cf.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/5b6ebc4770767c590752ebd70f2b12cf.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/5b6ebc4770767c590752ebd70f2b12cf.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/5b6ebc4770767c590752ebd70f2b12cf.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Amnesiac (Collector's Edition)",
		playcount: 1492261,
		url:
			"https://www.last.fm/music/Radiohead/Amnesiac+(Collector%27s+Edition)",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/4859ecbbfc1a4b339b29aa8dcbb7e343.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/4859ecbbfc1a4b339b29aa8dcbb7e343.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/4859ecbbfc1a4b339b29aa8dcbb7e343.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/4859ecbbfc1a4b339b29aa8dcbb7e343.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Hail To The Thief (Retail)",
		playcount: 262202,
		url: "https://www.last.fm/music/Radiohead/Hail+To+The+Thief+(Retail)",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/03afab0aaa8d467ba074a35c1ed9d0f1.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/03afab0aaa8d467ba074a35c1ed9d0f1.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/03afab0aaa8d467ba074a35c1ed9d0f1.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/03afab0aaa8d467ba074a35c1ed9d0f1.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Towering Above the Rest (disc 1)",
		playcount: 316795,
		url:
			"https://www.last.fm/music/Radiohead/Towering+Above+the+Rest+(disc+1)",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/482ec3255867422cbb2759868a3f6a3b.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/482ec3255867422cbb2759868a3f6a3b.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/482ec3255867422cbb2759868a3f6a3b.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/482ec3255867422cbb2759868a3f6a3b.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "(null)",
		playcount: 2481041,
		url: "https://www.last.fm/music/Radiohead/(null)",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text": "",
				size: "small",
			},
			{
				"#text": "",
				size: "medium",
			},
			{
				"#text": "",
				size: "large",
			},
			{
				"#text": "",
				size: "extralarge",
			},
		],
	},
	{
		name: "Towering Above the Rest (disc 2)",
		playcount: 263978,
		url:
			"https://www.last.fm/music/Radiohead/Towering+Above+the+Rest+(disc+2)",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/b9cee665117c4f51829b73bb49aca90e.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/b9cee665117c4f51829b73bb49aca90e.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/b9cee665117c4f51829b73bb49aca90e.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/b9cee665117c4f51829b73bb49aca90e.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Burn the Witch",
		playcount: 547179,
		url: "https://www.last.fm/music/Radiohead/Burn+the+Witch",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/bf691b35cb72c43a2dd80a86b48eab39.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/bf691b35cb72c43a2dd80a86b48eab39.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/bf691b35cb72c43a2dd80a86b48eab39.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/bf691b35cb72c43a2dd80a86b48eab39.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Com Lag",
		playcount: 885836,
		url: "https://www.last.fm/music/Radiohead/Com+Lag",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/33da393ffa0e5577b00ca59883fff30c.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/33da393ffa0e5577b00ca59883fff30c.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/33da393ffa0e5577b00ca59883fff30c.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/33da393ffa0e5577b00ca59883fff30c.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "I Might Be Wrong",
		playcount: 1159360,
		mbid: "7d5d4dbe-3ccc-4c89-82f9-6f10c6591a96",
		url: "https://www.last.fm/music/Radiohead/I+Might+Be+Wrong",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/82c9a410e66249df9723be5aca1b8a52.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/82c9a410e66249df9723be5aca1b8a52.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/82c9a410e66249df9723be5aca1b8a52.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/82c9a410e66249df9723be5aca1b8a52.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Hail To The Thief (Collector's Edition)",
		playcount: 1749290,
		url:
			"https://www.last.fm/music/Radiohead/Hail+To+The+Thief+(Collector%27s+Edition)",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/cdd9e19938634cc2a356f975a0d4c2ab.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/cdd9e19938634cc2a356f975a0d4c2ab.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/cdd9e19938634cc2a356f975a0d4c2ab.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/cdd9e19938634cc2a356f975a0d4c2ab.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Kid A (Collector's Edition)",
		playcount: 1256227,
		url:
			"https://www.last.fm/music/Radiohead/Kid+A+(Collector%27s+Edition)",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/fee756e7886b43679f21470708c60df7.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/fee756e7886b43679f21470708c60df7.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/fee756e7886b43679f21470708c60df7.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/fee756e7886b43679f21470708c60df7.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "DeLuxe Collection",
		playcount: 165709,
		url: "https://www.last.fm/music/Radiohead/DeLuxe+Collection",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/89c0d82598544d009595341412b26710.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/89c0d82598544d009595341412b26710.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/89c0d82598544d009595341412b26710.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/89c0d82598544d009595341412b26710.png",
				size: "extralarge",
			},
		],
	},
	{
		name: "Com Lag: 2+2=5",
		playcount: 704130,
		url: "https://www.last.fm/music/Radiohead/Com+Lag:+2%252B2=5",
		artist: {
			name: "Radiohead",
			mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
			url: "https://www.last.fm/music/Radiohead",
		},
		image: [
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/34s/df3fbf6c1d3a425c8e1140f98c888dc6.png",
				size: "small",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/64s/df3fbf6c1d3a425c8e1140f98c888dc6.png",
				size: "medium",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/174s/df3fbf6c1d3a425c8e1140f98c888dc6.png",
				size: "large",
			},
			{
				"#text":
					"https://lastfm.freetls.fastly.net/i/u/300x300/df3fbf6c1d3a425c8e1140f98c888dc6.png",
				size: "extralarge",
			},
		],
	},
]
