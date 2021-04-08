import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export const Radio = ({ name, label, options, ...rest }) => {
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.value}>
                <label htmlFor={option.label}>{option.label}</label>
                <input
                type='radio'
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
              </React.Fragment>
            )
          })
        }}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
