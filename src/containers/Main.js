import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Resume from "../pages/resume/Resume";
import Error404 from "../pages/errors/error404/Error";
import AdminComponent from "../pages/admin/AdminComponent";
import LoginComponent from "../pages/admin/LoginComponent";
import { auth } from "../firebase";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={theme} />}
          />
          <Route
            path="/education"
            render={(props) => <Education {...props} theme={theme} />}
          />
          <Route
            path="/experience"
            render={(props) => <Experience {...props} theme={theme} />}
          />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={theme} />}
          />
          <Route
            path="/opensource"
            render={(props) => <Opensource {...props} theme={theme} />}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={theme} />}
          />
          <Route
            path="/resume"
            render={(props) => <Resume {...props} theme={theme} />}
          />
          <Route
            path="/login"
            render={(props) => <LoginComponent {...props} theme={theme} />}
          />
          <Route
            path="/admin"
            render={(props) =>
              auth.currentUser ? (
                <AdminComponent {...props} theme={theme} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
