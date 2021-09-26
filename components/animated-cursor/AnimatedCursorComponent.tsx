import React from "react"
import AnimatedCursor from "react-animated-cursor"

type AnimatedCursorProps = {
  color?: string
  outerAlpha?: number
  innerSize?: number
  outerSize?: number
  innerScale?: number
  outerScale?: number
  trailingSpeed?: number
}

const AnimatedCursorComponent: React.FC<AnimatedCursorProps> = ({
  color,
  outerAlpha,
  innerSize,
  outerSize,
  innerScale,
  outerScale,
  trailingSpeed,
}) => {
  return (
    <AnimatedCursor
      color={color}
      outerAlpha={outerAlpha}
      innerSize={innerSize}
      outerSize={outerSize}
      innerScale={innerScale}
      outerScale={outerScale}
      trailingSpeed={trailingSpeed}
    />
  )
}

export default AnimatedCursorComponent
