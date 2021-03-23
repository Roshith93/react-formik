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
const onSubmit = (val) => console.log(val)
const validate = (val) => {
  let errors = {}
  if (!val.firstName) {
    errors.firstName = 'Enter first name'
  }
  if (!val.lastName) {
    errors.lastName = 'Enter last name'
  }
  if (!val.company) {
    errors.company = 'Enter company name'
  }
  return errors
}
export const FormikForms = () => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })
  console.log(formik.touched)
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
          name="firstName"
          // value={formik.firstName}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps('firstName')}
          error={
            formik.touched.firstName && formik.errors.firstName ? true : false
          }
          helperText={
            formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : null
          }
        />
      </div>
      <div>
        <TextField
          label='Last Name'
          name='lastName'
          value={formik.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && formik.errors.lastName? true : false}
          helperText={formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : null}
        />
      </div>
      <div>
        <TextField
          label='Company'
          name='company'
          value={formik.company}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.company && formik.errors.company ? true:false}
          helperText={formik.errors.company && formik.touched.company  ? formik.errors.company  : null}
        />
      </div>
      <Button variant='contained' color='primary' type='submit'>
        Submit
      </Button>
    </form>
  )
}
