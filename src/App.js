import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Router from "./Router";
import { getInterventionsFetch } from "./redux/interventionsSlice";

function App() {
  const dispatch = useDispatch();

  //Récupérer les interventions en BD
  useEffect(() => {
    dispatch(getInterventionsFetch());
  }, []);

  return (
    <div className="container">
      <Header />
      <Router />
    </div>
  );
}

export default App;
