import React                  from 'react';
/** @jsx jsx */
import { css, jsx }                from '@emotion/core';
import {
  Container,
  Row,
  Form,
  Input,
  Col,
  FormGroup,
  Label,
  Breadcrumb,
  BreadcrumbItem,
  Button
}                             from 'reactstrap';
import { useFormik }          from 'formik';
import * as Yup               from 'yup';
import { PageTitle }          from '../../components/page-title/page-title';
import { currentDateForForm } from '../../helpers/helpers';
import { workoutTypes }       from '../../constants/constants';

export const AddWorkoutComponent = (props: any) => {
  const {addWorkout} = props;
  
  const formik = useFormik({
    initialValues   : {
      workout_type: 'Skiing',
      distance    : 1,
      date        : currentDateForForm(),
    },
    validationSchema: Yup.object({
      workout_type: Yup.string()
        .required('Required'),
      distance    : Yup.string()
        .min(1, 'Must be positive')
        .required('Required'),
      date        : Yup.string()
        .required('Required'),
    }),
    onSubmit        : values => {
      addWorkout({...values, date: new Date(values.date)});
    },
  });
  
  return (
    <Container>
      <PageTitle>Add your workout</PageTitle>
      <Breadcrumb>
        <BreadcrumbItem><a href="/">Main</a></BreadcrumbItem>
        <BreadcrumbItem active>Add</BreadcrumbItem>
      </Breadcrumb>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col sm={{size: 6, order: 2}}>
            <FormGroup>
              <Label htmlFor="workout_type" for="workout_type">Select a workout type</Label>
              <Input
                type="select"
                id="workout_type"
                {...formik.getFieldProps('workout_type')}
              >
                {workoutTypes.map((t) => (
                  <option key={t}>{ t }</option>
                ))}
              </Input>
              {formik.touched.workout_type && formik.errors.workout_type ? (
                <div className='error'>{formik.errors.workout_type}</div>
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
              <div className='error'>{formik.errors.distance}</div>
            ) : null}
            
            <Label htmlFor="date" for="date">Date</Label>
            <Input
              id="date"
              type="date"
              {...formik.getFieldProps('date')}
            />
            
            {formik.touched.date && formik.errors.date ? (
              <div className='error'>{formik.errors.date}</div>
            ) : null}
            
            <Button
              type="submit"
              color="success"
              css={css`display: flex;margin-top: 10px; margin-left: auto`}
            >Submit</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
