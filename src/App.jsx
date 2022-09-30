import React from "react";
// Components
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Routes
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const { isLoading } = useSelector((state) => state.games);

  return (
    <div className="App">
      <GlobalStyles />
      {!isLoading && <Nav />}
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}
