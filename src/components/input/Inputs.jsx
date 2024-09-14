import React from 'react'

const sdf = "min-w-full border border-[var(--icon)] rounded-md p-2 text-[var(--text1)] focus:outline-none focus:ring-2 focus:ring-slate-500 bg-[var(--bg1)]"

const Inputs = ({ id, type, name, required, className, placeholder, onChange, disabled, label, value }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[var(--text1)] mb-2">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        className={className || sdf}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>

  )
}

export default React.memo(Inputs);