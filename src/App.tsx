import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";

import { HomePage } from "./components/HomePage";
import { SyntheticPage } from "./components/SyntheticPage";
import { GPUComparisonPage } from "./components/GPUComparisonPage";

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/compare/:id">
          <GPUComparisonPage />
        </Route>
        <Route path="/synthetic" exact>
          <SyntheticPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
