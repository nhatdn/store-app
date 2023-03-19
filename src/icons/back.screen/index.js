import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function BackScreen(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M21 10H7.828l3.586-3.586a2 2 0 00-2.828-2.828l-7 7a2 2 0 000 2.828l7 7a2 2 0 102.828-2.828L7.828 14H21a2 2 0 000-4z"
        fill="#303733"
        {...props}
      />
    </Svg>
  )
}
