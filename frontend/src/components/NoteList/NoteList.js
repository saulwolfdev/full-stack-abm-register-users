import React, { Component, Fragment } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
// import styles from "./NoteList.module.scss";
class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  async componentDidMount() {
    this.getNotes();
  }
  getNotes = async () => {
    const res = await axios.get("http://localhost:4000/api/notes");
    this.setState({
      notes: res.data,
    });
  };
  deleteNote = async (id) => {
    await axios.delete("http://localhost:4000/api/notes/" + id);
    this.getNotes();
  };
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            {this.state.notes.map((note) => (
              <div className="col-md-4 p-2" key={note._id}>
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
					<h5>{note.name}</h5>
                    <Link to={"/edit/" + note._id} className="btn btn-secondary">
                     editar <BsPencil />
                    </Link>
                  </div>
                  <div className="card-body">
					<p>{note.direction}</p>
					<p>{note.phone}</p>
					<p>{note.cuit}</p>
                    <p>{note.content}</p>
                    <p>{note.registeredManager}</p>
                    <p>{format(note.createdAt)}</p>
                  </div>
                  <div className="card-footer">
                    <input
					type="submit"
                      className="btn btn-danger"
					  value="eliminar proveedor"
                      onClick={() => this.deleteNote(note._id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NoteList;
