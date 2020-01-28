import React, { Component } from "react";

// Converted to Stateless Functional Component - can't use life cycle hooks to modify components during life cycle
// Desctructuring props obj - totalCounters
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
