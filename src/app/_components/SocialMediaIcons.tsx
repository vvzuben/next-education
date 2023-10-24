type Props = {
  color: "white" | "royal-purple"
}

export function FacebookIcon(props: Props): React.JSX.Element {
  return (
    <svg className={`
      ${(props.color === "white" ? "fill-white hover:fill-royal-purple" : "fill-royal-purple hover:fill-royal-purple")}
      hover:opacity-50
      `} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.0493 11.7659C23.0493 5.67863 18.1089 0.738281 12.0217 0.738281C5.93449 0.738281 0.994141 5.67863 0.994141 11.7659C0.994141 17.1032 4.78762 21.5473 9.81619 22.5729V15.0741H7.61068V11.7659H9.81619V9.00896C9.81619 6.88064 11.5475 5.14931 13.6758 5.14931H16.4327V8.45758H14.2272C13.6207 8.45758 13.1245 8.95382 13.1245 9.56034V11.7659H16.4327V15.0741H13.1245V22.7383C18.6934 22.1869 23.0493 17.4892 23.0493 11.7659Z" />
    </svg>
  )
}

export function InstagramIcon(props: Props): React.JSX.Element {
  return <svg className={`
      ${(props.color === "white" ? "fill-white hover:fill-royal-purple" : "fill-royal-purple hover:fill-royal-purple")}
      hover:opacity-50
      `} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.38 0.738281H15.62C19.14 0.738281 22 3.59828 22 7.11828V16.3583C22 18.0504 21.3278 19.6731 20.1313 20.8696C18.9349 22.0661 17.3121 22.7383 15.62 22.7383H6.38C2.86 22.7383 0 19.8783 0 16.3583V7.11828C0 5.4262 0.672177 3.80342 1.86866 2.60694C3.06514 1.41046 4.68792 0.738281 6.38 0.738281ZM6.16 2.93828C5.10974 2.93828 4.1025 3.35549 3.35986 4.09814C2.61721 4.84078 2.2 5.84802 2.2 6.89828V16.5783C2.2 18.7673 3.971 20.5383 6.16 20.5383H15.84C16.8903 20.5383 17.8975 20.1211 18.6401 19.3784C19.3828 18.6358 19.8 17.6285 19.8 16.5783V6.89828C19.8 4.70928 18.029 2.93828 15.84 2.93828H6.16ZM16.775 4.58828C17.1397 4.58828 17.4894 4.73315 17.7473 4.99101C18.0051 5.24887 18.15 5.59861 18.15 5.96328C18.15 6.32795 18.0051 6.67769 17.7473 6.93555C17.4894 7.19342 17.1397 7.33828 16.775 7.33828C16.4103 7.33828 16.0606 7.19342 15.8027 6.93555C15.5449 6.67769 15.4 6.32795 15.4 5.96328C15.4 5.59861 15.5449 5.24887 15.8027 4.99101C16.0606 4.73315 16.4103 4.58828 16.775 4.58828ZM11 6.23828C12.4587 6.23828 13.8576 6.81774 14.8891 7.84919C15.9205 8.88064 16.5 10.2796 16.5 11.7383C16.5 13.197 15.9205 14.5959 14.8891 15.6274C13.8576 16.6588 12.4587 17.2383 11 17.2383C9.54131 17.2383 8.14236 16.6588 7.11091 15.6274C6.07946 14.5959 5.5 13.197 5.5 11.7383C5.5 10.2796 6.07946 8.88064 7.11091 7.84919C8.14236 6.81774 9.54131 6.23828 11 6.23828ZM11 8.43828C10.1248 8.43828 9.28542 8.78596 8.66655 9.40483C8.04768 10.0237 7.7 10.8631 7.7 11.7383C7.7 12.6135 8.04768 13.4529 8.66655 14.0717C9.28542 14.6906 10.1248 15.0383 11 15.0383C11.8752 15.0383 12.7146 14.6906 13.3335 14.0717C13.9523 13.4529 14.3 12.6135 14.3 11.7383C14.3 10.8631 13.9523 10.0237 13.3335 9.40483C12.7146 8.78596 11.8752 8.43828 11 8.43828Z" />
  </svg>
}

export function TwitterIcon(props: Props): React.JSX.Element {
  return (
    <svg className={`
      ${(props.color === "white" ? "fill-white hover:fill-royal-purple" : "fill-royal-purple hover:fill-royal-purple")}
      hover:opacity-50
      `} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.0002 5.58159C22.1905 5.94964 21.3177 6.1915 20.4134 6.30717C21.3388 5.74984 22.0538 4.86652 22.3903 3.80444C21.5175 4.33022 20.5501 4.69827 19.5301 4.90858C18.6993 4.00424 17.5321 3.47845 16.2071 3.47845C13.7359 3.47845 11.7169 5.49746 11.7169 7.98967C11.7169 8.34721 11.759 8.69422 11.8326 9.02021C8.08902 8.83093 4.75556 7.03275 2.53675 4.30919C2.14767 4.97168 1.92684 5.74984 1.92684 6.57006C1.92684 8.13689 2.71552 9.52496 3.93533 10.3136C3.18872 10.3136 2.49469 10.1033 1.88478 9.78785V9.8194C1.88478 12.0067 3.4411 13.8364 5.50217 14.2465C4.84045 14.4276 4.14575 14.4528 3.47265 14.3201C3.75826 15.2165 4.31762 16.0009 5.07209 16.563C5.82657 17.1251 6.73823 17.4366 7.67891 17.4538C6.08435 18.7161 4.10779 19.3984 2.07406 19.3886C1.71653 19.3886 1.359 19.3676 1.00146 19.3256C2.99944 20.6085 5.37598 21.3551 7.92077 21.3551C16.2071 21.3551 20.7604 14.4778 20.7604 8.51546C20.7604 8.31566 20.7604 8.12638 20.7499 7.92658C21.6332 7.29564 22.3903 6.49645 23.0002 5.58159Z" />
    </svg>
  )
}

export function LinkIcon(props: Props): React.JSX.Element {
  return (
    <svg className={`
      ${(props.color === "white" ? "fill-white hover:fill-royal-purple" : "fill-royal-purple hover:fill-royal-purple")}
      hover:opacity-50
      `} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.7845 17.5809C12.8894 17.6854 12.9726 17.8096 13.0294 17.9464C13.0862 18.0831 13.1154 18.2297 13.1154 18.3778C13.1154 18.5259 13.0862 18.6725 13.0294 18.8092C12.9726 18.946 12.8894 19.0701 12.7845 19.1747L12.2276 19.7315C11.1724 20.7868 9.74119 21.3796 8.24887 21.3796C6.75655 21.3796 5.32535 20.7868 4.27012 19.7315C3.21489 18.6763 2.62207 17.2451 2.62207 15.7528C2.62207 14.2605 3.21489 12.8293 4.27012 11.774L6.53137 9.51373C7.54526 8.49733 8.90941 7.90707 10.3444 7.86384C11.7794 7.82061 13.1766 8.3277 14.2498 9.28123C14.3606 9.37972 14.4509 9.49907 14.5156 9.63247C14.5803 9.76586 14.6181 9.91069 14.6268 10.0587C14.6355 10.2067 14.6149 10.3549 14.5663 10.495C14.5178 10.6351 14.4421 10.7642 14.3436 10.875C14.2451 10.9858 14.1257 11.0761 13.9923 11.1408C13.8589 11.2055 13.7141 11.2432 13.5661 11.2519C13.4181 11.2606 13.2698 11.2401 13.1298 11.1915C12.9897 11.1429 12.8606 11.0672 12.7498 10.9687C12.1062 10.3972 11.2686 10.0931 10.4082 10.1187C9.54787 10.1443 8.7298 10.4977 8.12137 11.1065L5.862 13.364C5.22896 13.9971 4.87332 14.8557 4.87332 15.7509C4.87332 16.6462 5.22896 17.5048 5.862 18.1378C6.49504 18.7708 7.35362 19.1265 8.24887 19.1265C9.14412 19.1265 10.0027 18.7708 10.6357 18.1378L11.1926 17.5809C11.2971 17.4763 11.4212 17.3933 11.5578 17.3367C11.6943 17.2801 11.8407 17.251 11.9886 17.251C12.1364 17.251 12.2828 17.2801 12.4194 17.3367C12.5559 17.3933 12.68 17.4763 12.7845 17.5809ZM19.7295 4.26842C18.6734 3.21481 17.2425 2.62311 15.7507 2.62311C14.259 2.62311 12.8281 3.21481 11.772 4.26842L11.2151 4.82529C11.0038 5.03664 10.885 5.32328 10.885 5.62217C10.885 5.92105 11.0038 6.2077 11.2151 6.41904C11.4265 6.63039 11.7131 6.74912 12.012 6.74912C12.3109 6.74912 12.5975 6.63039 12.8089 6.41904L13.3657 5.86217C13.9988 5.22913 14.8574 4.87349 15.7526 4.87349C16.6479 4.87349 17.5065 5.22913 18.1395 5.86217C18.7725 6.49521 19.1282 7.35379 19.1282 8.24904C19.1282 9.14429 18.7725 10.0029 18.1395 10.6359L15.8792 12.8972C15.2702 13.5058 14.4517 13.8586 13.5911 13.8835C12.7305 13.9085 11.893 13.6036 11.2498 13.0312C11.139 12.9327 11.0099 12.857 10.8698 12.8084C10.7298 12.7599 10.5815 12.7393 10.4335 12.748C10.2855 12.7567 10.1407 12.7945 10.0073 12.8592C9.8739 12.9239 9.75455 13.0142 9.65606 13.125C9.55757 13.2358 9.48187 13.3649 9.43327 13.505C9.38468 13.645 9.36415 13.7933 9.37286 13.9413C9.38156 14.0893 9.41933 14.2341 9.48401 14.3675C9.54869 14.5009 9.63901 14.6202 9.74981 14.7187C10.8223 15.672 12.2186 16.1794 13.6529 16.1371C15.0872 16.0947 16.4511 15.5058 17.4654 14.4909L19.7267 12.2306C20.7815 11.1748 21.3743 9.7435 21.3748 8.25103C21.3753 6.75856 20.7836 5.32687 19.7295 4.27029V4.26842Z" />
    </svg>
  )
}