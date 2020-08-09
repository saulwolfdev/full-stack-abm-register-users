import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./Navigation.module.scss";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className={"container"}>
          <Link className="navbar-brand" to="/">
            INICIO
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  LISTADO 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  PROVEEDORES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                 INSCRIPTOS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
