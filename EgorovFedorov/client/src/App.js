import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./layouts/login";
import Reg from "./layouts/reg";
import Main from "./layouts/Main";
import LoginRoute from "./components/LoginRoute";
import { useEffect } from "react";
import * as props from "./redux/action";

const App = () => {

  useEffect(() => {
    if(localStorage.getItem('accessToken') !== null) {
      props.setUser(localStorage.getItem('login'))
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginRoute/>} />
        {/*<LoginRoute path="/login" element={<Login/>} />*/}
        <Route exact path="/reg" element={<Reg/>} />
        <Route exact path="/main" element={<Main/>}/>
      </Routes>
    </Router>
  );
};

export default App;