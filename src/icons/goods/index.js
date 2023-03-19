import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Goods(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.929 1.628A1 1 0 0020 1H4a1 1 0 00-.929.628l-2 5A1.012 1.012 0 001 7v15a1 1 0 001 1h20a1 1 0 001-1V7a1.01 1.01 0 00-.071-.372l-2-5zM4.677 3h14.646l1.2 3H3.477l1.2-3zM3 21V8h18v13H3z"
        fill="#FFA902"
        {...props}
      />
      <Path d="M10 17H6a1 1 0 000 2h4a1 1 0 100-2z" fill="#FFA902" {...props} />
    </Svg>
  )
}


