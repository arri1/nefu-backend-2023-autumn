import React from "react";

const Users = () => {
  return (
    <div>
      <header className="App-header">
        <form className="form">
          <label className="input-login">
            Users:
            <input type="text" name="users" />
          </label>
          <input className="submit" type="submit" value="Обновить" />
        </form>
      </header>
    </div>
  );
};

export default Users;
