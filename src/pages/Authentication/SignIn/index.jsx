
import React, { useState } from "react";
import auth from "../../../utils/helpers/auth";
import authApi from "../../../core/api/services/auth";
import { set_user_info } from "../../../redux/actions/user"

function SignIn() {
  const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return {
      value,
      onChange: handleChange,
    };
  };

  const [error, setError] = useState("");
  const username = useFormInput("");
  const password = useFormInput("");


  const onFinish = () => {
    const data = {
      email: username.value,
      password: password.value,
    };
    authApi
      .clientLogin(data)
      .then(({ info, access_token }) => {
        set_user_info(info, access_token);
        auth.setAuthInfo(info, access_token);
        console.log(info, access_token)
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          setError(e.response.data.message);
        }
      });
  };



  return (
    <>
      <div className="form-signin-text">
        <p>ĐĂNG NHẬP</p>
      </div>
    </>
  );
}

export default SignIn;