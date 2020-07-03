import { DefaultTheme } from "styled-components/native"
import { neutral, orange, yellow } from "./colors"
import { fontWeight } from "./typography"

export const lightTheme: DefaultTheme = {
	borderColor: neutral[200],
	buttonBorderRadius: "40px",
	fontWeight: {
		bold: fontWeight.bold,
		regular: fontWeight.regular,
	},
	panelBorderRadius: "8px",
	primaryBackgroundColor: neutral[100],
	secondaryBackgroundColor: neutral[200],
	secondaryColor: orange[500],
	starColor: yellow[500],
	textColorOnBackgroundColor: neutral[900],
	textColorOnSecondaryColor: neutral[100],
}
