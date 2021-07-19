import React from "react";
import "./Inputs_main.sass";

interface IPassInputState {
  typeFlag: boolean;
}

class InputPassword extends React.Component<any, IPassInputState> {
  constructor(props: any) {
    super(props);
    this.state = {
      typeFlag: true,
    };
  }

  handleClick = () => {
    this.setState((p) => {
      return { typeFlag: !p.typeFlag };
    });
  };

  render() {
    return (
      <div className="inputDivForm1">
        <div className="inputTextDivForm1">Password:</div>
        <div className="fasForm1" onClick={this.handleClick}>
          <i
            className={
              this.state.typeFlag
                ? "fas fa-eye-slash icon-password"
                : "fas fa-eye icon-password"
            }
          />
        </div>
        <div className="containerInputFieldForm1">
          <input
            type={this.state.typeFlag ? "password" : "text"}
            autoComplete={"off"}
            placeholder=""
            name="password"
            value={this.props.password}
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            className={
              this.props.errors.password && this.props.touched.password
                ? "errorsForm1"
                : undefined
            }
          />
          {this.props.errors.password && this.props.touched.password && (
            <div className="inputFeedbackForm1">
              {this.props.errors.password}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default InputPassword;
