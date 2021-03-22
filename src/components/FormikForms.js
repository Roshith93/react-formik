import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'
import { useFormik } from 'formik'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))
const initialValues = {
  firstName: '',
  lastName: '',
  company: '',
}
export const FormikForms = () => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues, onSubmit: val => console.log(val)
  })
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={formik.handleSubmit}
    >
      <div>
        <TextField
          label='First Name'
          defaultValue=''
          name='firstName'
          value={formik.firstName}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <TextField
          label='Last Name'
          defaultValue=''
          name='lastName'
          value={formik.lastName}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <TextField
          label='Company'
          defaultValue=''
          name='company'
          value={formik.company}
          onChange={formik.handleChange}
        />
      </div>
      <Button variant='contained' color='primary' type='submit'>
        Submit
      </Button>
    </form>
  )
}
