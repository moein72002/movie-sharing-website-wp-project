import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/authContext/AuthContext.js";
import { MovieContextProvider } from "./context/movieContext/MovieContext.js";
import { ListContextProvider } from "./context/listContext/ListContext.js";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
