import React from 'react'; // Import the core React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering React components to the DOM
import './index.css'; // Import the global CSS styles
import App from './App'; // Import the main App component of the application
import reportWebVitals from './reportWebVitals'; // Import the function for measuring app performance

// Create a root DOM element where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in StrictMode, which helps detect potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call reportWebVitals to measure performance of the app.
// For example, you can log results (e.g., reportWebVitals(console.log))
// or send the data to an analytics endpoint. More info: https://bit.ly/CRA-vitals
reportWebVitals(); 
