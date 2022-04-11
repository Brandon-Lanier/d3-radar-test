import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import RadarGraph from "../Radar/Radar";
import Chartjs from "../Chartjs/Chartjs";
import Nivo from "../Nivo/Nivo";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import { Container } from "@mui/material";
import Dashboard from "../Dashboard/Dashboard";
import Students from "../Students/Students";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Container sx={{display: 'flex'}}>
      <Router>
        <NavBar />
        <Route path="/radar">
          <RadarGraph />
        </Route>
        <Route path="/chartjs">
          <Chartjs />
        </Route>
        <Route path="/nivo">
          <Nivo />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/students">
          <Students />
        </Route>
      </Router>
    </Container>
  );
}

export default App;
