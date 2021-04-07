import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export const Textarea = ({ name, label, ...rest }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} label={label} {...rest} as="textarea" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
