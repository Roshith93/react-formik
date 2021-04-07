import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export const Radio = ({ name, label, options, ...rest }) => {
  return (
    <div className='form-control'>
      {options.map((option) => {
        return (
          <React.Fragment key={option.label}>
            <Field name={name} id={option.label} value={option.value} {...rest} as='input' />
            <label htmlFor={option.label}>{option.label}</label>
          </React.Fragment>
        )
      })}

      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
