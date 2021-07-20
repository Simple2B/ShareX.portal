import React, { useState, useEffect } from "react";
import "./Login_main.sass";
import InputUserName from "./Inputs/InputUserName";
import InputPassword from "./Inputs/InputPassword";
// import LinkForgetPassword from "./LinkForgetPassword/LinkForgetPassword";
// import LoggedCheckbox from "./LoggedCheckbox/LoggedCheckbox";
import LogoSide from "./LogoSide/LogoSide";
import Button from "./Button/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import loginActions from "../../store/actions/actions_login";
import axios from "axios";
import { useTypesSelector } from "../../hooks/useTypeSelector";

const Login = () => {

  const isLogin = useTypesSelector((state) => {
    return state.reducer_login.isLogin;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loginActions.closeLoginAction(isLogin));
  };

  const [values, setValues] = useState({})
  console.log(values)

  const [res, setRes] = useState({})

  // {username: "bob", password: "secret"}

  useEffect(() => {
    async function getUser() {
      const response = await axios.post(`${window.location.origin}/api/auth/sign_in`, values);
      setRes(response.data)

      localStorage.setItem("user", JSON.stringify(response.data.access_token));

      if (response.data.access_token) {
        dispatch(loginActions.authAction(response.data.access_token))
      }
    }
    getUser()
  }, [values])

  console.log(res)

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout((data) => {
          setSubmitting(true);
          // console.log(data);
          setValues(values)
          // alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string()
          // .email()
          .required("Must enter an username")
        // .matches(
        //   /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
        //   "Invalid email address"
        // )
        ,
        password: Yup.string()
          .required("Must enter a password")
          .min(6, "Password should be 6 characters minimum.")
        // .matches(/(?=.*[0-9])/, "Password must contain a number.")
        ,
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
              <InputUserName
                username={values.username}
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
