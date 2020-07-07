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

export const MOCK_ARTIST_RESULTS = [
	{
		name: "Cher",
		listeners: "1189151",
		mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
		url: "https://www.last.fm/music/Cher",
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
		name: "Cheryl Cole",
		listeners: "630517",
		mbid: "2d499150-1c42-4ffb-a90c-1cc635519d33",
		url: "https://www.last.fm/music/Cheryl+Cole",
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
		name: "Cher Lloyd",
		listeners: "539010",
		mbid: "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
		url: "https://www.last.fm/music/Cher+Lloyd",
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
		name: "Black Stone Cherry",
		listeners: "335761",
		mbid: "1801bd47-46ae-49ff-bfcd-6e01b562d880",
		url: "https://www.last.fm/music/Black+Stone+Cherry",
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
		name: "Cheryl",
		listeners: "151290",
		mbid: "85df56ab-e125-4169-8ac8-e6666128d526",
		url: "https://www.last.fm/music/Cheryl",
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
		name: "Eagle-Eye Cherry",
		listeners: "888862",
		mbid: "4a5777b3-f55b-437c-8b23-d9ee7791c7fc",
		url: "https://www.last.fm/music/Eagle-Eye+Cherry",
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
		name: "Cherry Glazerr",
		listeners: "138031",
		mbid: "64a0c404-58af-4083-8fc6-a6725ef02ecb",
		url: "https://www.last.fm/music/Cherry+Glazerr",
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
		name: "Cherub",
		listeners: "169238",
		mbid: "abf42fca-8c2e-4d55-9fc8-6b1fc65a80f1",
		url: "https://www.last.fm/music/Cherub",
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
		name: "Neneh Cherry",
		listeners: "290720",
		mbid: "527c65d1-9fdb-4482-8796-dde2980bd63a",
		url: "https://www.last.fm/music/Neneh+Cherry",
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
		name: "Cherish",
		listeners: "340792",
		mbid: "e82500a8-70ce-46ad-a028-b0690420d560",
		url: "https://www.last.fm/music/Cherish",
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
		name: "Acid Black Cherry",
		listeners: "31316",
		mbid: "a3842d12-306c-498a-ae1d-03ee40e3f2ac",
		url: "https://www.last.fm/music/Acid+Black+Cherry",
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
		name: "Cherry Poppin' Daddies",
		listeners: "144273",
		mbid: "e23612fb-6dd6-4d5c-b638-2611bfc8c48a",
		url: "https://www.last.fm/music/Cherry+Poppin%27+Daddies",
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
		name: "CHERRY BULLET",
		listeners: "28686",
		mbid: "",
		url: "https://www.last.fm/music/CHERRY+BULLET",
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
		name: "Wild Cherry",
		listeners: "369563",
		mbid: "da5ff827-174b-48d1-9a39-9fa290bb2925",
		url: "https://www.last.fm/music/Wild+Cherry",
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
		name: "Cheryl Lynn",
		listeners: "232185",
		mbid: "c2b8f775-455c-44c3-97ca-f377938da19e",
		url: "https://www.last.fm/music/Cheryl+Lynn",
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
		name: "Cherry Ghost",
		listeners: "130224",
		mbid: "1e76c9f2-2f79-4521-a418-a3c22eda30fa",
		url: "https://www.last.fm/music/Cherry+Ghost",
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
		name: "Blue Cheer",
		listeners: "181763",
		mbid: "523b52d7-a819-4111-9085-69fc269c9638",
		url: "https://www.last.fm/music/Blue+Cheer",
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
		name: "Sonny & Cher",
		listeners: "311340",
		mbid: "c43d2302-02db-487b-b62d-8cb3c57f94c6",
		url: "https://www.last.fm/music/Sonny+&+Cher",
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
		name: "Don Cherry",
		listeners: "97848",
		mbid: "d45e4d9d-45c1-45cb-941a-8a5025874e06",
		url: "https://www.last.fm/music/Don+Cherry",
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
		name: "Nasty Cherry",
		listeners: "39558",
		mbid: "",
		url: "https://www.last.fm/music/Nasty+Cherry",
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
		name: "CHERNIKOVSKAYA HATA",
		listeners: "17617",
		mbid: "",
		url: "https://www.last.fm/music/CHERNIKOVSKAYA+HATA",
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
		name: "Cherri Bomb",
		listeners: "28255",
		mbid: "41db537e-1150-43b2-9a94-a7b8a08cd23d",
		url: "https://www.last.fm/music/Cherri+Bomb",
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
		name: "Cherokee",
		listeners: "54401",
		mbid: "ea71fddc-7e41-470f-8e13-6cd50ae981da",
		url: "https://www.last.fm/music/Cherokee",
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
		name: "Jeanne Cherhal",
		listeners: "70725",
		mbid: "1c964d5b-ddf8-443f-a722-4e3d57b55d3c",
		url: "https://www.last.fm/music/Jeanne+Cherhal",
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
		name: "Cheers Elephant",
		listeners: "54667",
		mbid: "89724b2e-c0ba-43ae-9fcb-75011deb059f",
		url: "https://www.last.fm/music/Cheers+Elephant",
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
		name: "Cherrelle",
		listeners: "67918",
		mbid: "2a0b3bf9-0d04-4e49-91f5-9530cbebab55",
		url: "https://www.last.fm/music/Cherrelle",
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
		name: "Cherish The Ladies",
		listeners: "72073",
		mbid: "c6c538ec-a3ca-43f0-8d73-6e88582de31f",
		url: "https://www.last.fm/music/Cherish+The+Ladies",
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
		name: "Cherrie",
		listeners: "16231",
		mbid: "",
		url: "https://www.last.fm/music/Cherrie",
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
		name: "Cherubs",
		listeners: "15439",
		mbid: "6106ec43-8658-4fc3-b8a6-5379831a6cfa",
		url: "https://www.last.fm/music/Cherubs",
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
		name: "Paul Cherry",
		listeners: "35315",
		mbid: "",
		url: "https://www.last.fm/music/Paul+Cherry",
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
