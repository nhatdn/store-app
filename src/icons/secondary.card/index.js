import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export function SecondaryCard(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_361_436)" fill="#fff">
        <Path d="M18.178 17.844a2.791 2.791 0 102.788 2.794v-.003a2.794 2.794 0 00-2.788-2.79zM23.128 4.48a1.075 1.075 0 00-.203-.02H5.932l-.27-1.8A2.422 2.422 0 003.266.574H1.077a1.077 1.077 0 100 2.153h2.19a.27.27 0 01.27.237l1.657 11.363a2.977 2.977 0 002.931 2.513h11.2a2.96 2.96 0 002.903-2.365L23.98 5.74a1.077 1.077 0 00-.852-1.261zM11.34 20.516a2.791 2.791 0 00-2.798-2.669 2.79 2.79 0 00.065 5.58h.067a2.791 2.791 0 002.667-2.911z" />
      </G>
      <Defs>
        <ClipPath id="clip0_361_436">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}