// import 'date-fns'
// import Grid from '@material-ui/core/Grid'
// import DateFnsUtils from '@date-io/date-fns'
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field } from 'formik'

export const ReactDatePicker = ({ label, name, ...rest }) => {
  return (
    <div className='form-control'>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
             
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
             
            />
          )
        }}
      </Field>
    </div>
  )
}
