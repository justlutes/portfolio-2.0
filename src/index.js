import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from "react-apollo";
import "normalize.css";
import "./assets/index.css";
import { gitHubToken } from "./config";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const networkInterface = createNetworkInterface({
  uri: "https://api.github.com/graphql"
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      // get the authentication token from local storage if it exists
      if (localStorage.getItem("auth0IdToken")) {
        req.options.headers.authorization = `Bearer ${gitHubToken}`;
      }
      setTimeout(next, 500);
      next();
    }
  }
]);

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
