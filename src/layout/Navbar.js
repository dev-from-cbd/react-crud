// Import React library
import React from "react";

// Define and export the Navbar component
export default function Navbar() {
  return (
    <div>
      {/* Navigation bar with Bootstrap classes */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          {/* Brand name with a link */}
          <a class="navbar-brand" href="#">
            Web App
          </a>
          {/* Button to toggle the navigation menu in smaller screens */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Button to add a new user */}
          <button className="btn btn-outline-light">Add user</button>
        </div>
      </nav>
    </div>
  );
}