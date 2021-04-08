import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControls from './FormikControls'

const cars = [
  { label: 'volvo', value: 'Volvo' },
  { label: 'bmw', value: 'BMW' },
]
const genders = [
  {label:'male',value:'male'},
  {label:'female',value:'female'},
  {label:'other',value:'other'},
]
const locationData = [
  {label:'BLR',value:'BLR'},
  {label:'KL',value:'KL'},
  {label:'KA',value:'KA'},
]
function FormikContainer() {
  const initialValues = {
    firstName: '',
    password: '',
    textarea: '',
    car: '',
    gender: '',
    locations: [],
    date: ''
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Enter the name'),
    password: Yup.string().required('Enter the password'),
    textarea: Yup.string().required('Enter the textarea'),
    car: Yup.string().required('Select the country'),
    gender: Yup.string().required('Please select the gender'),
    locations: Yup.array().required('Please select the location'),
    date: Yup.date().required('Please select the gender').nullable(),

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
            <FormikControls
              controls='select'
              label='Choose a car'
              name='car'
              options={cars}
            />
            <FormikControls
              controls='radio'
              type="radio"
              label='Please select your gender:'
              name='gender'
              options={genders}
            />
            <FormikControls
              controls='checkbox'
              type="checkbox"
              label='Please select your vehicles:'
              name='locations'
              options={locationData}
            />
            <FormikControls
              controls='date'
              type="date"
              label='Please select date:'
              name='date'
            />
            <button type='submit'>Submit</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default FormikContainer
