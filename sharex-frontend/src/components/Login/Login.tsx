import React from "react";
import "./Login_main.sass";
import InputEmail from "./Inputs/InputEmail";
import InputPassword from "./Inputs/InputPassword";
// import LinkForgetPassword from "./LinkForgetPassword/LinkForgetPassword";
// import LoggedCheckbox from "./LoggedCheckbox/LoggedCheckbox";
import LogoSide from "./LogoSide/LogoSide";
import Button from "./Button/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import loginActions from "../../store/actions/actions_login";

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loginActions.closeLoginAction());
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", contentFormCheckbox: false }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout((data) => {
          setSubmitting(true);
          console.log(data);
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          // .email()
          .required("Must enter an email")
          .matches(
            /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            "Invalid email address"
          ),
        password: Yup.string()
          .required("Must enter a password")
          .min(8, "Password should be 8 characters minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <div className="containerForm1">
            <i className="fas fa-times" onClick={handleClick}></i>
            <Form
              className="form1"
              name="form_1"
              action={"#"}
              onSubmit={handleSubmit}
            >
              <LogoSide />
              <InputEmail
                email={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              <InputPassword
                password={values.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              {/* <LinkForgetPassword />
            <Field
              name="contentFormCheckbox"
              type="checkbox"
              label="checkbox"
              checked={values.contentFormCheckbox}
              component={LoggedCheckbox}
              handleChange={handleChange}
            /> */}
              <Button isSubmitting={isSubmitting} />
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
export default Login;
