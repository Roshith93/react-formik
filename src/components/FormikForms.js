import { makeStyles } from '@material-ui/core/styles'
import {
  TextField,
  Button,
  FormHelperText,
  FormControl,
} from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))
const validationSchema = Yup.object({
  firstName: Yup.string().required('Enter First name'),
  lastName: Yup.string().required('Enter Last name'),
  company: Yup.string().required('Enter Company name'),
  address: Yup.string().required('Enter address'),
})
const initialValues = {
  firstName: '',
  lastName: '',
  company: '',
  address: '',
  social: {
    facebook: '',
    twitter: ''
  },
  friends: ["bob", 'marley']
}
const onSubmit = (val) => console.log(val)

export const FormikForms = () => {
  const classes = useStyles()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      touched
    >
      <Form className={classes.root} noValidate autoComplete='off'>
        <div>
          <Field
            label='First Name'
            name='firstName'
            as={TextField}
            // error={<ErrorMessage name='firstName' />}
            // helperText={firstName}
          />
          <FormHelperText id='component-error-text' error>
            <ErrorMessage name='firstName' />
          </FormHelperText>
        </div>
        <div>
          <Field
            label='Last Name'
            name='lastName'
            as={TextField}
            // error={<ErrorMessage name='lastName' />}
            // helperText={<ErrorMessage name='lastName' />}
          />
          <FormHelperText id='component-error-text' error>
            <ErrorMessage name='lastName' />
          </FormHelperText>
        </div>
        <div>
          <Field
            label='Company'
            name='company'
            as={TextField}
            // error={<ErrorMessage name='company' />}
            // helperText={<ErrorMessage name='company' />}
          />
          <FormHelperText id='component-error-text' error>
            <ErrorMessage name='company' />
          </FormHelperText>
        </div>
        <div>
          <Field
            name='address'
            // error={<ErrorMessage name='company' />}
            // helperText={<ErrorMessage name='company' />}
          >
            {({ field, form, meta }) => {
              console.log(meta)
              return (
                <TextField
                  {...field}
                  label='Address'
                  error={meta.touched && meta.error ? meta.error : null}
                  helperText={meta.touched && meta.error ? meta.error : null}
                />
              )
            }}
          </Field>
          <FormHelperText id='component-error-text' error>
            <ErrorMessage name='company' />
          </FormHelperText>
        </div>
        <div>
          <Field name="social.facebook" as ={TextField} label="facebook"/>
        </div>
        <div>
          <Field name="social.twitter" as ={TextField} label="twitter"/>
        </div>
        {initialValues.friends && initialValues.friends.map(el => {
          return <div>
          <Field name={el} as ={TextField} label="fname"/>
        </div>
        })}
        {/* <div>
          <Field name="friends[0]" as ={TextField} label="fname"/>
        </div><div>
          <Field name="friends[1]" as ={TextField} label="fname"/>
        </div> */}
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Formik>
  )
}
