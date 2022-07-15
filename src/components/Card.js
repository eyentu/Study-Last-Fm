import PropTypes from "prop-types"

function Card({ children, spacing = 2, direction = "row", color ="white" }) {
  const style = {
    display: "flex",
    backgroundColor: color,
    gap: `${spacing * 0.375}rem`,
    flexDirection: direction,
  }
  return <div style={style}>{children}</div>
}

Card.propTypes = {
  spacing: PropTypes.number,
  direction: PropTypes.oneOf(["row", "column"]),
  color: PropTypes.oneOf(["black", "white"]),
}

export default Card