// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/styles.css";

// const EmployeeTable = ({ employeeData }) => {
//   const navigate = useNavigate();

//   const handleRowClick = (employeeId) => {
//     navigate(`/employee/${employeeId}/details`);
//   };

//   return (
//     <div className="employee-table-container">
//       <h2>Employee Table</h2>
//       {employeeData && employeeData.length > 0 ? (
//         <table className="employee-table">
//           <thead>
//             <tr>
//               <th>FirstName</th>
//               <th>LastName</th>
//               <th>Age</th>
//               <th>DateOfJoining</th>
//               <th>Title</th>
//               <th>Department</th>
//               <th>EmployeeType</th>
//               <th>CurrentStatus</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employeeData.map((employee, index) => (
//               <tr
//                 key={employee.id}
//                 onClick={() => handleRowClick(employee.id)}
//                 className={index % 2 === 0 ? "even-row" : "odd-row"}
//               >
//                 <td>{employee.firstName}</td>
//                 <td>{employee.lastName}</td>
//                 <td>{employee.age}</td>
//                 <td>{employee.dateOfJoining}</td>
//                 <td>{employee.title}</td>
//                 <td>{employee.department}</td>
//                 <td>{employee.employeeType}</td>
//                 <td>{employee.currentStatus ? "Working" : "Retired"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No employee data available</p>
//       )}
//     </div>
//   );
// };

// export default EmployeeTable;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const EmployeeTable = ({ employeeData }) => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Update tableData whenever employeeData changes
    setTableData(employeeData);
  }, [employeeData]);

  const handleRowClick = (employeeId) => {
    navigate(`/employee/${employeeId}/details`);
  };

  return (
    <div className="employee-table-container">
      <h2>Employee Table</h2>
      {tableData && tableData.length > 0 ? (
        <table className="employee-table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>DateOfJoining</th>
              <th>Title</th>
              <th>Department</th>
              <th>EmployeeType</th>
              <th>CurrentStatus</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((employee, index) => (
              <tr
                key={employee.id}
                onClick={() => handleRowClick(employee.id)}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.age}</td>
                <td>{employee.dateOfJoining}</td>
                <td>{employee.title}</td>
                <td>{employee.department}</td>
                <td>{employee.employeeType}</td>
                <td>{employee.currentStatus ? "Working" : "Retired"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employee data available</p>
      )}
    </div>
  );
};

export default EmployeeTable;
