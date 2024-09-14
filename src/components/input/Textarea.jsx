import React from 'react'

const sdf = "w-full border border-slate-300 rounded-lg p-2 text-[var(--text1)] focus:outline-none focus:ring-2 focus:ring-slate-500 bg-[var(--bg1)]"

const Textarea = ({ id, type, name, required, className, placeholder, onChange, disabled, label, value }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[var(--text1)] mb-2">{label}</label>
      <textarea
        type={type}
        id={id}
        name={name}
        required={required}
        className={className || sdf}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        rows={5}
      />
    </div>

  )
}

export default React.memo(Textarea);