import "styled-components/native"

declare module "styled-components" {
	export interface DefaultTheme {
		borderColor: string
		buttonBorderRadius: string
		panelBorderRadius: string
		primaryBackgroundColor: string
		secondaryBackgroundColor: string
		secondaryColor: string
		starColor: string
		textColorOnBackgroundColor: string
		textColorOnSecondaryColor: string
		fontWeight: {
			bold: number
			regular: number
		}
	}
}
