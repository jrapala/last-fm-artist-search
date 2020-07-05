import React, { useContext } from "react"
import { Redirect } from "react-router"
import { renderRoutes } from "react-router-config"

import { SessionContext } from "./SessionProvider"
import LoginPage from "../pages/Login"
import AuthCallbackPage from "../pages/AuthCallbackPage"
import SearchPage from "../pages/Search"

const publicRoutes = [
	{
		component: LoginPage,
		exact: true,
		path: "/login",
	},
	{
		component: AuthCallbackPage,
		exact: true,
		path: "/auth",
	},
	{
		component: (): JSX.Element => <Redirect to="/login" />,
		path: "*",
	},
]

const privateRoutes = [
	{
		component: SearchPage,
		exact: true,
		path: "/search",
	},
	{
		component: (): JSX.Element => <Redirect to="/search" />,
		path: "*",
	},
]

const Routes: React.FC = () => {
	const { isLoggedIn } = useContext(SessionContext)
	const routes = isLoggedIn ? privateRoutes : publicRoutes
	return renderRoutes(routes)
}

export default Routes
