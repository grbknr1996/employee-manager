import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import "./Employee.scss";
const emp = require("../redux/data.json");

const Employee: React.FC = () => {
  return (
    <>
      <Formik
        className="form"
        initialValues={{
          id: emp.length + 1,
          name: "",
          designation: "",
          address: "",
        }}
        onSubmit={() => {}}
      >
        {(formik) => (
          <div>
            <h1 className="title">Add Employee</h1>
            <Form>
              <TextField label="Name" name="name" type="text" />
              <TextField label="Designation" name="designation" type="text" />
              <TextField label="Address" name="address" type="text" />
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Employee;
