import React, { useState } from "react"; // Import the React library
import axios from "axios";

// Export the Home component as the default export
export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
  });

  return (
    // Container div with a Bootstrap class for centering and spacing
    <div className="container">
      {/* A div with padding, using Bootstrap's py-4 class for vertical spacing */}
      <div className="py-4">
        {/* Create a table using Bootstrap's table class for styling */}
        <table className="table border shadow">
          {/* Table head that contains the column names */}
          <thead>
            <tr>
              {/* Column headers with scope attribute for accessibility */}
              <th scope="col">#</th> {/* Column header for row numbers */}
              <th scope="col">First</th> {/* Column header for first name */}
              <th scope="col">Last</th> {/* Column header for last name */}
              <th scope="col">Handle</th>{" "}
              {/* Column header for social media handle */}
            </tr>
          </thead>
          {/* Table body containing the actual data rows */}
          <tbody>
            <tr>
              <th scope="row">1</th> {/* Row number 1 */}
              <td>Markus</td> {/* First name of the first row */}
              <td>Otto</td> {/* Last name of the first row */}
              <td>@mdo</td> {/* Handle of the first row */}
            </tr>
            <tr>
              <th scope="row">2</th> {/* Row number 2 */}
              <td>Jacob</td> {/* First name of the second row */}
              <td>Thornton</td> {/* Last name of the second row */}
              <td>@fat</td> {/* Handle of the second row */}
            </tr>
            <tr>
              <th scope="row">3</th> {/* Row number 3 */}
              <td>John</td> {/* First name of the second row */}
              <td>Doe</td> {/* Last name of the second row */}
              {/*<td colspan="2">Larry the Bird</td> Name of the third row spanning two columns */}
              <td>@twitter</td> {/* Handle of the third row */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
