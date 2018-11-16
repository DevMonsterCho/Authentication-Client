import React, { Component } from "react";
import styles from "./Login.scss";
import classNames from "classnames/bind";
import * as apiKakao from "lib/api/kakao";
import axios from "lib/axios";

const cx = classNames.bind(styles);

class Login extends Component {
  componentDidMount() {
    const app_key = `0e6baf8cf85e49672b1ef379e4d480e9`;
    const redirect_uri = `http://dev.api.authentication.dmcho.com:4000/api/oauth/kakao`;
    const path = `https://kauth.kakao.com/oauth/authorize?client_id=${app_key}&redirect_uri=${redirect_uri}&response_type=code`;

    // apiKakao.get();
    axios.get(`/api/oauth/kakao/check`, {}).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className={cx("Login")}>
        <div style={{ padding: "40px" }}>
          <h1>카카오</h1>
          <form action={`${process.env.api}/api/kakao/authorize`}>
            <button type="submit">로그인</button>
          </form>
        </div>
        <div style={{ padding: "40px" }}>
          <h1>개발중</h1>
          <form
            action={`${process.env.api}/api/oauth/kakao/login`}
            method={`post`}
          >
            <button type="submit">로그인</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
