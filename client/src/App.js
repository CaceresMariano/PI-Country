import { Landing, Home, Detail, Form } from "./views";
import NavBar from "./Components/NavBar/NavBar";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL = 'https://pi-country-production.up.railway.app/'

function App() {
  const pathName = useLocation();


  return (
    <div className="App">
      {pathName.pathname === "/home" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/home" render={() => <Home />}/>
      <Route path="/detail" render={() => <Detail />}/>
      <Route path="/form" render={() => <Form />}/>
    </div>
  );
}

export default App;
