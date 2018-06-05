import React from 'react'
import PropTypes from 'prop-types'

export default function Handle({
                         domain: [min, max],
                         handle: { id, value, percent },
                         getHandleProps,
                       }) {
  return (
    <div
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{
        left: `${percent}%`,
        position: 'absolute',
        marginLeft: '-11px',
        marginTop: '-10px',
        zIndex: 2,
        width: 30,
        height: 30,
        cursor: 'pointer',
        borderRadius: '50%',
        boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#243d63',
      }}
      {...getHandleProps(id)}
    >
      <div style={{ fontSize: 11, marginTop: -15, marginLeft: 2 }}>{value}</div>
    </div>
    )
}

Handle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired,
}