import React from 'react';

const InputField = ({ label, type, name, value, onChange, placeholder }) => {
    return (
        <div>
        <label>
            {label}:
            <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='w-full border border-solid border-primary/10 focus:border-primary/70 focus:outline-none px-2 py-2 rounded-lg'
            />
        </label>
        </div>
    );
};

export default InputField;
