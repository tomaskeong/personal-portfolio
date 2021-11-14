import React from 'react'

import AnimatedCursor from 'react-animated-cursor'

type AnimatedCursorProps = {
  color?: string
  outerAlpha?: number
  innerSize?: number
  outerSize?: number
  innerScale?: number
  outerScale?: number
  trailingSpeed?: number
}

const AnimatedCursorComponent = ({
  color,
  outerAlpha,
  innerSize,
  outerSize,
  innerScale,
  outerScale,
  trailingSpeed,
}: AnimatedCursorProps): JSX.Element => {
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
