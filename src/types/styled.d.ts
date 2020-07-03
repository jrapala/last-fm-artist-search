import "styled-components/native"

declare module "styled-components" {
	export interface DefaultTheme {
		backgroundColor: string
		borderColor: string
		secondaryColor: string
		starColor: string
		textColorOnBackgroundColor: string
		textColorOnSecondaryColor: string
	}
}
