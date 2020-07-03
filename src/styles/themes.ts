import { DefaultTheme } from "styled-components/native"
import { neutral, orange, yellow } from "./colors"

export const lightTheme: DefaultTheme = {
	backgroundColor: neutral[100],
	borderColor: neutral[200],
	secondaryColor: orange[500],
	starColor: yellow[500],
	textColorOnBackgroundColor: neutral[900],
	textColorOnSecondaryColor: neutral[100],
}
