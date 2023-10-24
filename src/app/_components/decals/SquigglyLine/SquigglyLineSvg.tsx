type Props = {
  fill: string
}

export default function SquigglyLineSvg({ fill }: Props): JSX.Element {
  return <svg width="100%" height="100%" viewBox="0 0 522 110" fill={fill}>
    <path d="M-63.0083 1.0314c-1.782-.4984-1.212-.081-1.4904-.1148 3.0064.7557 1.4341.0286 1.4904.1148ZM-33.2912 8.2919l-.5525-.0293 4.4349.8698-3.8824-.8405ZM-5.5538 15.2851c-2.5197-1.0624-10.0805-2.4155-14.9866-3.8182l-.7927-.303-2.3113-.2253c6.0204 1.4757 13.8778 3.1887 18.0906 4.3465ZM9.0542 19.7801c-.8753-.3823 3.2436.6319-3.4506-.8862.3253.1055.4204.1255.6175.1917.6013.1512 1.4284.3497 2.8331.6945ZM6.2305 19.1c-2.9332-.6907 1.8858.5946 0 0ZM19.7873 22.2212l-3.8974-.7693c.7833.2885 4.2203 1.1222 2.9288.8881 3.9825.8368 3.1966.5601.971-.1307l-.0024.0119ZM23.5345 22.7606l-2.0141-.3984c.3466.1224.8647.2561 2.0141.3984ZM17.2357 21.4867l4.2753.8611c-.5412-.2005-.5732-.3435-1.9615-.4121.3816-.0438-.4968-.1168-2.3113-.4609l-.0025.0119ZM14.8474 20.8609c-2.1455-.5995-4.9354-1.3221-1.0142-.5478-7.4-1.7036-6.3908-1.132 1.0142.5478ZM-4.021 15.1981l-2.8556-.8231-2.5303-.4821c1.2651.2411 5.5343 1.4852 5.3979 1.3077l-.012-.0025ZM43.8588 27.9359c.2552-.0331-1.2527-.5359-1.513-.7146l-2.88-.5307c1.4566.3928 4.2303 1.0748 4.393 1.2453Z" />
    <path d="m42.3458 27.2213 4.3141.7949c-3.8249-.878-4.5412-.9541-4.3141-.7949ZM24.3309 22.4569l-7.0965-1.3176 8.4468 1.6261-1.3503-.3085ZM60.2223 31.5229l-2.477-.3222 4.4016.615-1.9246-.2928ZM71.1049 33.7847c-1.8445-.2016 2.4102.8163.4856.5235 2.9676.5863 5.5229.9497 7.8235 1.2843-2.4308-.424-5.0105-.966-8.3091-1.8078ZM83.2751 36.1806a532.1472 532.1472 0 0 1-3.8611-.5881c1.2939.2223 2.5691.4158 3.8611.5881ZM53.946 29.6711c.3204.1293.9298.4185 3.3187.9824l-1.6331-.6158c-.5112-.1075-1.0937-.2298-1.6856-.3666ZM55.5747 30.0133l.0594.0125c1.8258.4084 3.0953.6875 3.6422.8024-.4637-.0974-1.5787-.3441-3.7016-.8149ZM53.5205 29.5693l.428.0899c-.1614-.0587-.254-.0905-.428-.0899ZM35.487 25.2472c2.5402.4345 7.8267 1.4461 2.7961.104-1.837-.2372 1.0262.5503-2.7961-.104ZM51.4983 28.7973l-4.5331-1.0516c.0682.0887.8778.3704-.3948.1649l4.9254.8986.0025-.0119ZM53.7457 29.2075l-2.2474-.4102 1.6806.3903.5668.0199ZM75.5072 34.3377c1.9984.296 4.1527.7362 6.5972 1.2127-2.5985-.5708-5.2896-1.1734-7.8624-1.6892-.3741.0081-1.5335-.0867 1.2627.4884l.0025-.0119ZM65.819 32.2401c.1308.0275.3092.065.4424.0806-.2684-.0812-.4824-.1262-.4424-.0806ZM106.121 40.2867c-.128-.0393-.244-.0762-.373-.1155-.038.0043-.064.0112-.093.03l.476.0999-.01-.0144Z" />
    <path d="M73.8121 33.7213c-1.954-.4478-3.1409-.6476-4.264-.7968 1.4648.2954 3.0271.5989 4.6939.9367.174-.0007.2027-.0194-.4299-.1399ZM89.9937 37.4063a662.5133 662.5133 0 0 0-3.3775-.8212c.9836.2811 2.994.815 3.3775.8212ZM66.9002 32.5293l-.2972-.0624c.6295.1942.5538.1411.2972.0624ZM66.9002 32.5293c1.018.1767 1.827.2847 2.636.3927-1.1963-.2142-2.3068-.4227-3.2748-.6013.2328.0737.4774.1499.6507.2111l-.0119-.0025ZM113.713 40.0223c-.395.165-5.613-.5842-10.021-1.6965-4.4277-.6699-1.703.6587 2.047 1.831.153-.0794.173-.1743 4.726.5468-1.563-.4153-9.975-2.2075-6.123-1.6956 6.018 1.0165 4.889 1.0147 7.786 1.6979-2.422-.7569 7.713.9882 6.478.3074l-5.291-.8142c-.082-.0793 1.84.1635.395-.165l.003-.0118ZM97.1309 38.4721l-1.8646-.3422c2.1111.4684 3.6084.8449 6.3717 1.5744 3.114.4807 3.776.5206 4.008.4825l-9.1552-1.7996.6401.0849ZM86.9222 36.4883c1.5053.0435 5.9865.8115 3.3048-.0123-5.4598-1.0728-3.8567-.55-7.1416-1.1038 8.8128 1.7153-2.5553-.3634 3.7729 1.0654a1308.2015 1308.2015 0 0 0-4.7658-.8897c1.5761.3559 3.0903.7112 4.5237 1.0372-.0832-.0175-.1307-.0275-.1996-.0543l-.0356-.0075c-.3755-.1037-.4893-.1524-.0638-.0506l.1782.0375c.067-.0232.2409-.0238.4124-.0126 2.5365.5702.3916.1443-.4124.0126-.0262.0068-.1.0037-.1144.0131l.0356.0075 8.8472 1.611c-1.8639-.4041-4.204-.8462-8.3416-1.6535ZM43.0814 25.8511c.2685.0812.2516.1025.2729.1193.5756.0962.7946.1174-.2729-.1193ZM46.6554 26.8004c-.647-.1111-1.202-.1286-3.2605-.6107-1.7869-.4746.0251-.1187-.0406-.2193-1.2583-.2147-4.4143-.7911-.5262.1994l.6231.1061c3.5127.8869 7.9814 2.1853 7.3557 2.091-.9842-.4547-1.8502-.8226-4.154-1.5546l.0025-.0119ZM67.0322 31.7265l7.3505 1.4081-3.6878-.998.1627.1705c-4.1483-.9336-3.2917-.5801-3.8254-.5806ZM106.943 40.5709l-1.037.0919 4.332.4145-3.295-.5064ZM116.503 42.3317l-.394.165 2.55.3253-2.156-.4903ZM381.977 78.6612l-2.192.2089c1.038-.092 1.698-.1639 2.192-.2089ZM397.86 77.6349l.378-.1437c-.733.1188-1.031.18-.378.1437ZM353.854 68.0168c3.207.2771 6.789.6578 6.398.3898l-.986-.2691c-2.237.0133-3.955-.0252-5.414-.1088l.002-.0119ZM516.818 55.3495c-.302-.0387-.628-.0824-.933-.1093-.787.0826-1.505.192-2.15.3045.928-.1025 1.98-.2039 3.095-.1927l-.012-.0025ZM519.575 54.8131c.477.2118.893.5347 1.194.9327.284.4192.511.8759.604 1.3788.214.9871-.154 2.0255-.795 2.7709.45-.488.887-1.264.873-2.2586-.033-.9615-.545-2.2466-1.876-2.8238ZM295.235 84.1501l-2.546.4195c3.998-.2385 2.231-.2751 2.546-.4195ZM214.966 57.6277c2.736.4508 4.906.7579 6.828 1.0008-3.284-.5539-5.924-1.1084-6.828-1.0008ZM388.049 75.4742c-1.345.1389-1.909.2189-1.859.2789 1.381-.1314 2.161-.2402 1.859-.2789ZM229.726 59.576c-.48-.0761-.949-.1498-1.441-.2285-2.007-.1984-4.04-.39-6.493-.7072 2.433.4121 5.219.7992 7.932.9476l.002-.0119ZM348.832 106.109c.233.012.505.02.714.027.07-.035-.252-.041-.714-.027ZM440.699 105.751c-.906.058-2.382.169-3.767.262.677-.031 1.819-.088 3.767-.262ZM155.05 49.1664c-2.044-.3178-.331-.0199 0 0ZM145.322 46.4903c.438.0425.769.0624.829.0131-.181.0362-.465.0262-.829-.0131ZM250.332 60.1743s.107.0225.181.0256c-.609-.1155-.502-.0931-.181-.0256ZM152.002 48.5507c.763.148 1.633.3185 2.587.5065-.416-.0875-1.206-.2286-2.587-.5065ZM152.398 48.7331c-.707-.1236-1.256-.2266-1.77-.3222-.26-.0049-.039.0663 1.77.3222Z" />
    <path d="M157.897 49.616c-1.163-.1948-2.252-.3865-3.294-.5682.392.0824.559.1174.447.1186.602.0893 1.441.2286 2.835.4471l.012.0025ZM180.272 101.027c.131.028.286.06.428.09 2.062.173 1.165.071-.428-.09ZM407.492 64.6837c-.101.0037-.153.0175-.229.0263.1-.0038.212-.0051.297.0006l-.071-.015.003-.0119ZM414.864 64.1625c-3.128.4708-4.925.5147-7.301.5362l2.481.6576 4.832-1.1913-.012-.0025Z" />
    <path d="m343.943 81.058 5.204-.0717c-6.242.7585-10.79.8939-5.896.9427.69-.8591 20.172-1.2904 20.852-2.1639l3.434-.0347c-.985.0782-1.135.0839-2.108.1646 6.684-.0214 4.905-.8908 13.487-1.3191 2.994-.1271 5.084-.1467 3.061.0853l6.651-.6355c1.936-.1139 1.477.0624-.459.1763l10.15-.7433-.069.035c1.439-.2307 4.705-.6478 6.31-.8435 2.584-.0646-1.29.1751-.619.2294l5.612-.5935c2.311.0516-2.334.5881-6.22.8253 5.304.4574 4.654-.5222 16.011-.8632l-5.304.4847c3.455.2177 7.589-.2525 13.609-.4256-1.434-.0286-12.067.1793-5.98-.488 1.728-.0707 3.99-.2028 7.27-.6292.052.2836 3.26-.0341 7.281-.3794l-.247.4067c4.331-.4659 3.983-.6383 6.524-1.034 4.848-.3822 5.873-.1793 7.043-.0201 7.76-.6506-5.401.0056 3.779-.9044 6.463-.4518 10.973-1.0539 18.651-2.1431 4.523-.3759-.764.3231.864.2561l3.961-.767c.978-.1045.679.0187.516.0836 3.35-.5232.235-.4092 5.501-1.187 1.355-.5955 10.935-.8139 17.354-2.5271 1.63-.1907-.725.3806-.216.438 4.442-.9882 6.327-1.5095 8.013-1.9732 1.673-.5163 3.181-.8938 6.679-2.353 1.023-.3181 2.034-.7006 3.04-1.1711.998-.4968 1.982-.9842 2.91-2.029-.535.5943-.901.8023-1.172.9686-.269.1543-.403.2006-.424.1837-.071-.0768.328-.3774.89-1.0403.277-.3137.608-.8267.8-1.3815.16-.586.093-1.2695-.229-1.858-.278-.6285-.936-1.0395-1.611-1.1938-.673-.1661-1.335-.206-1.992-.2078.806.1198 1.588.2966 2.148.5877.282.1336.513.331.683.5278.167.2087.227.4567.313.636-.223-.5923-.779-.9571-1.359-1.0913-.587-.1605-1.282-.2198-1.949-.236-1.346-.0348-2.724.0846-4.081.221-.996.0138-.182-.1993 1.16-.4381-.558.0563-1.098.1413-1.506.1919-2.958.1347-1.463-.2453.655-.631 1.017.003 2.027.0416 3.015.1252 1.04-.1038 2.043-.1533 2.807-.0671.838.0892 1.331.3416 1.148.0923-.301-.1624-.878-.3704-1.406-.4565-.523-.1099-1.1-.1442-1.705-.1598.565-.03.94-.0382.68-.105-.297-.0625-1.228-.0599-2.609.0715a53.7968 53.7968 0 0 0-1.941-.3335l-.452.2025c-3.657.211-7.257.6199-10.866 1.0145-7.639 1.494-14.205 3.1391-26.398 4.8541 2.99-.6982.585-.5961.706-.9922 3.381-.021 9.428-1.3786 15.745-2.1958-3.304.4214-2.599.1358-1.768-.0367l-11.219 1.8699c.22-.3381-2.426.0852-5.381.3198 2.301.3346-8.355 1.4178-12.948 2.0643-.311-.1768.772-.4824 6.381-1.064-6.233.2399-7.919 1.584-14.047 1.7964 1.369-.1338 2.111-.1764 2.641-.3376-3.185.5082-11.034 1.0532-9.201.7194l1.366-.122c-4.559.3685-11.491.9203-17.462 1.3889-5.973.4804-10.971.8683-11.643 1.1732-.1-.0581 1.162-.6855 1.712-.818a835.3576 835.3576 0 0 1-16.236 2.4646c1.42-.495-4.137-1.3403 3.437-1.8809-2.175.0139-4.865.0561-9.457.3433 1.484.0267 3.726.5226 1.692.6284-5.591-.3318-3.879-.1458-10.751-.4119 2.225.046-.232.8066-3.751.8357.544-.1088-.303-.6834.982-.7729l-8.757.7881c2.189-.1352.383-.5767-1.576-.7652.913.1424-7.577.0196-9.908.0629l3.713.1727c-9.889-.1439-9.778.9207-19.592.718 1.192-.1213 2.95-.8056-2.037-.9982-2.286.3008-10.177 1.4568-18.875 1.3771l-1.658-.2616-6.678-.0642c4.176-.3129 15.859-.9695 22.226-1.2557-3.695-.2557-1.027-.2529-6.567-.4129-1.946-.2478 3.03-.1815 4.662-.1485l-12.892-.5641c.554.4385-9.88-.0058-9.395.344 4.676.0776 9.343.1408 14.017.1685.556.4266-8.143.8799-17.277.3366-2.313-.2752 1.774-.6437 1.592-.7811-1.185.0857-8.675-.1865-9.512-.3376l3.886-.0017c-5.073-.4337-8.333.0715-14.413-.7101-2.1-.1685-6.254-.9546-6.635-.7371 3.4.7143 3.971 2.1856 1.658 2.3814-.743-.0693-11.045-1.2546-13.423-1.6923-3.441-.6363 5.272-.4542 2.345-.9949-.135.1081-2.067.0864-2.87.0665-2.201-.2765.939-.2737-3.868-.6144-.842.3438-9.76-.873-2.303.1483-4.707-.2825-4.979-.5255-10.502-1.0041 1.735.4265-5.034.4422-9.75.0835.289-.0756-.752-.3192-1.261-.4385-9.615-1.0286-14.757-1.7865-23.709-2.8371-.816-.1961-5.115-.8266-3.262-.7843-1.297-.0868-2.488-.0891-5.249-.4212-5.298-1.0141 6.159.6991 2.147-.2308-.379.2056-7.171-.5521-11.118-.9103 1.155.5278 9.063 1.2348 13.017 1.5574-.045.5111-6.962.2231-16.346-.7818-7.442-.857-3.181-.755-4.476-.8536-13.93-1.9971-12.008-.7503-23.514-2.8208-4.543-1.0042-.108-.6673-1.093-1.0601 6.054.7884 9.241 1.5697 13.341 2.1459l-5.016-.8804c1.937.1716 5.978.6735 8.166 1.0712-3.804-.7993-23.518-3.4537-34.19-5.4731-1.919-.2047-5.219-.6255-3.686-.2414l3.395.5026c3.077.7706-6.436-.6829-2.165.1401-4.576-.5524-9.722-1.1129-16.102-2.3543l-1.133-.5728c.122.125 4.148.9336 5.957 1.1277-2.694-.2933-9.723-2.1669-12.718-2.2134l4.436 1.0435c-4.59-.6049-10.295-1.221-15.938-2.3693 2.508.8244 1.314.1891 5.255 1.3395-3.398-1.1354 14.489 2.5857 8.979 1.0437 4.041 1.2085 7.117 1.4581 12.45 2.7771-.141-.1537-1.882-.5565 2.877.307.224-.0025.736.0431 1.067.063l.321.0675-.261-.055c.207.0187.233.0119-.095-.02-1.13-.2373-2.038-.4652-2.396-.5901 2.407.1216 9.991 1.3678 12.568 1.6243 2.824.5064-1.207-.043.316.3267l3.866.3907c.34.3318 7.458 1.6043.762.7428l6.009.9403c3.517.6894 8.377 1.4873 11.39 1.7981 2.831.4708 7.207.7334 4.705.5918l9.466 1.1461.083.0793c9.307 1.3111 19.249 2.086 29.868 3.8336 3.154.2908 6.417.5923 11.669 1.2371l1.007.3479c4.044.3663 12.122 1.5057 13.888 1.4305 4.304 1.0779 19.635 1.9685 26.762 2.6106l.296-.2849c4.906.3987 9.621.6456 15.718.9349l-.359-.2986c5.264.1144 13.499 1.0388 21.827 1.4003-.575.0775-2.682-.0553-4.167-.1939 9.917 1.1292 20.99.4808 30.002 1.1346 2.257-.0465 3.881.0221 5.462.1188-.212.005-.398.0031-.56.0063.233.0118.569.008.927.0211.993.0599 2.021.1273 3.124.1977-.938-.0854-1.843-.1516-2.629-.1927 1.732.0292 4.362.0364 6.953-.002l1.09.3035c.212-.005.372.0037.596.0012 2.531.1228 2.036-.1177.683-.3524 1.298-.037 2.488-.0846 3.408-.1516 2.059.4821 6.771-.1394 9.57.362 1.737-.2301 12.971-.2869 14.333-.8562.085.0675.852.0799-.545.1088 2.878.0097 5.747.005 8.325-.2096l1.233.3335 6.254-.6941c3.819.0833 5.405.1562 1.629.5777 9.119-.7987 7.41-.4637 15.157-1.2904l-.365.258c2.777-.1602 7.196-.7442 8.879-.6632 3.121.036 10.801-.4703 19.67-1.2597 8.878-.775 18.95-1.8569 26.9-2.6412-3.161-.317 7.404-.6137 7.96-1.2528.948.038 3.161-.1541.614.3273 8.059-1.2448 12.156-1.4252 17.653-2.6503.948.038-1.691.4875-.855.4649.635-.1269 2.538-.4957 3.386-.5157.834-.0108-1.156.3025-2.424.5444 8.201-1.153 8.954-1.6641 9.508-2.2296 2.093-.0933 3.654-.1372 5.033-.1448.684-.0051 1.339.0086 1.961.0648l.459.0593c.119.0249.24.0381.368.0774.25.0525.511.1693.731.3642.121.2486.218.5541.227.804-.002.2474-.056.4467-.102.4867-.046.04-.04-.0456-.078-.3386-.046-.1337-.077-.3386-.233-.5448-.1-.2317-.379-.4391-.74-.5522.183.0756.544.1886.7.5685.201.3398.263.8734-.04 1.3057-.072.1088-.154.2031-.253.3187-.151.1294-.279.2637-.43.393-.327.2537-.701.4974-1.099.7361-.817.4606-1.734.863-2.654 1.2273-3.727 1.4237-7.426 2.2456-7.514 2.4874-.897.1338-3.942.8576-4.678 1.0501-6.374 1.2021-6.962 1.2272-13.27 2.2325l1.756-.2014c-2.424.8418-5.239.8827-10.342 1.5955l.139-.07c-11.772 1.0721-5.05.8108-16.691 1.6749l.661.2254c-1.013.7417-10.324.6821-17.051 1.5l2.445-.0565c-3.668.5558-10.377.0511-14.086.2758-.811.0157 1.269-.192 2.39-.3283-9.723.424-1.22.4875-8.436 1.153-1.345-.0967 1.677-.6518-3.187-.3102-2.429.0352-14.058 1.7321-20.726 1.794 1.477.0623 2.944.1103-.407.4599-5.141.4197-13.965.3507-18.577 1.1421-.657-.0018-.912-.0305-.942-.0617-3.931.389-12.779 1.0215-15.14 1.4429-3.697-.7768-24.451 1.9781-24.427 1.0409l-12.116.7641.308-.1087c-7.742.3938-10.479.7733-13.18 1.1603-1.797.0439-.497-.1168-.349-.1724-11.324.4841-12.45.5823-21.914 1.6061l-1.006-.2361c-2.564.3289-16.395.5097-27.468 1.5673.108-.0394.335-.1156 1.213-.2163-12.465 1.1246-29.954 1.169-34.443 2.6183l-8.21.903c10.66-.7477-1.552.5912 2.85.4376-4.178.3866-10.854.546-5.712.0644l.81-.0157c1.845-.7406-13.249.8979-12.995.5174-8.206.7674-16.339 1.538-24.359 2.5428-4.006.5096-7.995 1.0599-11.943 1.7675-1.976.3657-3.934.7601-5.89 1.2664-.982.24-1.952.5444-2.928.8725-.801.2656-2.43.9274-3.479 1.7853-.527.4968-1.009 1.0154-1.109 1.7257-.131.741.267 1.3826.734 1.8774.491.4998 1.144.9345 1.908 1.2567.348.172.776.324 1.132.46l.812.27c2.145.662 4.278 1.085 6.394 1.468l-2.176-.867c2.271.478 4.54.843 6.817 1.172 1.779.337 2.359.707-2.523-.046 2.538.682 8.226.91 8.37.816 9.549 1.226-3.797.107-.863.439l3.999.406-.887-.149c3.258.151 3.562.005 9.432.544 3.715.396 1.883.433 3.344.566-.002.012.117.037.457.071.343.023.907.055 1.788.116l8.645.626-3.43-.572c3.842.088 8.131.531 4.156-.106 2.912.5 10.972 1.016 18.745 1.36 7.783.359 15.289.56 17.081.713 5.378-.072 10.683.088 17.245.289-1.626-.119-2.594-.533 3.065-.348-2.088.776 10.366.591 14.934 1.241-4.092-.438 16.11.137 9.69-.505 4.728.126.283.307 3.871.541 11.25-.19 24.794.399 38.711.224.22-.102-2.118-.259.874-.436l7.345.49c2.748-.08 2.53-.634 7.551-.31-.714-.088-1.768-.211.067-.259 27.267.213 55.658-1.433 83.346-2.099-3.753.017-1.259-.153 1.597-.334-1.864.067.031-.266-.353-.384 3.87-.104 7.731-.223 11.588-.379 2.073-.532 12.397-1.04 13.563-1.564l-3.65.411c4.817-.884-6.891-.406-6.22-1.059-5.404.96-14.401.297-23.283 1.505-1.985-.008 1.673-.281.608-.356-2.25.37-4.987.576-10.066.699l.566-.092c-14.251.7-20.376.665-36.409.929l1.201.252c-3.451.056-4.179-.023-5.787-.051-3.948.534 9.675-.198 6.082.361-4.587-.443-24.301.497-27.392-.152-5.302.063 1.56.315-3.742.379l-1.406-.16-1.342.239c-3.476.001-5.23-.219-5.359-.37.841.016 2.397-.066 3.296-.088-4.509-.166-12.708.156-14.247.093l5.096.091c-14.468.258-32.12-.042-46.1.145l1.061.148c-10.673.101-8.549-.259-20.258-.364l.426-.022c-2.352.089-5.481.088-8.687-.015 2.961-.085-5.554-.448-1.676-.526-11.572-.051-5.724.062-13.377.326l-1.753-.282c-2.606.11-2.828.224-8.678.061 4.805-.007-3.722-.484 1.663-.531-12.249-.962-18.236-.298-23.815-1.334-5.667.322 10.582.922 7.425.878 2.637.331-4.67.246-8.517-.054-3.92-.253-6.61-1.153-16.436-1.891.981.057 1.043.058 2.024.115-3.657-.434-7.225-.353-11.695-1.056-2.56.131-5.824-.641-6.611-.261 2.996.332 5.993.602 8.995.848-2.557-.178-5.037-.252-7.934-.464-2.883-.222-6.192-.545-10.312-1.436.665.028 3.147.327 4.863.489-2.416-.495-4.697-.627-7.149-1.3037.404-.1506 3.06.3827 6.35.8507 3.288.48 7.189.94 9.937 1.034-2.614-.437-10.312-.902-7.52-1.072-2 .064-4.393-.303-7.07-.8528-1.332-.2798-2.742-.6008-4.172-1.0005-.363-.1012-.715-.1998-1.064-.3104-.233-.0737-.466-.1474-.698-.2211-.368-.1393-.827-.2604-1.183-.6328.19.04.368.0775.554.0793-.106-.0843-.271-.243-.241-.4473.031-.2043.204-.3786.399-.5361.137-.1199.305-.2087.475-.3093.194-.0956.335-.1774.763-.3231-.414.1981-.537.3087-.683.4143-.137.12-.245.2212-.33.3274-.07.0969-.128.1962-.148.2912.046-.1018.126-.1843.217-.2643.154-.1412.362-.2462.609-.3556.406-.1624 1.028-.4037 1.556-.553 1.114-.3363 2.251-.6057 3.404-.8345 2.309-.4694 4.63-.8245 6.98-1.3102-5.29.9464-5.851 1.0765-5.728.904.142-.1437 1.037-.5012-1.197-.0905 6.425-1.625 8.405-1.5934 10.51-1.746 2.129-.0859 4.441-.2198 11.865-1.164-2.004.2608-7.56.7668-4.443.2317 2.831-.2977 6.585-.6124 8.343-.6519 9.854-1.1031-1.547-.1392 2.631-.7613 3.4.0078 4.841-.644 9.159-1.1624l.063.2862c11.286-.8272 2.933-.8963 13.108-1.5227l-4.258.7664 5.292-.5491-1.069.42c5.738-.716 7.539-.7837 13.197-1.1198-1.331-.106.694-.5854 5.701-.9589 3.43-.0729-1.886.4094 5.205-.1337-1.589.2982-3.328.652-6.434.6067-.311.1206-1.566.3032-1.886.4094 3.689-.0678 9.241-.6119 11.811-.7909-.992.052-2.174.1258-2.782.1221l10.264-1.1038c1.625.0067.348.1724-.919.3525 2.084-.1695 3.511-.4027 6.575-.6267-.779.2825-.57.5249-4.898.917l9.785-.8944c.657.0637 5.047-.0305 3.782.1377 5.444-.2074 13.308-1.2947 20.523-1.5391.374-.07 1.126-.16 2.654-.2852 6.778-.3487 12.802-.4218 20.815-1.2173l4.585.1576c6.28-.4655-6.195-.1737 4.26-.952 7.409-.5755 2.788.2015 5.402.1681 3.678-.4296 10.058-1.2462 16.899-1.3087-2.254.2082-4.027.2572-6.132.4098l-.048-.01Zm77.561-5.2236c-1.5.1682-4.48.5833-5.59.4866 1.687-.4637 3.025-.3933 5.59-.4866Zm83.846-20.1426c1.105-.2388 2.829-.4095 4.798-.5041-1.414.1739-3.017.3577-4.798.5041Zm-327.91-3.2589c.059.0125.109.0106.159.0087 3.311.6088 2.141.3878-.159-.0087Zm-6.879-1.1726c-.693-.0712-.655-.0137-.375.07.496.005 2.049.2322 3.8.5257-.477-.1499-1.369-.3373-3.437-.5982l.012.0025Zm31.403 53.9897-1.351-.185c3.069.162 2.2.165 1.351.185Z" />
    <path d="M519.114 54.7657c.555.253.663.3873.738.5022.358.1868.514.3311.46.233-.056-.0862-.361-.4104-1.198-.7352ZM295.698 84.0738l-.238.0119c-.129.0225-.196.0457-.236.0619l.474-.0738ZM278.123 61.5509c1.431.1641 2.225.2815 2.753.3677.089-.0681-.56-.1674-2.753-.3677ZM133.974 45.7299l4.423.6937c-2.136-.3497-2.887-.557-3.957-.7818.082.0793.911.3279-.466.0881ZM96.1534 36.8659c-.647-.1112-1.3653-.2373-1.9978-.3578l.1508.1681c2.7298.5363 4.6594.8054 1.847.1897ZM130.057 44.0516c-.309-.3005-3.075-.7207-6.173-1.2227.179.0375.357.075.55.103-.967.1688 2.33.6633 5.621 1.1315l.002-.0118ZM123.178 42.7053c-.947-.1617-1.917-.3284-2.847-.5114-.386.0675 1.153.2423 2.847.5114ZM161.779 50.0473c-1.45-.3047-.967.1688-1.786-.0654-1.688.0545 9.845 1.176 1.786.0654ZM127.711 42.8148l1.051.4934 1.774.063-2.825-.5564ZM152.031 47.2306l-4.922-.9104c.061.0625-.57-.0081-1.341-.1204 3.045.5157 6.365 1.1389 6.263 1.0308ZM145.768 46.1998c-1.581-.2704-3.092-.5258-3.977-.625.851.1417 2.697.4552 3.977.625ZM134.457 43.9099l1.448.3166 3.468.6294-4.916-.946ZM205.198 55.2033l5.419.618c.565-.03-.898-.2754-2.923-.5026-1.307-.1011-3.321-.3258-2.496-.1154ZM188.963 52.1268c1.458.2691 1.54.3485 2.351.5683l.222-.3499-2.573-.2184ZM204.736 54.2138c.553-.0326 7.889.7401 1.036-.142-.565.0301-5.994-.6023-1.036.142ZM286.448 63.2256l-1.383-.0923.153.6273 1.23-.535ZM358.862 64.9287c-6.456-.2286-1.542.37-7.367.0882-1.515.1158 4.767.2332 3.208.3271 3.906-.0967 5.945.0093 4.159-.4153ZM354.701 65.3558c-.625.0176-1.287.0395-1.988.0658 1.134-.0219 1.658-.0357 1.988-.0658ZM455.942 104.937l4.174-.25-2.702.039-1.472.211ZM463.869 103.727l1.019.289 2.451-.614c-.931.115-2.753.339-3.47.325ZM433.094 75.7407l.311-.1206c-.648-.0493-1.618.0195-3.571.1547l3.26-.0341ZM376.773 79.3777l.968-.0569-1.837-.2373.869.2942ZM329.536 82.6796c1.926-.1283 4.194-.2841 6.132-.4099-4.199.3078-6.678-.0024-6.132.4099Z" />
  </svg>
}

