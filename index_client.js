const React = require("react");
const { hydrate } = require("react-dom");
const App = require("../layouts/default.jsx");

hydrate(<App />, document.getElementById("root"));
