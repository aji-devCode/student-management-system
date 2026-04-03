
import React from 'react'

const InputBox = ({ 
        type = 'text', 
        name, 
        value, 
        onChange, 
        placeholder = '', 
        required = false,
        label = '',
        className = '',
        error = ''
        }) => {
        return (
                <div className='w-full'>
                        { label && (
                                <label className='text-sm font-medium text-gray-700 mb-1 block'>
                                {label}
                                {required && <span className='text-red-500 ml-1'>*</span>}
                                </label>
                        )}
                        <input
                                type={type}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={placeholder}
                                required={required}
                                className={`w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
                        />
                        {error && <p className='text-red-500 text-xs mt-1'>{error}</p>}
                </div>
        )
}

export default InputBox