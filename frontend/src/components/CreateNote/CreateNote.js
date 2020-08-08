import React, {Component, Fragment} from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import styles from "./CreateNote.module.scss";
class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
			users:[],
			userSelected:"",
			title:"",
			content:"",
			date:new Date()
		}
    }
	async componentDidMount(){
		const res = await axios.get("http://localhost:4000/api/users");
		this.setState({
			users:res.data.map(user=>user.username)
		})
	}
	onSubmit=(e)=>{
		e.preventDefault()
		console.log(this.state.title,this.state.content)
	}
	onInputChange=(e)=>{
		//  this.setState({
		// 	 userSelected:e.target.value
		//  })
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	onDateChange=(date)=>{
		this.setState({date})
	}
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="col-md-6 offset-md-3">
                        <div className="card card-body">
                            <h4>CREAR PROVEEDOR</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <select className="form-control"
									name="userSelected"
									 value={this.state.userSelected}
									onChange={this.onInputChange}>
											{
												this.state.users.map((user)=>{
													return <option  key={user} value={user}>{user}</option>		
												})
											}
									</select>
                                </div>
                                <div className="form-group">
								<input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                onChange={this.onInputChange}
                                name="title"
                                value={this.state.title}
                                required />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" 
									className="form-control" 
									placeholder="Content"
									name="content"
									value={this.state.content}
									onChange={this.onInputChange}
									></textarea>
                                </div>

                                <div className="form-group">
								<DatePicker 
								className="form-control"
								onChange={this.onDateChange}
								selected={this.state.date}
								/>
                                   
                                </div>
                                <button className="btn btn-primary">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CreateNote;
