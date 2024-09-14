import React from 'react'

const sdf = "w-full border border-slate-300 rounded-lg p-2 text-[var(--text1)] focus:outline-none focus:ring-2 focus:ring-slate-500 bg-[var(--bg1)]"

const SelectInput = ({ id, type, name, required, className, placeholder, onChange, disabled, label, options = [], value }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-[var(--text1)] mb-2">{label}</label>

            <select
                type={type}
                id={id}
                name={name}
                required={required}
                className={className || sdf}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                value={value}
            >
                <option value={''}>{'--select--'}</option>
                {options.map(x => (
                    <option key={x} value={x}>{x}</option>
                ))}
            </select>
        </div>

    )
}

export default React.memo(SelectInput);