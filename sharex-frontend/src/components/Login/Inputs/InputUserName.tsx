import React from "react";
import "./Inputs_main.sass";

const InputUserName = (props: any) => {
  return (
    <div className="inputDivForm1">
      <div className="inputTextDivForm1">User name:</div>
      <div className="containerInputFieldForm1">
        <input
          type="text"
          placeholder=""
          name="username"
          value={props.username}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          className={
            props.errors.username && props.touched.username
              ? "errorsForm1"
              : undefined
          }
        />

        {props.errors.username && props.touched.username && (
          <div className="inputFeedbackForm1">{props.errors.username}</div>
        )}
      </div>
    </div>
  );
};

export default InputUserName;
