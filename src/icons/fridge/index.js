import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Fridge(props) {
  return (
    <Svg
      width={18}
      height={32}
      viewBox="0 0 18 32"
      fill="none"
      {...props}
    >
      <Path
        d="M17.203 10.26V0H.797v10.26h16.404zM2.626 4.395a.63.63 0 01.634-.633.63.63 0 01.633.633v3.736a.63.63 0 01-.633.633.63.63 0 01-.634-.633V4.395zM.798 11.533v19.174h1.6V32h3.095v-1.293h7.034V32h3.069v-1.293h1.6V11.533H.798zm3.121 5.714a.63.63 0 01-.633.634.63.63 0 01-.634-.634v-3.735a.63.63 0 01.634-.634.63.63 0 01.633.634v3.735z"
        fill="#fff"
      />
    </Svg>
  )
}


