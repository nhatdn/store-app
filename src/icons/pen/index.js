import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"

export function Pen(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <G filter="url(#filter0_d_482_87)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 2.769c-.108.45-.42.746-.726 1.038-.06.057-.12.114-.177.172l-1.025-1.022L11.53.917c.064-.062.127-.128.19-.194.307-.32.62-.646 1.113-.723h.37c.443.08.758.353 1.054.67.192.208.396.408.605.604.29.271.544.566.639.967v.528zM2.138 13.072c.077-.237.153-.473.232-.708l.586-1.76.391-1.172.028-.077.012-.032c.933.929 1.863 1.857 2.792 2.785l-1.173.39-1.437.477-1.437.478c-.026.009-.051.021-.076.033l-.03.014H2c.047-.143.093-.285.138-.428zm11.996-8.666l-3.038-3.032L3.715 8.74l3.038 3.032 7.381-7.367z"
          fill="url(#paint0_linear_482_87)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_482_87"
          x1={8.75}
          y1={0}
          x2={8.75}
          y2={13.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop />
          <Stop offset={1} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

