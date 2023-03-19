import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

export function Tivi(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-device-tv"
      width={30}
      height={30}
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="#fff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Rect x={3} y={7} width={18} height={13} rx={2} />
      <Path d="M16 3L12 7 8 3" />
    </Svg>
  )
}

