import React from "react";
import "./Button_main.sass";

const Button = (props: any) => {
  return (
    <div className="buttonsDiv">
      <div>
        <input type="submit" value="Submit" disabled={props.isSubmitting} />
      </div>
    </div>
  );
};

export default Button;
