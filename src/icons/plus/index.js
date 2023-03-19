import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Plus(props) {
  return (
    <Svg
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 7.5A1.5 1.5 0 011.5 6h10.683a1.5 1.5 0 110 3H1.5A1.5 1.5 0 010 7.5z"
        fill="#027335"
      />
      <Path
        d="M6.841 15a1.368 1.368 0 01-1.368-1.368V1.368a1.368 1.368 0 112.737 0v12.264C8.21 14.387 7.597 15 6.84 15z"
        fill="#027335"
      />
    </Svg>
  )
}


