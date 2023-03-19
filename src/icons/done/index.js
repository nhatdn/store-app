import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Done(props) {
  return (
    <Svg
      width={15}
      height={12}
      viewBox="0 0 15 12"
      fill="none"
      {...props}
    >
      <Path
        d="M4.8 7.92L1.68 4.8 0 6.48l4.8 4.8 9.6-9.6L12.72 0 4.8 7.92z"
        fill="#fff"
      />
    </Svg>
  )
}

