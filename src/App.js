import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/navbar/Nav'
import CounterView from "./views/counter-view";
import VersionContext from "./views/VersionContext";
import HomeComponent from './views/HomeComponent'
import ExpenseTracker from './views/expense-tracker/ExpenseTracker'
import NetlifyForm from './views/form/NetlifyForm'
import Layout from "./components/layout/Layout"


export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Layout>
          <Switch>
            <Route path="/" exact component={HomeComponent} />

            <Route path="/counter-view" component={CounterView} />
            <Route path="/version-context" component={VersionContext} />
            <Route path="/expense-tracker" component={ExpenseTracker} />
            <Route path="/netlify-form" component={NetlifyForm} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}