import React from "react"
import { Redirect } from "react-router"
import { renderRoutes } from "react-router-config"

import LoginPage from "../pages/Login"

const publicRoutes = [
	{
		component: LoginPage,
		path: "/login",
	},
	{
		component: (): JSX.Element => <Redirect to="/login" />,
		path: "*",
	},
]

export const Routes: React.FC = () => {
	return renderRoutes(publicRoutes)
}
