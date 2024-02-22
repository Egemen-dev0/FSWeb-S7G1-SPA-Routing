import React from "react";
import Home from "./components/Home";
import ListItems from "./components/listing/ListItems";
import data from "./FetchedDatas/tmdb_Trending_All_Request";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        
        {
          Object.keys(data.trend_type).map((item, index) => {
            return (
              <Link key={index} to = { `/lists/${data.trend_type[item]}`}> {item} </Link>
            )
          })
        }
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/lists/:name">
            <ListItems />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}
