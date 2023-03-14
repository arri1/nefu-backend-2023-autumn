import logo from "../../logo.svg";
import "./Main.css";

function Main() {
  return (
    <div className="Main">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="form">
          <label className="input-login">
            login:
            <input type="text" name="login" />
          </label>
          <label className="input-parol">
            parol:
            <input type="text" name="parol" />
          </label>
          <input className="submit" type="submit" value="Отправить" />
        </form>
      </header>
    </div>
  );
}

export default Main;
