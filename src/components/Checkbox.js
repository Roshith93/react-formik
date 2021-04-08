import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export const Checkbox = ({ name, label, options, ...rest }) => {
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.value}>
                <label htmlFor={option.label}>{option.label}</label>
                <input
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  type='checkbox'
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
