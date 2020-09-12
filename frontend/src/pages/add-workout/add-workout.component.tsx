import React, { PureComponent }               from 'react';
import { Container, Row }                          from 'reactstrap';
// import {
//   Container,
//   FormGroup,
//   Label,
//   Input,
//   FormText,
//   Button
// } from "reactstrap";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
const validate = (values: Values) => {
  const errors = {} as Values;
  
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }
  
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }
  
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  return errors;
};

export const AddWorkoutComponent = (props: any) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return(
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </Row>
        <Row>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </Row>
        <Row>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          
        </Row>
        <Row>
          <button type="submit">Submit</button>
        </Row>
      </form>
    </Container>
  )
}


// export class AddWorkoutComponent extends PureComponent<any, any> {
//   constructor(props: any) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <Container>
//         <h1>Form</h1>
//         <Formik
//           initialValues={{
//             firstName: '',
//             lastName : '',
//             email    : '',
//           }}
//           onSubmit={(
//             values: Values,
//             {setSubmitting}: FormikHelpers<Values>
//           ) => {
//             setTimeout(() => {
//               alert(JSON.stringify(values, null, 2));
//               setSubmitting(false);
//             }, 500);
//           }}
//         >
//           <Form>
//             <label htmlFor="firstName">First Name</label>
//             <Field id="firstName" name="firstName" placeholder="John"/>
//
//             <label htmlFor="lastName">Last Name</label>
//             <Field id="lastName" name="lastName" placeholder="Doe"/>
//
//             <label htmlFor="email">Email</label>
//             <Field
//               id="email"
//               name="email"
//               placeholder="john@acme.com"
//               type="email"
//             />
//
//             <button type="submit">Submit</button>
//
//           </Form>
//
//         </Formik>
//
//
//       </Container>
//     );
//   }
// }
