import React, { FC } from "react";
import { FormikValues } from "formik";
import "./FormNavigation.css";
interface Props {
  hasPrevious?: boolean;
  onBackClick: (values: FormikValues) => void;
  isLastStep: boolean;
}

const FormNavigation: FC<Props> = (props) => {
  return (
    <div className="form-navigation">
      {props.hasPrevious && (
        <button type="button" onClick={props.onBackClick}>
          {"back"}
        </button>
      )}
      <button type="submit">{props.isLastStep ? "Submit" : "Next"}</button>
    </div>
  );
};

export default FormNavigation;
