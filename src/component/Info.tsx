import React from "react";
import { useFormik } from "formik";

interface infoValue {
  name: string;
}

function Info(infoObj: infoValue) {
  const { name } = infoObj;
  return (
    <>
      <label htmlFor="firstName">{name}</label>
      <br></br>
      <input id="firstName" name="firstName" type="text" />
    </>
  );
}

export default Info;
