import React from "react";
import { useField } from "formik";
import "./TextField.scss";

interface Props {
  label: string;
  name: string;
  type: string;
}
const TextField: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div>
        <label htmlFor={field.name}>{label}</label>
        <input {...field} {...props} />
      </div>
    </>
  );
};

export default TextField;
