import React, { FC } from "react";
import { FormikValues } from "formik";

interface Props {
  hasPrevious?: boolean;
  onBackClick: (values: FormikValues) => void;
  isLastStep: boolean;
}

const FormNavigation: FC<Props> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 50,
        justifyContent: "space-between",
      }}
    >
      {props.hasPrevious && (
        <button type="button" onClick={props.onBackClick}>
          Back
        </button>
      )}
      <button type="submit">{props.isLastStep ? "Submit" : "Next"}</button>
    </div>
  );
};

export default FormNavigation;
