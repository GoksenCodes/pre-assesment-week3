import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import OnDutyPage from "./pages/OnDutyPage";
import PatientSignUpPage from "./pages/PatientSignUpPage";
import PatientDatabasePage from "./pages/PatientDatabasePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/doctorSchedule" component={OnDutyPage} />
        <Route path="/patientSignUp" component={PatientSignUpPage} />
        <Route path="/patientDatabase" component={PatientDatabasePage} />
      </Switch>
    </div>
  );
}

export default App;
