import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControls from './FormikControls'

function FormikContainer() {
  const initialValues = {
    firstName: '',
    password: '',
    textarea: '',
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Enter the name'),
    password: Yup.string().required('Enter the password'),
    textarea: Yup.string().required('Enter the textarea'),
  })
  const onSubmit = (values, actions) => console.log(values)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControls
              controls='input'
              type='text'
              label='First Name'
              name='firstName'
            />
            <FormikControls
              controls='input'
              type='password'
              label='Password'
              name='password'
            />
            <FormikControls
              controls='textarea'
              label='Enter Address'
              name='textarea'
            />
            <button type='submit'>Submit</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default FormikContainer
