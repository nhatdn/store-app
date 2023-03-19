import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export function PriceTag(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_361_453)">
        <Path
          d="M14.667 0H9.125c-.367 0-.88.212-1.138.471L.389 8.07a1.337 1.337 0 000 1.885l5.657 5.657a1.336 1.336 0 001.885 0l7.598-7.597c.259-.259.471-.772.471-1.138V1.333C16 .6 15.4 0 14.667 0zM12 5.333a1.334 1.334 0 110-2.667 1.334 1.334 0 010 2.667z"
          fill="#C29C1D"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_361_453">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}


