import { Input } from './Input'
import { Textarea } from './Textarea'
import { Select } from './Select'
import { Radio } from './Radio'
import { Checkbox } from './Checkbox'
import { DatePicker } from './DatePicker'
import { ReactDatePicker } from './ReactDatePicker'

function FormikControls({ controls, ...rest }) {
  switch (controls) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <Radio {...rest} />
    case 'checkbox':
      return <Checkbox {...rest} />
    case 'date':
      return <ReactDatePicker {...rest}/>
    default:
      return null
  }
}

export default FormikControls
