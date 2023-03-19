import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Glass(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M10.94 1.931c-4.96 0-8.999 4.04-8.999 8.998 0 4.96 4.04 9.006 8.998 9.006a8.943 8.943 0 005.606-1.974l3.748 3.746a1.002 1.002 0 001.418-1.416l-3.748-3.748a8.96 8.96 0 001.976-5.614c0-4.958-4.04-8.998-9-8.998zm0 2a6.982 6.982 0 016.998 6.998 6.988 6.988 0 01-6.998 7.006A6.988 6.988 0 013.94 10.93a6.982 6.982 0 016.999-6.998z"
        fill="#7D8FAB"
      />
    </Svg>
  )
}

