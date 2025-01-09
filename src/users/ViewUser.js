// Import the React library, which is necessary for working with React components.
import React from "react";

// Export a default anonymous function that represents a React component.
export default function () {
  // Return JSX that describes the user interface structure.
  return (
    // Main container with the "container" class to apply Bootstrap styles.
    <div className="container">
      {/* Create a Bootstrap row for horizontal alignment of content. */}
      <div className="row">
        {/* Create a Bootstrap column with a width of 6 columns (out of 12),
            centered using "offset-md-3". */}
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          {/* Header with centered text, additional margin (m-4), and text "Edit User". */}
          <h2 className="text-center m-4">Edit User</h2>
        </div>
      </div>
    </div>
  );
}
