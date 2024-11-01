// Importing the CSS file for styling the App component.
import "./App.css";

// Importing Bootstrap CSS for pre-built styles, like buttons and layout.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Importing the Navbar component from the layout directory.
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

// Defining the main App component.
function App() {
  return (
    // Creating a div with the class name 'App' to contain the components of the app.
    <div className="App">
      {/* Rendering the Navbar component inside the App */}
      <Navbar />
      {/* Rendering the Home component inside the App */}
      <Home />
    </div>
  );
}

// Exporting the App component as the default export so it can be used elsewhere in the project.
export default App;
