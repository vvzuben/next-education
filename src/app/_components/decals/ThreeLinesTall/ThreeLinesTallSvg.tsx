import { Color, colorNameToCode } from "@app/helpers"

export type Props = {
  fill: Color
}

export default function ThreeLinesTallSvg(props: Props): JSX.Element {
  const fill = colorNameToCode(props.fill)
  return <svg viewBox="0 0 499 380" fill={fill}>
    <path d="M481.74 307.078c1.274.263 2.134.551 2.709.8.573.233.865.387 1.016.476.307.152.066-.087.472.169-1.108-.82-2.01-1.017-2.724-1.263-.707-.184-1.233-.299-1.619-.349-.77-.137-.992-.115-.957-.089.069.053 1.196.313 1.096.264l.007-.008ZM400.029 315.356l1.414-.313-11.893 2.17 10.479-1.857ZM324.541 328.936c7.178-1.06 27.294-5.211 40.765-7.515l2.233-.329 6.026-1.325c-16.353 2.929-37.518 7.059-49.024 9.169ZM284.271 336.037c2.507-.366-8.658 1.8 9.364-1.794-.915.162-1.172.211-1.702.298-1.623.317-3.866.749-7.67 1.489l.008.007Z" />
    <path d="M291.941 334.547c-5.206.913 7.925-1.554 0 0ZM255.355 341.799l10.414-2.167c-2.199.356-11.489 2.179-8.047 1.448-10.692 2.172-8.472 1.805-2.367.719ZM245.507 343.974l5.398-1.108c-.955.158-2.391.428-5.398 1.108ZM262.354 340.507l-11.449 2.359c1.515-.249 1.695-.18 5.262-1.075-.923.278 1.329-.255 6.187-1.284ZM268.858 339.274c5.872-1.087 13.44-2.532 2.987-.368 19.964-3.954 16.976-3.601-2.987.368ZM320.762 329.983l7.852-1.405 6.763-1.376c-3.378.684-15.119 2.779-14.615 2.781ZM190.317 354.47c-.64.194 3.54-.519 4.338-.579l7.694-1.594c-3.967.74-11.482 2.17-12.032 2.173ZM194.655 353.891l-11.511 2.367c10.304-2.005 12.176-2.433 11.511-2.367ZM243.712 344.679l18.901-3.974-22.56 4.703 3.659-.729ZM146.239 362.978l6.514-1.389-11.617 2.435 5.103-1.046ZM116.971 368.431c4.832-.994-6.683.986-1.574-.014-7.943 1.472-14.731 2.719-20.8453 3.854 6.5113-1.118 13.4403-2.299 22.4193-3.84ZM84.2841 374.084c3.2577-.543 6.6158-1.147 10.2763-1.806-3.4581.609-6.8487 1.201-10.2763 1.806ZM163.474 360.04c-.904.129-2.639.361-9.117 1.559l4.571-.688c1.39-.263 2.96-.566 4.546-.871ZM159.095 360.889l-.158.029c-4.925.937-8.346 1.587-9.812 1.861 1.261-.239 4.261-.802 9.97-1.89ZM164.623 359.825c-.416.079-.733.137-1.14.222.441-.059.704-.117 1.14-.222ZM213.446 350.489c-6.755 1.437-20.867 4.33-7.164 1.794 4.834-1.088-3.002.37 7.164-1.794ZM170.3 358.958l12.257-2.343c-.248.002-2.477.362.876-.342l-13.14 2.693.007-.008ZM164.313 360.176l5.987-1.218-4.546.871-1.441.347ZM105.392 370.745c-5.303 1.003-11.1095 2.003-17.6812 3.075 7.0561-1.098 14.3282-2.317 21.2292-3.534.968-.23 3.981-.865-3.554.468l.006-.009ZM131.513 366.085c-.37.073-.838.166-1.177.235.728-.113 1.303-.221 1.177-.235ZM51.318 369.769c-.3165.182-.5894.342-.9039.539-.0634.047-.1116.092-.1881.157l1.092-.696Z" />
    <path d="M110.132 370.104c5.293-.901 8.44-1.515 11.434-2.125-3.948.714-8.137 1.475-12.628 2.292-.435.105-.516.139 1.185-.174l.009.007ZM66.2197 376.785c2.7692-.316 5.9148-.713 9.2085-1.161-2.7108.347-8.23 1.007-9.2085 1.161ZM128.544 366.59c.264-.058.498-.098.786-.151-1.736.286-1.523.257-.786.151Z" />
    <path d="M128.544 366.59c-2.708.54-4.835.964-6.978 1.389 3.21-.607 6.186-1.175 8.768-1.675-.652.103-1.313.199-1.783.277l-.007.009ZM67.7185 358.5c-.3611.312-3.5839 2.276-8.0031 4.965-4.4107 2.696-10.0457 6.083-15.1268 9.441-2.4583 1.715-3.7912 2.869-4.3348 3.438-.2784.292-.3337.4-.2642.399.0629.007.2769-.13.6396-.372 1.4399-.99 5.2728-3.431 9.7763-6.07.2931-.24.1794-.395 10.6887-6.834-1.8792 1.064-7.7669 4.531-11.9969 7.187-4.2301 2.657-6.8279 4.429-2.5883 1.438 6.8111-4.496 9.7271-6.148 11.7006-7.318 1.9928-1.141 3.0797-1.759 6.5349-3.723-2.9657 1.627 1.4647-1.094 6.2679-3.982 4.7967-2.88 9.9554-5.947 8.3288-5.195l-12.3581 7.267c-.2592.088 4.1925-2.59.7288-.632l.0066-.009ZM47.1263 378.74c1.6679-.037 3.3496-.145 5.0226-.261-2.2813.143-4.2992.226-6.3705.201-1.0334-.024-2.0906-.054-3.16-.174-.5337-.053-1.0867-.134-1.6046-.243l-.2081-.049s-.0887-.027-.1385-.051c-.0887-.027-.173-.078-.2572-.129-.069-.052-.1791-.123-.1152-.224.0421-.091.1252-.164.1912-.25.0831-.074.1379-.127.2495-.22.2647-.221.5513-.453.8465-.678 3.2064-2.551 5.401-3.921 6.6598-4.817 1.2847-.876 1.759-1.211 1.9908-1.389-2.0988 1.334-4.1936 2.698-6.2107 4.122-1.0118.716-2.0064 1.445-2.934 2.212l-.569.494c-.0898.082-.1796.163-.2673.26-.0725.095-.1603.192-.2069.307-.0512.138.098.211.1842.277.1426.082.2963.131.45.18l.3034.068c.1842.045.3729.066.5702.094.7676.122 1.5727.177 2.3758.217 1.6127.071 3.2654.036 4.9075-.02l-1.7161.082.0066-.009ZM74.7054 375.837c-3.8897.799-15.9552 2.372-8.5398 1.645 7.3763-.963 9.9471-1.43 11.7804-1.737 1.8312-.322 2.9254-.538 7.3117-1.272-23.7448 3.661 6.8152-1.104-10.3742 1.363 4.6643-.739 8.8524-1.392 12.8121-2.014-4.2793.665-8.4039 1.27-12.2826 1.804.2131-.028.3653-.049.5413-.064l.1065-.015-.0132.018c1.0197-.137 1.3565-.166.1999-.012-.0761.011-.3718.058-.4935.074-.1568.044-.5941.134-1.0618.227-6.8918.937-1.0845.114 1.0618-.227.074-.025.2632-.058.285-.069l-.0913.012c-7.9276 1.184-15.872 2.299-23.8272 2.929 5.0495-.35 11.3894-1.011 22.5652-2.636l.0197-.026ZM193.755 355.157c-.742.13-.707.103-.761.102-1.521.327-2.108.452.761-.102Z" />
    <path d="M184.004 356.956c1.717-.369 3.127-.712 8.722-1.793 4.852-.896-.003.094.262.105 3.359-.713 11.762-2.447 1.185-.461l-1.664.354c-9.525 1.807-21.8 3.959-20.144 3.598 2.815-.376 5.285-.729 11.646-1.812l-.007.009ZM128.772 367.133l-19.719 3.649 10.081-1.641-.527-.007c11.233-2.005 8.781-1.692 10.163-2.016l.002.015ZM53.3108 368.627l-2.1444 1.573c3.2004-2.132 6.446-4.215 9.7108-6.27-2.535 1.547-5.068 3.109-7.5664 4.697ZM75.6922 355.344l-.7526.627 5.914-3.501-5.1614 2.874ZM385.634 98.1508l5.425-2.2895c-2.565 1.0864-4.215 1.7793-5.425 2.2895ZM345.926 113.688l-.946.452c1.828-.748 2.576-1.065.946-.452ZM345.7 152.157c-8.31 2.148-17.614 4.507-16.567 4.405l2.593-.532c5.767-1.646 10.204-2.874 13.974-3.873ZM16.0059 229.316c-.7796.251-1.5877.522-2.3826.775-1.9437.756-3.7697 1.464-5.404 2.101 2.3398-.863 5.0044-1.846 7.8018-2.878l-.0152.002ZM21.4722 226.579l10.7353-3.587c-2.4175.803-5.8719 1.962-10.7353 3.587ZM297.363 86.8355l-6.702 1.5461c10.544-2.1215 5.885-1.2821 6.702-1.5461ZM310.004 227.507c6.543-3.485 11.743-6.247 16.312-8.686-7.903 4.154-14.312 7.427-16.312 8.686ZM370.793 106.253c3.343-1.353 4.765-1.962 4.647-1.969-3.437 1.404-5.383 2.199-4.647 1.969ZM345.145 208.63c-1.15.61-2.287 1.204-3.458 1.825-4.758 2.595-9.545 5.194-15.356 8.364 5.84-3.065 12.5-6.612 18.814-10.189ZM361.13 13.5353c.577-.201 1.272-.4488 1.797-.6351.166-.0919-.623.2072-1.797.6351ZM143.977 8.7312c2.41-.2213 6.358-.5786 10.077-.9206-1.817.142-4.848.4078-10.077.9206ZM167.454 304.627c-4.851 2.647-.755.434 0 0ZM143.489 316.837c1.021-.585 1.79-1.036 1.893-1.135-.376.259-1.044.65-1.893 1.135ZM392.929 181.255c.144-.081.26-.143.419-.226-1.455.76-1.209.634-.419.226ZM160.106 308.522c1.828-.981 3.94-2.099 6.231-3.327-1.012.538-2.906 1.55-6.231 3.327ZM161.13 308.075c-1.675.905-2.998 1.616-4.255 2.296-.602.359-.05.084 4.255-2.296ZM174.219 300.943c-2.782 1.495-5.374 2.902-7.873 4.259.962-.509 1.368-.718 1.108-.575 1.423-.771 3.437-1.868 6.765-3.684ZM-71.3456 147.104c.3338-.169.7025-.365 1.058-.544 2.4722-1.322 3.196-1.643 2.7796-1.456-.4144.203-1.9345.94-3.8376 2ZM207.774 193.172c.246-.072.373-.112.604-.181-.246.071-.569.153-.793.214l.181-.04.008.007ZM188.709 198.702c8.075-2.52 12.714-3.798 18.885-5.49l-6.469 1.259-12.424 4.224.008.007Z" />
    <path d="M425.979 63.1505c4.604-.5533 9.214-1.0609 13.807-1.3494-8.298.7913-15.463 1.9424-18.925 2.4669-3.457.555-3.227.5397 3.249-.2637.46-.2086 4.044-.8037 9.187-1.4368 2.57-.3046 5.532-.623 8.662-.7858 1.562-.077 3.183-.1232 4.752-.0308.757.0459 1.577.1533 2.081.3337.13.0446.173.0776.208.1039.103.0791.233.178.308.2764.18.1927.29.3718.344.5503.115.3333.028.8406-.282 1.4241-.294.5814-.772 1.1721-1.279 1.7277-1.035 1.1219-2.271 2.1313-3.502 3.0625-2.486 1.8579-5.012 3.4115-7.222 4.7291-4.436 2.622-7.643 4.2975-7.989 4.6613-2.731 1.3563-5.492 2.6624-8.263 3.9466 2.366-1.1294 2.733-1.341 5.058-2.4882-8.049 3.8096-11.052 5.2177-14.597 6.977-3.563 1.7309-7.69 3.7694-18.324 8.1723-7.424 3.0444-12.649 5.0364-7.603 2.9211a1467.1804 1467.1804 0 0 1-16.535 6.7793c-4.844 1.886-3.695 1.33 1.119-.552-8.445 3.343-16.93 6.615-25.428 9.849l.19-.087c-3.607 1.465-11.811 4.692-15.825 6.243-6.529 2.32 3.238-1.27 1.546-.718l-14.124 5.357c-5.832 1.964 5.877-2.45 15.661-6.082-13.432 4.328-11.675 4.55-40.43 14.535l13.394-4.904c-8.755 2.82-19.18 6.699-34.451 11.876 3.65-1.146 30.583-10.337 15.197-4.687-4.367 1.513-10.107 3.535-18.412 6.589-.037-.042-.575.107-1.517.412-.941.319-2.29.778-3.949 1.34-3.322 1.165-7.901 2.776-12.998 4.564l.606-.507c-11.008 3.926-10.086 3.757-16.539 6.122-12.313 4.24-14.936 4.9-17.892 5.729-19.732 6.741 13.724-4.351-9.594 3.721-16.44 5.528-27.929 9.564-47.518 16.388-11.527 3.802 1.956-.843-2.197.479l-10.122 3.661c-2.498.837-1.713.507-1.318.331-8.555 2.986-.615.5-14.098 5.144-3.538 1.519-27.864 8.944-44.4687 14.919-4.1462 1.313 1.9336-.831.6365-.511-22.8502 7.979-19.5998 6.801-38.3149 13.5l-16.0731 5.316c11.832-3.843-3.1255 1.533-16.2016 6.324 4.201-1.367 7.7877-2.52 10.1921-3.306-6.9817 2.466-13.9593 4.963-20.909 7.495-2.5418.859-.4626.015 2.9303-1.313-1.4162.53-2.7584 1.035-3.813 1.431-7.5147 2.592-3.6942 1.044 1.614-1.021 2.5743-.848 5.1181-1.691 7.6031-2.511 5.1185-1.977 9.9124-3.834 8.7791-3.62-1.3594.491-3.9757 1.429-6.8492 2.472 1.3401-.52 2.1856-.858 1.5607-.666-.7208.228-2.8887 1.044-6.2963 2.321l-4.8635 1.393-1.1144.529c-9.1425 3.219-18.2891 6.409-27.3097 10.077-1.1925.524-2.383 1.062-3.5476 1.621-.6041.289-1.1275.545-1.7844.904-.8293.459-1.7022.94-2.2174 1.489-.2652.276-.4544.541-.5679.851-.0578.147-.073.381.0321.53l.3329.404c.0898.151.2933.225.4399.337.1685.101.3151.213.5119.295.4135.139.7722.331 1.2101.419.4292.082.9081.189 1.3028.245l.9958.091c.6554.036 1.3175.064 1.9668.055 5.2251-.079 10.4287-.898 15.9828-1.818 11.1025-1.941 23.5806-4.716 39.6226-8.525-7.9248 2.074-1.6332.76-2.0034 1.12-4.4224.87-10.6459 2.344-17.8866 3.916-7.2406 1.571-15.4902 3.301-24.0124 4.44 4.4437-.594 6.1639-.878 6.5113-.886.339-.014-.701.202-1.821.399 10.0667-1.694 20.0034-3.897 29.9193-6.198-.6243.37 6.3692-1.254 14.1501-3.014-2.9878.477 2.5377-.889 10.2876-2.823 7.7498-1.934 17.7352-4.469 23.7299-6.091.7822-.058-2.0599.872-16.7586 4.532 16.2957-3.765 20.8089-5.809 36.7434-9.727-3.5741.957-5.5088 1.433-6.9047 1.883 8.3286-2.298 28.7433-7.698 23.9833-6.28l-3.565.964c23.744-6.271 72.059-19.821 75.485-21.193.245-.017-2.978 1.304-4.387 1.771l41.826-13.071c-3.629 1.353 10.838-1.951-8.713 3.767 5.634-1.543 12.61-3.467 24.439-6.929-3.849 1.048-9.688 2.27-4.454.75 14.487-3.741 10.047-2.652 27.855-7.393-5.771 1.561.484-.724 9.575-3.286-1.401.474.894.26-2.42 1.253l22.487-6.878c-5.622 1.689-.886.676 4.216-.617-2.379.573 19.56-5.534 25.577-7.275l-9.621 2.594c25.574-7.127 25.053-7.785 50.43-14.817-3.048.95-7.422 2.704 5.499-.812 5.854-1.866 25.875-8.414 48.352-14.547l4.358-1.001 17.274-4.616c-10.723 3.036-40.707 11.822-57.061 16.664 9.61-2.508 2.711-.58 17.06-4.48 5.101-1.239-7.777 2.31-11.989 3.477 11.145-3.015 22.296-5.985 33.464-8.887-.783.058 5.604-1.701 12.019-3.426 6.423-1.718 12.877-3.386 12.207-3.351-12.136 3.132-24.238 6.399-36.324 9.734-1.539.136 20.776-6.517 44.631-12.253 6.092-1.356-4.409 1.604-3.892 1.589 1.53-.429 7.171-1.857 12.727-3.172 5.547-1.323 11.003-2.509 12.108-2.703-3.381.777-6.752 1.576-10.119 2.406 6.658-1.471 12.081-2.738 17.867-3.945 2.887-.595 5.878-1.165 9.157-1.665 1.642-.235 3.353-.471 5.159-.635 1.799-.155 3.72-.272 5.67-.107.158.025.323.042.497.065.102.01.197.028.301.053.199.043.394.11.578.209.069.053.16.095.202.182.043.088.003.194-.041.269-.093.175-.237.311-.367.444l-.214.192-.403.348c-.306.257-.621.509-.936.76-1.292.994-2.656 1.919-3.899 2.759-2.497 1.658-4.521 2.912-4.83 3.209 3.96-2.357 6.378-3.679 7.247-3.904.866-.239.202.701-2.284 2.559-.813.581-7.09 4.611-13.993 8.655-6.892 4.065-14.362 8.262-17.199 9.811-8.203 4.457 11.79-7.578 4.816-3.78-.255.243-4.652 2.921-6.503 4.021-5.197 2.902 2.023-1.432-9.181 5.022-1.719 1.337-22.903 12.912-5.191 3.234-10.97 6.291-11.732 6.555-24.707 13.788 4.232-2.122-11.342 7.046-22.413 13.218.616-.43-1.923.854-3.156 1.483-22.749 12.443-35.053 18.958-56.3 30.472-1.996 1.002-12.294 6.468-7.985 3.995-3.034 1.698-5.793 3.306-12.351 6.862-12.814 6.631 14.608-7.938 4.783-2.985-.742.594-16.855 9.377-26.16 14.509 3-1.315 21.621-11.61 30.925-16.757.056.07-.906.702-2.735 1.79-1.83 1.089-4.51 2.648-7.895 4.556-6.775 3.841-16.334 9.161-27.42 15.227-17.636 9.614-7.778 3.921-10.827 5.622-33.243 17.841-27.994 15.8-55.685 30.436-11.05 5.698-.716-.137-3.226 1.02 14.357-7.844 22.179-11.786 31.938-17.063l-12.075 6.377c4.549-2.537 14.135-7.767 19.404-10.532-9.27 4.763-56.13 30.178-81.799 43.901-4.509 2.539-12.311 6.866-8.557 4.939l8.077-4.417c7.522-3.871-15.105 8.501-4.818 3.013-10.798 6.013-22.855 12.813-38.153 21.084l-2.989 1.337c.364-.118 10.045-5.331 14.293-7.742-6.308 3.569-23.556 12.496-30.334 16.662l10.759-5.728c-10.795 6.097-24.0662 13.772-37.521 21.294 6.2307-3.218 3.0691-1.781 12.7757-6.866-4.2363 2.147 4.3603-2.666 12.3583-7.088 7.99-4.429 15.364-8.481 8.59-4.982 10.013-5.109 17.105-9.24 30.149-16.01-.437.144-4.644 2.34 6.725-3.811.511-.293 1.696-.985 2.458-1.428.347-.186.469-.256.766-.412-.232.124-.406.209-.637.333.489-.282.532-.304-.232.124-2.727 1.441-4.935 2.595-5.853 3.028 5.536-3.257 23.626-13.071 29.693-16.468 6.773-3.624-2.781 1.618.952-.298l9.064-5.084c.995-.318 18.097-9.412 2.243-.718l14.325-7.73c8.489-4.457 20.112-10.673 27.231-14.606 6.775-3.608 16.97-9.385 11.153-6.083l22.424-12.213.231-.07c22.191-11.926 45.499-24.885 70.986-38.282 7.44-4.084 15.115-8.316 27.598-15.049l2.508-1.172c9.537-5.255 28.771-15.547 32.777-17.965 5.255-2.638 16.836-8.995 29.161-15.932 12.333-6.93 25.375-14.466 33.66-19.299l.513-.564c5.113-3.007 10.103-5.997 15.281-9.268 2.593-1.64 5.231-3.34 7.925-5.203 1.346-.939 2.712-1.903 4.077-2.992.343-.27.678-.548 1.017-.848.353-.319.605-.523 1.177-1.11.473-.513.895-1.065 1.061-1.621.078-.282.127-.559.047-.866-.073-.316-.315-.5-.486-.741-.441-.282-.853-.583-1.46-.719-.523-.209-1.276-.278-1.614-.318-.847-.073-1.706-.074-2.564-.06l1.04.193c-3.637.022-7.649.604-12.028 1.275-4.373.716-9.095 1.602-14.04 2.619-9.905 2.037-20.743 4.561-31.564 7.278 1.459-.443 6.956-1.79 10.864-2.684-26.04 5.842-54.406 14.334-77.81 20.428-5.796 1.665-10.003 2.808-14.087 3.896.538-.149 1.015-.29 1.433-.408-.59.164-1.478.414-2.391.66-2.572.685-5.221 1.379-8.086 2.142 2.447-.645 4.782-1.251 6.817-1.787-4.469 1.272-11.253 3.193-17.894 5.072l-2.887.594c-.538.15-.978.278-1.537.438-6.55 1.758-5.219 1.573-1.699.738-3.337.988-6.392 1.892-8.761 2.596-5.389 1.169-17.412 5.03-24.736 6.729-4.432 1.436-33.377 9.595-36.811 10.96-.246.017-2.203.558 1.385-.472-7.423 2.061-14.831 4.12-21.45 6.112l-3.215.631-16.079 4.929c-9.873 2.62-13.967 3.686-4.271.726-23.507 6.889-19.057 5.59-39.054 11.445l.933-.434c-7.166 2.011-18.567 5.432-22.932 6.495-16.123 4.13-79.4123 22.059-121.0928 31.471 4.0951-.71-.7527.394-6.8272 1.71-6.0658 1.321-13.3816 2.795-14.1708 3.148-2.4638.399-8.304 1.497-1.5528.029-10.6515 2.245-18.7242 3.618-25.9772 4.401-3.6078.358-7.0847.653-10.3624.293-.5119-.063-.7656-.107-1.1202-.269-.0888-.027-.1598-.095-.2354-.139-.0975-.033-.1137-.155-.0458-.226.1055-.138.2628-.236.4114-.341.1572-.099.3144-.197.4869-.298.3555-.179.7025-.365 1.0646-.553.7984-.401 1.6292-.79 2.4753-1.182 1.1656-.435.108.055-.9607.577-1.0687.523-2.1399 1.084-1.1458.641 1.5227-.776 6.2597-2.827 8.4053-3.578 2.0934-.737-2.9404 1.237-6.0583 2.653 5.0683-2.18 9.1079-3.711 12.2416-4.951 3.1357-1.224 5.3868-2.114 7.0236-2.79 3.2823-1.344 4.138-1.838 4.8456-2.281 10.6794-3.658 15.9989-5.523 23.6272-8.424 3.7541-1.176 9.9872-3.217-3.0784 1.364 3.6811-1.259 14.9378-5.117 25.3667-8.68 5.2145-1.781 10.22-3.503 13.9665-4.794 3.7444-1.306 6.2299-2.18 6.3896-2.317 2.3364-.715 10.3174-3.47 12.254-4.163 16.564-5.582 18.0234-6.079 34.2825-11.567l-4.519 1.479c6.313-2.485 13.492-4.637 26.595-9.107l-.366.158c30.131-9.944 12.939-4.487 42.676-14.308l-1.68.356c2.623-1.357 26.333-8.692 43.456-14.791l-6.235 2.026c9.339-3.37 26.416-8.479 35.843-11.714 2.062-.678-3.218 1.189-6.078 2.214 24.712-8.359 3.102-1.359 21.433-7.859 3.429-1.055-4.232 1.89 8.117-2.433 6.194-2.043 35.602-13.168 52.441-19.128-3.736 1.258-7.443 2.497 1.005-.708 12.981-4.809 35.194-12.742 46.683-17.708 1.651-.624 2.281-.839 2.35-.841 4.9-1.995 12.861-5.2426 20.29-8.4194 7.431-3.1616 14.31-6.2804 17.182-7.6788 2.303-.8499 7.208-2.9769 13.16-5.9021 5.933-2.9537 13.023-6.5809 19.259-11.093 1.543-1.1434 3.031-2.3568 4.32-3.7761.641-.7129 1.219-1.4872 1.631-2.402.408-.8909.564-2.0968.039-3.0722-.243-.4864-.603-.8566-.954-1.166-.159-.1491-.44-.3362-.662-.4381-.232-.1085-.466-.1779-.682-.2341-.882-.223-1.702-.276-2.507-.3311-1.598-.0731-3.07-.0234-4.426.0338-5.398.2877-8.835.7082-8.799.5174-10.809 1.2354-21.535 2.9862-32.23 4.7871l.832-.2117c-20.527 3.4556-27.712 5.0429-34.88 6.5197-4.737.8344-1.291.1338-.91.0287-29.894 5.5205-32.842 6.1778-57.789 11.4477l-2.639.3062c-6.753 1.4523-43.158 8.323-72.305 14.5647.283-.0843.873-.2484 3.199-.7528-32.806 6.9711-78.78 15.5461-90.665 18.7611l-21.651 4.605c28.073-5.642-4.117 1.185 7.459-1.036-11.025 2.287-28.58 5.554-15.027 2.767l2.131-.393c4.903-1.391-34.9066 6.895-34.2077 6.445-27.6245 5.52-54.9321 10.803-81.8664 15.634-13.4649 2.403-26.8421 4.71-40.1275 6.717-6.6427 1.004-13.2717 1.936-19.8643 2.678-3.3039.372-6.5987.696-9.8793.894-1.6446.096-3.2781.159-4.9044.16-.8143-.007-1.6153-.032-2.4052-.089-.3926-.041-.7919-.072-1.1647-.139-.3795-.057-.7783-.144-.971-.195.2141.095.7817.228 1.2196.317.4682.084.9583.158 1.4529.208.9827.109 1.981.162 2.986.206-1.5158.016-3.0356.002-4.5018-.189-.3556-.053-.7437-.117-1.0405-.194-.2968-.076-.483-.137-.7164-.26-.2161-.111-.4054-.31-.4075-.558-.0021-.247.1475-.461.2925-.651.2505-.327.8769-.915 1.4389-1.346.5817-.457 1.1979-.888 1.8334-1.291 1.269-.82 2.5873-1.561 3.9334-2.268 2.14-1.083 3.6373-1.702 3.0982-1.39-.2729.161-1.0408.558-2.459 1.305-1.3923.767-3.5211 1.818-6.059 3.691 2.6647-1.967 7.5578-4.472 11.7794-6.438 4.2283-1.975 7.7814-3.495 7.9452-3.602 5.9646-2.37 8.4171-3.201 8.7828-3.304.3744-.096-1.3015.577-3.4983 1.467-4.3891 1.756-10.7655 4.521-7.1342 3.005 3.2868-1.368 6.5971-2.678 9.92-3.951l-2.2593.829c4.0209-1.614 6.2111-2.495 9.2398-3.651 3.0373-1.15 6.9111-2.589 14.3777-5.136 9.4697-3.147 4.9097-1.454 8.6384-2.703 0 0 .0761-.01.2613-.074.1851-.063.4834-.15.9211-.293.8755-.288 2.3065-.765 4.5454-1.514 7.346-2.407 14.7-4.752 22.082-7.063l-8.913 2.562c9.7508-3.247 20.8048-6.537 10.5076-3.612 7.5565-2.164 28.2248-8.504 48.2358-14.431 20.0069-5.957 39.3139-11.5885 43.9611-12.8601 13.777-4.1877 27.442-8.105 44.372-12.9155-4.229 1.1538-6.819 1.5929 7.795-2.5286-5.183 2.0789 26.812-7.3702 38.742-10.3043-10.626 2.7288 41.518-11.8447 24.854-7.5268 12.2-3.4116.806.0007 10.092-2.4948 28.939-8.4909 63.989-17.9687 99.659-28.8849.532-.2493-5.472 1.4747 2.139-.9752 6.311-1.8037 12.617-3.6531 18.896-5.5766 3.492-1.1713 5.07-1.8237 7.368-2.704 2.295-.9107 5.348-1.8841 11.668-4.3783-1.798.6895-4.469 1.6815.113-.2552 1.171-.5127 2.289-1.0107 3.485-1.6817.74-.4319 1.485-.942 1.858-1.5726.194-.2892.302-.753.059-1.0613-.214-.2734-.56-.4828-.84-.7241-.326-.181-.654-.3773-.994-.541l-.902-.3752c-.528-.2393-1.067-.3918-1.61-.5748-1.074-.3832-2.173-.6081-3.256-.8893-2.186-.4823-4.387-.893-6.594-1.1867-4.416-.6414-8.87-1.053-13.32-1.38-8.91-.6604-17.878-.9414-26.859-1.0965-17.968-.2865-36.035.0211-54.119.548-36.168 1.1077-72.405 3.1465-108.138 5.776 10.025-.6735 3.352-.1303-4.289.5345 4.974-.3936-.097.1989.889.2143-10.319.7903-20.642 1.674-30.943 2.7099-2.797.4589-11.07 1.3785-19.033 2.4659-7.9595 1.0636-15.5842 2.369-17.1562 2.8347 3.2237-.6244 6.4682-1.1509 9.7061-1.6688-6.4402 1.1859-1.8946.6017 4.0441-.0524 5.936-.6693 13.274-1.3325 12.349-1.0152 14.487-2.1683 38.416-3.5846 62.324-5.85 5.288-.3039-4.499.4696-1.664.354 6.057-.6312 13.384-1.2077 26.991-1.9726l-1.539.136c19.102-1.1973 32.759-1.814 47.01-2.3321 14.256-.4876 29.103-.946 50.586-1.075l-3.184-.1787c9.234-.0488 11.181.0318 15.503.097 5.304-.1279-1.179-.191-7.791-.1748-6.606.0075-13.331.1008-8.498-.1269 6.122.1423 22.415.0097 38.186.5433 7.884.2864 15.632.7148 21.894 1.3882 6.266.6343 11.015 1.5176 12.968 2.1086 1.535.3526 2.663.6277 3.451.902.397.1251.728.228.994.3086.253.0978.442.1734.58.2246.563.2114.347.1008-.01-.0761-.35-.1856-.874-.3944-.852-.405 0 0 .172.008.524.1545.18.069.409.1622.703.2778.212.08.392.149.627.288.067.0374.158.0795.26.1434.093.0573.231.1085.273.25.008.2932-.319.5074-.616.7175-.173.1005-.254.1345-.5.2604-.268.1365-.537.273-.814.403-.554.26-1.118.498-1.691.7295-1.052.5355-2.131 1.036-3.21 1.5365-4.313 1.6916-7.654 2.7731-9.919 3.5017-2.273.7221-3.483 1.0542-3.661 1.0547 2.145-.6971 6.064-2.0882 8.321-2.932-11.354 4.0033-32.339 10.5794-36.321 11.7311l13.073-3.9465c-18.482 5.8388-39.175 11.8725-59.703 17.8143-20.539 5.92-40.921 11.7958-58.938 16.9917l2.766-.6871c-27.489 7.9872-22.089 6.1426-52.304 14.8195l1.093-.3397c-6.023 1.8194-14.091 4.1523-22.366 6.505 7.601-2.2937-14.421 3.8865-4.44.9109-29.79 8.7285-14.72 4.368-34.324 10.3877l-4.586 1.1549c-6.6673 2.0915-7.2101 2.3189-22.2698 6.7556 12.3175-3.7449-9.686 2.5722 4.1015-1.6479-31.7159 8.924-46.7967 14.246-61.4025 18.196-7.1618 2.452-.3357.386 7.2872-1.918 7.6143-2.311 16.0255-4.86 11.9883-3.601 6.8312-1.912-11.8609 3.917-21.7507 6.934-5.0278 1.555-9.3379 2.743-15.5472 4.556-6.2072 1.829-14.3196 4.237-26.878 8.44 2.4896-.844 2.6681-.898 5.1577-1.742-9.449 3.013-18.3663 6.296-29.8568 10.317-6.3161 2.579-14.754 5.682-16.4232 6.811 7.4573-3.196 15.0461-6.046 22.6537-8.813-6.4683 2.367-12.6962 4.795-19.872 7.837-3.5815 1.54-7.4095 3.205-11.5454 5.291-2.0573 1.065-4.2064 2.197-6.3239 3.68a17.58 17.58 0 0 0-1.5484 1.222c-.4554.417-1.099.991-1.4138 1.707-.1551.346-.1981.777.0181 1.12.201.345.5333.572.9052.747.7915.359 1.5093.456 2.2206.563-.4576-.063-1.1765-.052-2.3165-.527-.5104-.226-1.101-.705-1.049-1.417.0343-.671.5678-1.315 1.0699-1.847 1.843-1.857 4.3465-3.291 6.3764-4.445-1.4836.779-2.9155 1.597-4.2681 2.545-.6797.478-1.3334.976-1.9511 1.569-.5807.581-1.5752 1.543-1.3522 2.574.2534 1.028 1.5765 1.424 2.437 1.603.8431.166 1.6827.248 2.5182.299 1.6777.093 3.3629.069 5.0918.024-.4916.089-2.576.313-5.7532.126-.3993-.032-.8071-.07-1.2495-.135-.4338-.058-.863-.14-1.4931-.335-.6083-.205-1.2004-.521-1.5516-1.063-.3684-.555-.2728-1.288.0756-1.869.863-1.308 1.6537-1.824 2.5418-2.539.8875-.661 1.8289-1.267 2.8114-1.855 3.9338-2.322 8.4035-4.345 12.7221-6.223 4.3205-1.863 8.4981-3.521 11.922-4.908-3.357 1.192-9.847 3.802-14.5698 5.959-4.7248 2.142-7.7098 3.741-4.4403 1.894-2.3677 1.293-5.0184 2.669-7.7562 4.553-.6796.478-1.3618.995-2.0317 1.604-.2957.279-.7273.701-1.1122 1.24-.3499.512-.5485 1.112-.4215 1.714.1574.599.6268 1.039 1.2148 1.325.5815.294 1.2684.45 1.6889.525.9518.168 1.8913.243 2.8506.293 3.8052.135 7.7555-.153 11.8847-.55 4.1359-.405 8.4294-.964 12.8675-1.657l-1.1519.363c2.8072-.438 8.6216-1.323 13.7901-2.114l-9.3215 1.648c14.3562-2.282 27.701-4.135 41.4018-6.686-14.3608 2.538-15.9886 2.701-15.5422 2.564.4509-.161 2.9679-.683-3.1249.263 17.7123-3.134 22.8032-3.984 28.4522-4.832 5.6449-.878 11.8265-1.797 31.5905-5.631-5.3491 1.063-20.1318 3.689-11.7655 2.021 7.5384-1.371 17.4849-3.211 22.1345-4.003 26.1642-5.146-4.0592.573 7.0575-1.725 8.9619-1.5 12.8327-2.614 24.2821-4.972l.1264.192c29.8226-5.821 7.8199-1.99 34.6756-7.236l-11.282 2.569 13.964-2.897-2.834.813c15.179-3.252 19.912-4.171 34.826-7.148-3.488.559 1.873-.769 15.058-3.468 9.018-1.716-4.995 1.225 13.69-2.627-4.188.993-8.78 2.102-16.956 3.574-.82.234-4.136.979-4.979 1.223 9.714-1.84 24.347-4.949 31.108-6.341-2.61.52-5.718 1.136-7.326 1.452l27.032-5.835c4.285-.798.909-.044-2.429.712 5.482-1.167 9.27-1.975 17.32-3.693-2.051.591-1.515.659-12.924 3.09l25.772-5.4734c1.744-.2795 13.288-2.5115 9.956-1.7643 14.331-2.8211 35.045-7.4867 54.056-11.1579.984-.2322 2.948-.6573 6.988-1.4915 17.855-3.5167 33.713-6.4413 54.862-10.6925l12.084-1.9556c16.598-3.1242-16.365 2.6052 11.282-2.5687 19.582-3.577 7.366-1.0385 14.249-2.1596 4.866-.9135 11.53-2.1604 19.241-3.3999 3.86-.6165 7.982-1.2371 12.278-1.7801 4.298-.5279 8.771-1.0172 13.287-1.1869-5.975.3802-10.692.9563-16.277 1.7026l-.069-.0527ZM286.312 135.642c3.786-1.397 11.321-4.247 14.13-5.134-4.246 1.784-7.631 2.887-14.13 5.134Zm-299.3072 103.73c2.7832-1.139 7.149-2.721 12.1023-4.429-3.573 1.314-7.6208 2.784-12.1023 4.429Zm233.6502 36.282c.151-.09.251-.15.374-.22 7.966-4.201 5.136-2.716-.374.22Zm-16.497 8.803c-1.644.917-1.509.884-.804.534 1.126-.67 4.816-2.673 9.038-4.926-1.193.578-3.344 1.694-8.234 4.392ZM-15.7728 127.185l-3.4625 1.098c7.7694-2.657 5.6126-1.873 3.4625-1.098Z" />
    <path d="M20.722 226.935c1.0931-.339 1.402-.404 1.6653-.462 1.4903-.556 1.506-.612-1.6653.462ZM298.603 86.5536l-.626.1224c-.338.0838-.525.1321-.614.1595l1.24-.2819ZM457.61 144.126c3.35-1.88 5.223-2.936 6.469-3.637.158-.153-1.37.702-6.469 3.637ZM117.308 332.178l10.467-5.829c-5.069 2.808-6.902 3.757-9.481 5.147.259-.088 2.297-1.127-.986.682ZM50.5558 379.598c1.7491-.125 3.6981-.261 5.4239-.446l-.4881-.058c-3.7097.348-6.8706.515-8.1434.554-1.2728.038-.6417.124 3.2056-.065l.002.015ZM107.272 336.942c-.919.309-7.4576 4.002-14.7564 8.153.4388-.252.8577-.479 1.2965-.731-2.0324 1.426 5.7143-3.025 13.4599-7.422ZM90.8307 346.048c-2.2459 1.276-4.5507 2.575-6.7464 3.821-.8065.573 2.7455-1.536 6.7464-3.821ZM183.35 295.843c-3.523 1.857-2.084 1.386-4.101 2.399-3.804 2.313 23.202-12.875 4.101-2.399ZM101.054 339.733l2.735-1.272 4.019-2.434-6.754 3.706ZM159.201 307.953l-11.805 6.364c.201-.065-1.283.768-3.114 1.787 3.624-1.971 7.43-4.037 10.297-5.589 2.859-1.559 4.779-2.606 4.622-2.562ZM144.273 316.098c-3.775 2.061-7.369 4.028-9.449 5.212 2.033-1.124 6.426-3.546 9.449-5.212ZM117.052 330.779l3.491-1.868 8.306-4.556-11.797 6.424ZM286.047 239.491l12.85-6.999c1.275-.775-2.257 1.076-7.042 3.69-3.056 1.71-7.828 4.307-5.817 3.302l.009.007ZM246.796 259.955c3.51-1.84 3.763-1.92 5.767-2.916l.265-.454-6.026 3.361-.006.009ZM284.343 239.664c1.246-.755 18.586-10.267 2.269-1.449-1.269.766-14.141 7.776-2.269 1.449ZM477.466 133.271l-3.181 1.927.681.111 2.5-2.038ZM333.496 157.916c16.731-4.567 3.891-1.372 19.021-5.454 3.891-1.194-12.366 3.325-8.375 2.126-10.049 2.923-15.358 4.344-10.646 3.328ZM344.142 154.588c1.603-.47 3.31-.969 5.136-1.5-2.906.853-4.278 1.253-5.136 1.5ZM103.311 13.0424c-3.7002.479-7.3876.9949-11.0734 1.5804 2.3852-.3497 4.7744-.669 7.1591-.9644l3.9143-.616ZM82.1954 16.9639c-.8867.0875-1.7608.212-2.6434.33-2.1685.6383-4.3436 1.2852-6.4456 2.2476 2.4068-1.0574 7.1969-2.2473 9.089-2.5776ZM256.926 145.432l-.782.344c1.652-.499 4.116-1.363 9.052-3.084l-8.27 2.74ZM398.488 92.5064l-2.398 1.0097 4.571-1.6718-2.173.6621ZM387.795 69.864c5.1-.8984 11.087-1.9929 16.211-2.8324-11.115 1.9036-17.644 2.776-16.211 2.8324Z" />
  </svg>
}
