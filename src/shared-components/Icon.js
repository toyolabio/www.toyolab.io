import React from "react"
import styled from "styled-components"
import { animated } from "react-spring"

const SvgComponent = ({
  svgRef,
  name,
  width,
  height,
  fill,
  strokeColor,
  children,
  ...props
}) => (
  <svg
    width={width ? width : 24}
    height={height ? height : 24}
    fill={fill ? fill : "none"}
    stroke={strokeColor ? strokeColor : "currentColor"}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`prefix__feather prefix__feather-${name}`}
    ref={svgRef}
    {...props}
  >
    {children}
  </svg>
)

const StIcon = styled(SvgComponent)`
  will-change: opacity;
  z-index: 10;
`

const Icon = React.forwardRef((props, ref) => (
  <StIcon svgRef={ref} {...props} />
))
export default animated(Icon)
