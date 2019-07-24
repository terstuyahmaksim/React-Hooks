/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
  Be sure to adjust the `browserslist` field in your `package.json` file.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.

// Import our top-level sass file.

// Import React.
import React from "react";
import ReactDOM from "react-dom";

// Import our top-level component.
import App from "components/App";

//import styles sheets
import styleReset from "../src/styles/reset.css";

// Mount our app.
ReactDOM.render(<App />, document.querySelector("#app"));
