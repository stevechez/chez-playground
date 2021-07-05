import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/navbar/Nav'
import CounterView from "./views/counter-view";
import VersionContext from "./views/VersionContext";
import HomeComponent from './views/HomeComponent'
import ExpenseTracker from './views/expense-tracker/ExpenseTracker'
import Modal from './components/modal'
import UseState from './components/hooks/useState'
import NetlifyForm from './views/form/NetlifyForm'
import ReactQuery from './views/react-query/ReactQuery'
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
            <Route path="/react-query" component={ReactQuery} />
            <Route path="/usestate" component={UseState} />
            <Route path="/modal" component={Modal} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}