import React from "react"
import PropType from "prop-types"

export default function Form({ label, name, placeholder, value, onChange }) {
  return (
    <div className="m-2 text-left">
      <label htmlFor={name}>
        {label}
        <input
          type="text"
          name={name}
          className="block p-1 border-2 w-full mt-2 rounded rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

Form.propTypes = {
  label: PropType.string.isRequired,
  name: PropType.string.isRequired,
  value: PropType.string.isRequired,
  placeholder: PropType.string.isRequired,
  onChange: PropType.func.isRequired
}
