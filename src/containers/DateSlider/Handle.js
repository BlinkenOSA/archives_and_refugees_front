import React from 'react'
import PropTypes from 'prop-types'
import {colors} from '../../config/colors';

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
        marginLeft: '-15px',
        marginTop: '-12px',
        zIndex: 2,
        width: 35,
        height: 35,
        cursor: 'pointer',
        borderRadius: '50%',
        boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: colors.sliderHandle,
      }}
      {...getHandleProps(id)}
    >
      <div style={{ fontSize: 11, color: colors.sliderHandleTextColor, marginTop: -13, marginLeft: 4, fontWeight: 800 }}>{value}</div>
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