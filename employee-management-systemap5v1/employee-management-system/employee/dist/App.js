"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Sidebar = _interopRequireDefault(require("./components/Sidebar.jsx"));
var _EmployeeDirectory = _interopRequireDefault(require("./components/EmployeeDirectory.jsx"));
var _EmployeeCreate = _interopRequireDefault(require("./components/EmployeeCreate.jsx"));
var _EmployeeTable = _interopRequireDefault(require("./components/EmployeeTable.jsx"));
var _reactRouterDom = require("react-router-dom");
var _UpdateEmployee = _interopRequireDefault(require("./components/UpdateEmployee.jsx"));
var _EmployeeDetails = _interopRequireDefault(require("./components/EmployeeDetails.jsx"));
var _Navbar = _interopRequireDefault(require("./components/Navbar.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import React, { useState, useEffect } from "react";
// import Sidebar from "./components/Sidebar.jsx";
// import EmployeeDirectory from "./components/EmployeeDirectory.jsx";
// import EmployeeCreate from "./components/EmployeeCreate.jsx";
// import EmployeeTable from "./components/EmployeeTable.jsx";
// import { Route, Routes } from "react-router-dom";
// import UpdateEmployee from "./components/UpdateEmployee.jsx";
// import EmployeeDetails from "./components/EmployeeDetails.jsx";
// import Navbar from "./components/Navbar.jsx";

// function App() {
//   const [employeeData, setEmployeeData] = useState([]);

//   // Defining updateEmployeeData function to update employee data
//   const updateEmployeeData = (newEmployee) => {
//     setEmployeeData([...employeeData, newEmployee]);
//   };

//   // Defining deleteEmployee function to delete an employee
//   const deleteEmployee = (id) => {
//     setEmployeeData(employeeData.filter((employee) => employee.id !== id));
//   };

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/graphql", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             query: `
//               query {
//                 employees {
//                   id
//                   firstName
//                   lastName
//                   age
//                   dateOfJoining
//                   title
//                   department
//                   employeeType
//                   currentStatus
//                 }
//               }
//             `,
//           }),
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setEmployeeData(data.data.employees);
//         } else {
//           console.error("Failed to fetch employee data");
//         }
//       } catch (error) {
//         console.error("Error fetching employee data:", error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   return (
//     <div className="App">
//       <Navbar />
//       <Sidebar />
//       <div className="content">
//         <Routes>
//           <Route
//             path="/"
//             element={<EmployeeDirectory employeeData={employeeData} />}
//           />
//           <Route
//             path="/create"
//             element={<EmployeeCreate updateEmployeeData={updateEmployeeData} />}
//           />
//           <Route
//             path="/table"
//             element={<EmployeeTable employeeData={employeeData} />}
//           />
//           <Route
//             path="/employee/:id/details"
//             element={
//               <EmployeeDetails
//                 employeeData={employeeData}
//                 onDeleteEmployee={deleteEmployee}
//               />
//             }
//           />
//           <Route
//             path="/employee/:id/update"
//             element={<UpdateEmployee employeeData={employeeData.id} />}
//           />
//           <Route
//             path="/fullTime"
//             element={
//               <EmployeeTable
//                 employeeData={employeeData.filter(
//                   (employee) => employee.employeeType === "FullTime"
//                 )}
//               />
//             }
//           />
//           <Route
//             path="/partTime"
//             element={
//               <EmployeeTable
//                 employeeData={employeeData.filter(
//                   (employee) => employee.employeeType === "PartTime"
//                 )}
//               />
//             }
//           />
//           <Route
//             path="/seasonal"
//             element={
//               <EmployeeTable
//                 employeeData={employeeData.filter(
//                   (employee) => employee.employeeType === "Seasonal"
//                 )}
//               />
//             }
//           />
//           <Route
//             path="/contract"
//             element={
//               <EmployeeTable
//                 employeeData={employeeData.filter(
//                   (employee) => employee.employeeType === "Contract"
//                 )}
//               />
//             }
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

function App() {
  const [employeeData, setEmployeeData] = (0, _react.useState)([]);
  const [updateTrigger, setUpdateTrigger] = (0, _react.useState)(false);
  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: "\n            query {\n              employees {\n                id\n                firstName\n                lastName\n                age\n                dateOfJoining\n                title\n                department\n                employeeType\n                currentStatus\n              }\n            }\n          "
        })
      });
      if (response.ok) {
        const data = await response.json();
        setEmployeeData(data.data.employees);
      } else {
        console.error("Failed to fetch employee data");
      }
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };
  (0, _react.useEffect)(() => {
    fetchEmployees();
  }, [updateTrigger]);
  const handleUpdate = () => {
    // Set the update trigger to true to fetch updated employee data
    setUpdateTrigger(prev => !prev);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_Sidebar.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_EmployeeDirectory.default, {
      employeeData: employeeData
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/create",
    element: /*#__PURE__*/_react.default.createElement(_EmployeeCreate.default, {
      updateEmployeeData: updateEmployeeData
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/table",
    element: /*#__PURE__*/_react.default.createElement(_EmployeeTable.default, {
      employeeData: employeeData
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/employee/:id/details",
    element: /*#__PURE__*/_react.default.createElement(_EmployeeDetails.default, {
      employeeData: employeeData,
      onDeleteEmployee: deleteEmployee
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/employee/:id/update",
    element: /*#__PURE__*/_react.default.createElement(_UpdateEmployee.default, {
      employeeData: employeeData.id
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/fullTime",
    element: /*#__PURE__*/_react.default.createElement(_EmployeeTable.default, {
      employeeData: employeeData.filter(employee => employee.employeeType === "FullTime")
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/partTime",
    element: /*#__PURE__*/_react.default.createElement(_EmployeeTable.default, {
      employeeData: employeeData.filter(employee => employee.employeeType === "PartTime")
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/seasonal",
    element: /*#__PURE__*/_react.default.createElement(_EmployeeTable.default, {
      employeeData: employeeData.filter(employee => employee.employeeType === "Seasonal")
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/contract",
    element: /*#__PURE__*/_react.default.createElement(_EmployeeTable.default, {
      employeeData: employeeData.filter(employee => employee.employeeType === "Contract")
    })
  }))));
}
var _default = exports.default = App;