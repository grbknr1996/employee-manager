import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import { sagaActions } from "../redux/sagaActions";
import "./Employee.scss";

const Employee: React.FC = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state: any) => state.employees.employees);
  const initialValues = {
    id: employees.length + 1,
    name: "",
    designation: "",
    address: "",
  };

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_EMPLOYEES_SAGA });
    initialValues.id = employees.length + 1;
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .max(25, "Must be 25 characters or less"),
    designation: Yup.string()
      .required("Required")
      .max(25, "Must be 25 characters or less"),
    address: Yup.string()
      .required("Required")
      .max(600, "Must be 600 characters or less"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          values.id = employees.length + 1;
          dispatch({
            type: sagaActions.CREATE_EMPLOYEE_SAGA,
            employee: values,
          });

          resetForm();

          setSubmitting(false);
        }}
      >
        {(formik) => (
          <div>
            <h1 className="title">Add Employee</h1>
            <Form onSubmit={formik.handleSubmit}>
              <TextField
                label="Name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}

              <TextField
                label="Designation"
                name="designation"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.designation}
                error={
                  formik.touched.designation &&
                  Boolean(formik.errors.designation)
                }
                helperText={
                  formik.touched.designation && formik.errors.designation
                }
              />

              {formik.errors.designation ? (
                <div>{formik.errors.designation}</div>
              ) : null}

              <TextField
                label="Address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />

              {formik.errors.address ? (
                <div>{formik.errors.address}</div>
              ) : null}

              <div className="form-group">
                <button color="primary" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Employee;
