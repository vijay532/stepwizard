import React, { useState } from "react";
import "./Wizard.css";
import Info from "./Info";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

interface WizardValue {
  header: string;
  stepper: string[];
}

function Wizard(wizardObj: WizardValue) {
  const [page, setPage] = useState(0);
  const { header, stepper } = wizardObj;

  const showPage = (index: number) => {
    setPage(index);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <Info name={"signup"} />;
    } else if (page === 1) {
      return <Info name={"address"} />;
    } else {
      return <Info name={"contact"} />;
    }
  };

  const Schema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div className="form">
      <strong>{header}</strong>
      <p>
        step {page} of {2}{" "}
      </p>

      <div className="stepper-container">
        {stepper.length > 0 &&
          stepper.map((item: string, index: number) => (
            <div
              className={`stepper ${page === index ? "selected" : ""}`}
              onClick={() => showPage(index)}
            >
              <p className="stepper-box">{item}</p>
            </div>
          ))}
      </div>
      <Formik
        initialValues={{
          firstName: "",
        }}
        // validationSchema={Schema}
        onSubmit={async (values) => {
          if (page === 2) {
            alert("FORM SUBMITTED");
          } else {
            setPage((currPage) => currPage + 1);
          }
        }}
      >
        <Form className="form-container">
          <div className="stepper-header">
            <h1>{PageDisplay()}</h1>
          </div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="prev"
            >
              Previous
            </button>
            <button className="next" type="submit">
              {page === 2 ? "Submit" : "Next"}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Wizard;
