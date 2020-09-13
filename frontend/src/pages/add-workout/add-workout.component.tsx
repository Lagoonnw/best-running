import React, { PureComponent }                     from 'react';
import { Container, Row, Form, Input, Button, Col, FormGroup, Label } from 'reactstrap';
// import {
//   Container,
//   FormGroup,
//   Label,
//   Input,
//   FormText,
//   Button
// } from "reactstrap";
// import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useFormik }                                from 'formik';
import * as Yup                                     from 'yup';
import axios from 'axios';

interface Values {
  workout_type: string;
  distance: number;
  date: string;
}

const postWotkout = {

}

// const validate = (values: Values) => {
//   const errors = {} as Values;
//
//   if ( !values.firstName ) {
//     errors.firstName = 'Required';
//   }
//   else if ( values.firstName.length > 15 ) {
//     errors.firstName = 'Must be 15 characters or less';
//   }
//
//   if ( !values.lastName ) {
//     errors.lastName = 'Required';
//   }
//   else if ( values.lastName.length > 20 ) {
//     errors.lastName = 'Must be 20 characters or less';
//   }
//
//   if ( !values.email ) {
//     errors.email = 'Required';
//   }
//   else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
//     errors.email = 'Invalid email address';
//   }
//
//   return errors;
// };

const validateDistance = (value: any) => {
  console.log('validate',value)
  return true;
};

const postWorkout = (workout: Values) => {
  const [year, month, day] = workout.date.split('-');
  // console.log('model', responseType: "json");
  axios.create({
    baseURL: 'http://app-test.com/api',
    responseType: "json"
  }).post(
    '/workouts', {...workout, date: new Date(+year, +month, +day)}
  ).then(r => {
    console.log('axios workout', r.data);
  }).catch(err => {
    console.log('error', err);
  });
  // axios.post('/workouts', {...workout, date: new Date(+year, +month, +day)})
}

export const AddWorkoutComponent = (props: any) => {
  const formik = useFormik({
    initialValues   : {
      workout_type: 'Skiing',
      distance : 1,
      date    : new Date()
        .toLocaleString('en-Gb', { year: 'numeric', month: 'numeric', day: 'numeric' })
        .split('/')
        .reverse()
        .join('-'),
    },
    validationSchema: Yup.object({
      workout_type: Yup.string()
        .required('Required'),
      distance : Yup.string()
        .min(1, 'Must be positive')
        .required('Required'),
      date    : Yup.string()
        .required('Required'),
    }),
    onSubmit        : values => {
      console.log('submit', );
      console.log(values);
      postWorkout(values);
    },
  });
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col sm={{size: 3, order: 1}}/>
          <Col sm={{size: 6, order: 2}}>
            <FormGroup>
              <Label htmlFor="workout_type" for="workout_type">Select a workout type</Label>
              <Input type="select" name="workout_type" id="workout_type" {...formik.getFieldProps('workout_type')}>
                <option>Skiing</option>
                <option>Walk</option>
                <option>Running</option>
                <option>Bike</option>
              </Input>
              {formik.touched.workout_type && formik.errors.workout_type ? (
                <div>{formik.errors.workout_type}</div>
              ) : null}
            </FormGroup>
            
            
            <Label htmlFor="distance" for="distance">Distance (m)</Label>
            <Input
              id="distance"
              type="number"
              min="1"
              {...formik.getFieldProps('distance')}
            />
            {formik.touched.distance && formik.errors.distance ? (
              <div>{formik.errors.distance}</div>
            ) : null}
  
            
         
            
            <Label htmlFor="date" for="date">Date</Label>
            <Input
              id="date"
              type="date"
              {...formik.getFieldProps('date')}
            />
            {formik.touched.date && formik.errors.date ? (
              <div>{formik.errors.date}</div>
            ) : null}
  
            <button type="submit">Submit</button>
          
          </Col>
          <Col sm={{size: 3, order: 3}}/>
        </Row>
      
      </Form>
    </Container>
  )
}

