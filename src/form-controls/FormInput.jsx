import React, { forwardRef } from 'react'

export const FormInput = forwardRef(
  ({ className = '', error, ...restprops }, ref) => {
    return (
      <>
        <input
          ref={ref}
          type="text"
          className={`${className || ''} ${error ? 'is-invalid' : ''}`}
          {...restprops}
        />
        {error && (
          <div className="invalid-feedback">
            {error.message || 'Field is required.'}
          </div>
        )}
      </>
    )
  }
)
