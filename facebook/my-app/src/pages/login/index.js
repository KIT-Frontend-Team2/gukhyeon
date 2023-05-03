import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LinkButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/main");
  }

  return <button onClick={handleClick}>로그인</button>;
}

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Facebook 로그인</h1>
        <form>
          <label htmlFor="email">이메일 또는 전화번호</label>
          <input type="text" id="email" />
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" />
          <br />
          {/* <button type="submit" onClick={handleClick}>로그인</button> */}
          <LinkButton />
          <br />
          <Link to="/find">비밀번호를 잊어버리셨나요?</Link>
          <br />
          <Link to="/account">
            <button type="submit">새 계정 만들기!</button>
          </Link>
        </form>
      </header>
    </div>
  );
}

export default Login;
