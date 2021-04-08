import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export const Select = ({ name, label, options, ...rest }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} label={label} {...rest} as='select'>
        <option value={-1} key={1} defaultValue disabled>
          Please choose one option
        </option>
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
