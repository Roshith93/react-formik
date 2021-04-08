import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export const DatePicker = ({ name, label, ...rest }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} label={label} {...rest} as="input"/>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
