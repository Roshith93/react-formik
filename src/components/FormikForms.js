import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, FormHelperText, Grid, Typography } from '@material-ui/core'

import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
const emptyDonation = { institution: '', percentage: 0 };
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
    twitter: '',
  },
  friends: ['bob', 'marley'],
  donations: [emptyDonation],
}
const savedFormValues = {
  firstName: 'ss',
  lastName: 'gg',
  company: 'df',
  address: 'dg',
  social: {
    facebook: 'dfg',
    twitter: 'df',
  },
  friends: ['bob', 'marley'],
  donations: [emptyDonation],
}
const onSubmit = async (values) => {
  console.log('my values', values);
  return new Promise((res) => setTimeout(res, 2500));
}

export const FormikForms = () => {
  const classes = useStyles()
  const [formValues, setFormValues] = useState(null)
  return (
    <Formik
      initialValues={formValues || initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      touched>
      {/* {({values, isSubmitting, errors, isValid}) => ( */}

      
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
          <Field name='social.facebook' as={TextField} label='facebook' />
        </div>
        <div>
          <Field name='social.twitter' as={TextField} label='twitter' />
        </div>
       
        <FieldArray name="donations">
                  {(arrHelpers) => {
                    console.log(arrHelpers)
                    const { push, remove, form,  } = arrHelpers
                 return (
                    <>
                      <Grid item>
                        <Typography variant="body2">
                          All your donations
                        </Typography>
                      </Grid>

                      {form.values.donations.map((_, index) => (
                        <Grid
                          container
                          item
                          className={classes.noWrap}
                          key={index}
                          spacing={2}
                        >
                          <Grid item container spacing={2} xs={12} sm="auto">
                            <Grid item xs={12} sm={6}>
                              <Field
                                fullWidth
                                name={`donations.${index}.institution`}
                                as={TextField}
                                label="Institution"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field
                                fullWidth
                                name={`donations[${index}].percentage`}
                                as={TextField}
                                type="number"
                                label="Percentage (%)"
                              />
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm="auto">
                            <Button
                              disabled={form.isSubmitting}
                              onClick={() => remove(index)}
                            >
                              Delete
                            </Button>
                          </Grid>
                        </Grid>
                      ))}

                      {/* <Grid item>
                        {typeof errors.donations === 'string' ? (
                          <Typography color="error">
                            {errors.donations}
                          </Typography>
                        ) : null}
                      </Grid> */}

                      <Grid item>
                        <Button
                          disabled={form.isSubmitting}
                          variant="contained"
                          onClick={() => push(emptyDonation)}
                        >
                          Add Donation
                        </Button>
                      </Grid>
                    </>
                  )}}
                </FieldArray>
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
        <Button variant='contained' color='primary' type='button' onClick= {() => setFormValues(savedFormValues)}>
          load saved
        </Button>
        {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
      </Form>
      {/* )} */}
    </Formik>
  )
}
