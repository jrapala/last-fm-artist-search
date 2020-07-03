import React from "react"

interface Props {
	width: string
}

const LastFMLogo: React.FC<Props> = ({ width }) => (
	<svg width={width} viewBox="0 0 127 51" xmlns="http://www.w3.org/2000/svg">
		<title>last.fm Logo</title>
		<desc>last.fm The Social Music Revolution</desc>
		<g fill="#000" fillRule="nonzero">
			<path d="M0 45.2361h.8545v-1.6367h1.1328v1.6367h1.0235v.8977H1.9873v2.9145c0 .4963.0397.7498.5464.7498.1591 0 .318 0 .4768-.0422v.9293c-.2484.021-.4867.0632-.7353.0632-1.1824 0-1.401-.4858-1.421-1.394v-3.2206H0v-.8977zM3.8253 43.1559h1.1328v2.7986h.02c.2783-.4963.8644-.866 1.54-.866 1.1131 0 1.8184.6337 1.8184 1.8585v3.7487H7.2037V47.264c-.02-.8557-.338-1.2248-1.0035-1.2248-.7554 0-1.242.6334-1.242 1.4361v3.2207H3.8252v-7.5401zM10.413 48.2775c0 .8557.4372 1.6157 1.3813 1.6157.6557 0 1.0533-.3062 1.252-.9081h1.073c-.2484 1.1931-1.2024 1.8585-2.3253 1.8585-1.6096 0-2.514-1.1934-2.514-2.8723 0-1.5523.954-2.8827 2.4842-2.8827 1.6197 0 2.6131 1.5522 2.4244 3.189h-3.7755zm2.6433-.792c-.0397-.7603-.5266-1.4463-1.2919-1.4463-.785 0-1.3215.6334-1.3513 1.4463h2.6432zM18.6702 48.9429c.0594.6968.5565.9503 1.1626.9503.4272 0 1.1725-.0951 1.1426-.7183-.0298-.6337-.8545-.7073-1.6792-.9079-.8345-.19-1.6493-.507-1.6493-1.6157 0-1.193 1.2122-1.5627 2.1464-1.5627 1.0534 0 2.007.4645 2.1462 1.6788H20.757c-.0994-.5699-.5464-.7285-1.0432-.7285-.3281 0-.9342.0844-.9342.5594 0 .5915.8348.676 1.6693.8767.8247.2006 1.6595.5173 1.6595 1.5942 0 1.299-1.2322 1.7744-2.2954 1.7744-1.2917 0-2.2555-.6127-2.2755-1.901h1.1326v.0003zM22.734 47.9606c0-1.6685.9441-2.872 2.5935-2.872 1.6493 0 2.5934 1.2035 2.5934 2.872 0 1.6791-.9438 2.883-2.5934 2.883s-2.5934-1.2039-2.5934-2.883zm4.054 0c0-.9396-.4472-1.9217-1.4605-1.9217-1.0137 0-1.4607.982-1.4607 1.9217 0 .9503.4473 1.9326 1.4607 1.9326 1.0136 0 1.4606-.982 1.4606-1.9326zM32.3326 47.0632c-.0893-.6651-.5464-1.0243-1.1725-1.0243-.5861 0-1.411.3272-1.411 1.9851 0 .9081.3776 1.869 1.3612 1.869.6559 0 1.113-.4649 1.222-1.2464h1.1328c-.2087 1.4152-1.0333 2.1967-2.3548 2.1967-1.6097 0-2.494-1.2143-2.494-2.8196 0-1.6474.8446-2.9357 2.5337-2.9357 1.1925 0 2.2058.6337 2.3151 1.9746h-1.1325v.0006zM34.419 43.1559h1.1328v1.1407h-1.1327v-1.1407zm0 2.0802h1.1328v5.4596h-1.1327v-5.4596zM41.0862 49.4814c0 .2957.0597.4118.2684.4118.0696 0 .1589 0 .2783-.021v.834c-.1687.0635-.5267.1374-.7154.1374-.4571 0-.785-.1691-.8745-.6654-.4473.4648-1.1725.6654-1.7786.6654-.924 0-1.7586-.528-1.7586-1.5945 0-1.3622 1.0235-1.584 1.9774-1.7001.8148-.1584 1.54-.0635 1.54-.771 0-.623-.606-.7391-1.0631-.7391-.636 0-1.0833.2742-1.1328.866h-1.1328c.0794-1.4048 1.2023-1.8163 2.3351-1.8163 1.0035 0 2.0569.4328 2.0569 1.5837v2.809h-.0003zm-1.1328-1.5208c-.3478.243-.8942.2325-1.391.3277-.487.0847-.9241.2745-.9241.9081 0 .5385.6458.6968 1.0435.6968.4968 0 1.2716-.2744 1.2716-1.035v-.8976zM42.3384 43.1559h1.1328v7.5398h-1.1328zM47.4655 45.2361h1.0731v.7606h.0299c.3377-.5385.765-.9081 1.5797-.9081.6261 0 1.2122.285 1.4407.908.3776-.5594.8646-.908 1.6098-.908 1.083 0 1.719.5067 1.719 1.8372v3.77h-1.1328v-3.1893c0-.866-.0496-1.4676-.934-1.4676-.7652 0-1.093.5385-1.093 1.4571v3.1997H50.625v-3.506c0-.7497-.2186-1.1508-.9041-1.1508-.5864 0-1.123.5068-1.123 1.4149v3.242h-1.1327V45.236h.0002zM60.6213 50.6957h-1.113v-.7605h-.0198c-.2783.5492-.8942.9084-1.4606.9084-1.3412 0-1.9178-.7184-1.9178-2.1437V45.236h1.1328v3.3479c0 .9606.3678 1.3092.9838 1.3092.944 0 1.262-.6441 1.262-1.4888v-3.168h1.1328v5.4593h-.0002zM62.668 48.9429c.0595.6968.5566.9503 1.1627.9503.4272 0 1.1725-.0951 1.1423-.7183-.0295-.6337-.8545-.7073-1.6791-.9079-.8346-.19-1.6494-.507-1.6494-1.6157 0-1.193 1.2122-1.5627 2.1464-1.5627 1.0534 0 2.007.4645 2.1465 1.6788h-1.1827c-.0994-.5699-.5464-.7285-1.0434-.7285-.3279 0-.934.0844-.934.5594 0 .5915.8348.676 1.6693.8767.8247.2006 1.6595.5173 1.6595 1.5942 0 1.299-1.232 1.7744-2.2954 1.7744-1.2917 0-2.2555-.6127-2.2755-1.901h1.1328v.0003zM67 43.1559h1.1328v1.1407h-1.1327v-1.1407zm0 2.0802h1.1328v5.4596h-1.1327v-5.4596zM72.8324 47.0632c-.0895-.6651-.5464-1.0243-1.1725-1.0243-.5863 0-1.411.3272-1.411 1.9851 0 .9081.3774 1.869 1.3612 1.869.6557 0 1.1128-.4649 1.222-1.2464h1.1329c-.2087 1.4152-1.0334 2.1967-2.3549 2.1967-1.6096 0-2.494-1.2143-2.494-2.8196 0-1.6474.8447-2.9357 2.5337-2.9357 1.1925 0 2.2061.6337 2.3154 1.9746h-1.1328v.0006zM77.652 45.2361h1.0632v1.056h.0197c.1293-.5807.8052-1.2035 1.5003-1.2035.2586 0 .3281.021.4273.0317v1.1614c-.1589-.0213-.3281-.0527-.487-.0527-.7748 0-1.391.6653-1.391 1.869v2.5977H77.652v-5.4596zM81.8565 48.2775c0 .8557.4372 1.6157 1.381 1.6157.6557 0 1.0533-.3062 1.252-.9081h1.073c-.2482 1.1931-1.2024 1.8585-2.325 1.8585-1.6096 0-2.514-1.1934-2.514-2.8723 0-1.5523.954-2.8827 2.4839-2.8827 1.6197 0 2.6134 1.5522 2.4247 3.189h-3.7756zm2.643-.792c-.0397-.7603-.5264-1.4463-1.2919-1.4463-.7847 0-1.3215.6334-1.351 1.4463h2.643zM85.99 45.2361h1.232l1.3017 4.1923h.02l1.252-4.1923h1.1724l-1.8383 5.4596h-1.2716zM91.4151 47.9606c0-1.6685.944-2.872 2.5934-2.872s2.5934 1.2035 2.5934 2.872c0 1.6791-.944 2.883-2.5934 2.883-1.6493 0-2.5934-1.2039-2.5934-2.883zm4.0543 0c0-.9396-.4472-1.9217-1.4606-1.9217-1.0134 0-1.4606.982-1.4606 1.9217 0 .9503.4472 1.9326 1.4606 1.9326 1.0134 0 1.4606-.982 1.4606-1.9326zM97.5756 43.1559h1.1328v7.5398h-1.1328zM104.4515 50.6957h-1.1128v-.7605h-.02c-.278.5492-.8942.9084-1.4606.9084-1.3415 0-1.9178-.7184-1.9178-2.1437V45.236h1.1325v3.3479c0 .9606.3679 1.3092.9838 1.3092.9441 0 1.2618-.6441 1.2618-1.4888v-3.168h1.1328v5.4593h.0003zM105.1274 45.2361h.8545v-1.6367h1.1325v1.6367h1.0235v.8977h-1.0235v2.9145c0 .4963.0398.7498.5464.7498.159 0 .318 0 .4771-.0422v.9293c-.2484.021-.487.0632-.7353.0632-1.1827 0-1.401-.4858-1.421-1.394v-3.2206h-.8545v-.8977h.0003zM108.982 43.1559h1.1329v1.1407h-1.1328v-1.1407zm0 2.0802h1.1329v5.4596h-1.1328v-5.4596zM111.1088 47.9606c0-1.6685.944-2.872 2.5934-2.872 1.6493 0 2.5934 1.2035 2.5934 2.872 0 1.6791-.944 2.883-2.5934 2.883s-2.5934-1.2039-2.5934-2.883zm4.054 0c0-.9396-.4472-1.9217-1.4606-1.9217-1.0134 0-1.4606.982-1.4606 1.9217 0 .9503.4472 1.9326 1.4606 1.9326 1.0134 0 1.4606-.982 1.4606-1.9326zM117.2394 45.2361h1.073v.8028l.02.021c.3378-.602.9242-.9713 1.5998-.9713 1.1128 0 1.8183.6336 1.8183 1.8584v3.7487h-1.1327V47.264c-.0198-.8557-.3377-1.2248-1.0035-1.2248-.7552 0-1.2421.6334-1.2421 1.4361v3.2207h-1.1325v-5.4599h-.0003z" />
			<g>
				<path d="M122.1784 14.0722h1.906v.2849h-.7487v1.5985h-.412v-1.5985h-.745v-.285zM124.3511 14.0722h.5805l.6495 1.4745h.0064l.6332-1.4745h.5736v1.8834h-.3925v-1.4534h-.0066l-.6527 1.4534h-.3398l-.6527-1.4534h-.0066v1.4534h-.3925v-1.8834z" />
			</g>
			<g>
				<path d="M.0973.1566h3.6045v37.0401H.0973zM63.4953 37.7682V34.085c-4.8123-.6787-7.089-3.5891-7.089-9.0945v-8.5737h7.089v-3.2721h-7.089V7.2725h-3.648v5.8722h-2.487v3.272h2.487v7.6916c0 8.3141 2.5342 12.0998 10.737 13.6599zM65.109 23.851c0 1.5552 1.2668 2.8033 2.8528 2.8033 1.5826 0 2.907-1.2484 2.907-2.8033 0-1.562-1.3246-2.8594-2.907-2.8594-1.5863 0-2.8527 1.2973-2.8527 2.8594zM76.3598 37.1969h3.6499V16.1592h6.9766v-3.3728h-6.9766c.3125-4.3683 2.6398-7.436 6.9766-9.1463V0c-6.7147 1.9811-10.31 6.2884-10.6265 12.7864h-3.8113v3.373h3.8113V37.197zM87.6453 37.1969h3.5453V22.6523c0-4.3636 2.6951-7.0613 5.9214-7.0613 3.1691 0 5.9214 2.6977 5.9214 7.0613v14.5443h3.5923V22.6523c0-4.3636 2.7021-7.0613 5.9253-7.0613 3.1725 0 5.8674 2.6977 5.8674 7.0613v14.5443h3.5453V22.913c0-6.651-4.1283-10.8068-9.413-10.8068-3.1172 0-5.7636 1.4542-7.7732 4.261-2.1677-2.8578-4.601-4.261-7.6655-4.261-5.288 0-9.4667 4.1555-9.4667 10.8068v14.2839zM32.8063 31.4701l-.4856-1.062-4.1922-9.387c-1.3882-3.3215-4.8358-5.5653-8.7276-5.5653-5.2663 0-9.5373 4.1953-9.5373 9.3725 0 5.1738 4.271 9.3725 9.5373 9.3725 3.673 0 6.8657-2.0423 8.4587-5.0321l1.6953 3.8416c-2.4065 2.8824-6.0613 4.718-10.1543 4.718-7.252 0-13.13-5.7716-13.13-12.9 0-7.1272 5.878-12.9034 13.13-12.9034 5.4726 0 9.8903 2.8706 12.1351 7.9588.1713.3948 2.3761 5.4577 4.2983 9.767 1.1896 2.6661 2.2048 4.4373 5.498 4.5462 3.233.1074 5.4545-1.824 5.4545-4.2725 0-2.3887-1.694-2.963-4.5504-3.8975-5.1382-1.6628-7.79-3.3317-7.79-7.335 0-3.9045 2.7021-6.5082 7.0978-6.5082 2.8597 0 4.9264 1.2515 6.3585 3.746l-2.8096 1.4098c-1.057-1.4545-2.2246-2.029-3.7068-2.029-2.0636 0-3.5354 1.4098-3.5354 3.2837 0 2.6613 2.4229 3.0625 5.8106 4.1522 4.5587 1.4596 6.6791 3.1268 6.6791 7.2871 0 4.3703-3.816 7.5544-8.7964 7.5465-4.5924-.0181-7.0387-2.224-8.7376-6.1099z" />
			</g>
		</g>
	</svg>
)

export default LastFMLogo
