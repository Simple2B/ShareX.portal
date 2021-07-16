import React from "react";
import "./Inputs_main.sass";

const InputEmail = (props: any) => {
  return (
    <div className="inputDivForm1">
      <div className="inputTextDivForm1">E-mail:</div>
      <div className="containerInputFieldForm1">
        <input
          type="email"
          placeholder=""
          name="email"
          value={props.email}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          className={
            props.errors.email && props.touched.email
              ? "errorsForm1"
              : undefined
          }
        />

        {props.errors.email && props.touched.email && (
          <div className="inputFeedbackForm1">{props.errors.email}</div>
        )}
      </div>
    </div>
  );
};

export default InputEmail;
