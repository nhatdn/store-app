import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

export function Phone(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-devices"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="#fff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Rect x={13} y={8} width={8} height={12} rx={1} />
      <Path d="M18 8V5a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1h9" />
      <Path d="M16 9L18 9" />
    </Svg>
  )
}