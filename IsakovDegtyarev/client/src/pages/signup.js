import React from "react";

const SignUp = () => {
  return (
    <div>
      <header className="App-header">
        <form className="form">
          <label className="input-login">
            login:
            <input type="text" name="login" />
          </label>
          <label className="input-password">
            password:
            <input type="text" name="password" />
          </label>
          <input className="submit" type="submit" value="Отправить" />
        </form>
      </header>
    </div>
  );
};

export default SignUp;
