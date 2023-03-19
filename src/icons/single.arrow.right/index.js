import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function SingleArrowRight(props) {
  return (
    <Svg
      width={10}
      height={18}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.25 17.25a.75.75 0 01-.53-1.28L7.69 9 .72 2.03A.75.75 0 111.78.97l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.748.748 0 01-.53.22z"
        fill="#7D8FAB"
      />
    </Svg>
  )
}

