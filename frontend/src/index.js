import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Optional, for global CSS styling
import App from "./App"; // Import the main App component
import reportWebVitals from "./reportWebVitals"; // Optional, for measuring performance

// This will render your entire React app inside the div with id="root" in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // This is where the React app is mounted in the HTML
);

// If you want to start measuring performance in your app, pass a function to log results
reportWebVitals();
