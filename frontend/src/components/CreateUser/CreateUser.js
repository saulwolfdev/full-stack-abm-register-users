import React, {Component} from 'react'
// import styles from "./CreateUser.module.scss";
import axios from "axios";
import { BsFillTrash2Fill } from "react-icons/bs";
class CreateUser extends Component {
			state = {
			 username:"",
            users: []
        }
    async componentDidMount() {
		this.getUsers();
    };
	 getUsers=async()=>{
		const res = await axios.get("http://localhost:4000/api/users");
        this.setState({
			users: res.data
			});
			console.log(res);
	};
    onChangeUsername =(e)=>{
        this.setState({username: e.target.value});
    };
	onSubmit=async(e)=>{
		e.preventDefault();
		await axios.post("http://localhost:4000/api/users",{
			username:this.state.username
		})
		this.setState({username:""});
		this.getUsers();
	}
	
    deleteUser = async (userId) => {
        const response = window.confirm("queres eliminar un usuario?");
        if (response) {
            await axios.delete("http://localhost:4000/api/users/" + userId);
            this.getUsers();
        }
    }
    render(){
        return (
		<div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>
                                      INGRESE RESPONSABLE INSCRIPTO
                                    </label>
									<input
                                    className="form-control"
                                    value={this.state.username}
                                    type="text"
                                    onChange={this.onChangeUsername}
                                />
                                </div>
								<input type="submit" className="btn btn-primary" value="guardar"/>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <ul className="list-group"> {
                        this.state.users.map((user) => {
                            return <li className="list-group-item list-group-item-action" style={{display:"flex",justifyContent:"space-between"}}
                                key={user._id}>
								{
                                user.username
                            } <span onClick={() => this.deleteUser(user._id)}><BsFillTrash2Fill/></span></li>
                    })
                    } </ul>
                </div>
            </div>
        </div>
		);
    }
}

export default CreateUser;
