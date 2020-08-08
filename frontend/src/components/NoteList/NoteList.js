import React, { Component,Fragment } from "react"
import axios from "axios";
import {format} from "timeago.js";
import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
// import styles from "./NoteList.module.scss";
class NoteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes:[]
		}
	}

async componentDidMount(){
	this.getNotes();
}
    getNotes = async () => {
        const res = await axios.get('http://localhost:4000/api/notes')
        this.setState({
            notes: res.data
        });
    }
    deleteNote = async (id) => {
        await axios.delete('http://localhost:4000/api/notes/' + id);
        this.getNotes();
    }
	render() { 
		return (
		<Fragment>

			<div className="container">
					            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{note.title}</h5>
									<Link to={"/edit/" + note._id} className="btn btn-secondary"> <BsPencil/>
									</Link>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {note.content}
                                    </p>
                                    <p>
                                        Author: {note.author}
                                    </p>
                                    <p>
                                        {format(note.createdAt)}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(note._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
				</div>

		</Fragment>
		);
	}
}
 
export default NoteList;