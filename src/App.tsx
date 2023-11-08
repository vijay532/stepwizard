import React from "react";
import "./App.css";
import * as yup from "yup";
import InputField from "./component/InputField";
import MultiStepForm, { FormStep } from "./component/MultiStepForm";

const validationSchemaStep1 = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
});

const validationSchemaStep2 = yup.object({
  street: yup.string().required("Street is required"),
  country: yup.string().required("Country is required"),
});

function App() {
  return (
    <div className="App">
      <MultiStepForm
        initialValues={{ name: "", email: "", street: "", country: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormStep
          stepName="Person"
          onSubmit={() => console.log("Step1 submit")}
          validationSchema={validationSchemaStep1}
        >
          <div className="component">
            <InputField name="name" label="Name" />
            <br />
            <InputField name="email" label="Email" />
          </div>
        </FormStep>
        <FormStep
          stepName="Address"
          onSubmit={() => console.log("Step2 submit")}
          validationSchema={validationSchemaStep2}
        >
          <div className="component">
            <InputField name="street" label="Street" />
            <br />
            <InputField name="country" label="Country" />
          </div>
        </FormStep>
      </MultiStepForm>
    </div>
  );
}

export default App;
