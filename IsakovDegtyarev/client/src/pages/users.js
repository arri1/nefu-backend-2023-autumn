import React from "react";

const Users = () => {
  return (
      <div className="App-header">
        <form className="form">
          <label className="input-login">
            Users:
            <input type="text" name="users" />
          </label>
          <input className="submit" type="submit" value="Обновить" />
        </form>
      </div>
  );
};

export default Users;
