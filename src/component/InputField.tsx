import React, { FC } from "react";
import { useField } from "formik";

interface TextInputProps {
  readonly label: string;
  readonly name: string;
}

const InputField: FC<TextInputProps> = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default InputField;
