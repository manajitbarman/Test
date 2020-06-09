import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddUserAccountComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            userId: '',
			userType: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {userType: this.state.userType, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, phone: this.state.phone};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add User Account</h2>
                <form>
                <div className="form-group">
                    <label>User Name:</label>
                    <input type="text" placeholder="userType" name="userType" className="form-control" value={this.state.userType} onChange={this.onChange}/>
                </div>

             
                <div className="form-group">
                    <label>First Name:</label>
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Phone:</label>
                    <input placeholder="phone" name="phone" className="form-control" value={this.state.phone} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddUserAccountComponent;