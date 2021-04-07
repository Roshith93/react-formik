import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export const Select = ({ name, label, options, ...rest }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} label={label} {...rest} as='select'>
        {options.map(({ name, label }) => (
          <option value={name} key={name}>
            {label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
