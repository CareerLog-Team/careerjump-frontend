import "./App.css";
import Router from "components/Router";
import Loader from "components/Loader";
import {useEffect, useState} from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [init, setInit] = useState<boolean>(true);
  const userToken = "dsdfsdfs";
  const verifyUser = (token: string) => {
    return token === userToken;
  };

  useEffect(() => {
    if (verifyUser("")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <>{init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}</>
  );
}

export default App;
