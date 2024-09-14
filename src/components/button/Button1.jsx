import React from 'react'

const style = "w-full bg-[var(--icon1)] text-white py-1 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
const disable = "w-full bg-[var(--bg2)] text-white py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"

const Button1 = ({ type, onClick, className, value, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={disabled ? disable : className || style}
      disabled={disabled}
    >
      {value || "Submit"}
    </button>
  )
}

export default React.memo(Button1);