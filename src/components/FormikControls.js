import { Input } from './Input'
import { Textarea } from './Textarea'

function FormikControls({ controls, ...rest }) {
  switch (controls) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'radio':
    case 'checkbox':
    case 'date':
    case 'select':
    default:
      return null
  }
}

export default FormikControls
