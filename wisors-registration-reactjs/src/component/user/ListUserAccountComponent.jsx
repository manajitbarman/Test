import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListUserAccountComponent extends Component {

    constructor(props) {
		
        super(props)
        this.state = {
            users: [],
            message: null,
			userAddresses: []
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
		//console.log(users);
    //this.setState({ users });
        this.reloadUserList();
    }

    reloadUserList() {
	
		ApiService.fetchUsers()
            .then((res) => {
				console.log(res);
                this.setState({users: res.data})
				this.setState({userAddresses: res.data.userAddresses})
				console.log(this.state.users);
            });
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.userId !== userId)});
           })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
		console.log(id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
		const userAddresses=[];
        return (
            <div>
                <h2 className="text-center">User Account Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addUser()}> Add User</button>
                <table style={{width:'800px'}}>
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserType</th>
                            <th>Email</th>
                            <th>Phone</th>
							<th>Address Line1</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                                    <tr key={this.state.users.userId}>
                                        <td>{this.state.users.firstName}</td>
                                        <td>{this.state.users.lastName}</td>
                                        <td>{this.state.users.userType}</td>
                                        <td>{this.state.users.email}</td>
                                        <td>{this.state.users.phone}</td>
										<td>
										<td>
										{Array.isArray(this.state.users.userAddresses) && this.state.users.userAddresses.map(address => (
											<li key={address.userAddressId}>{address.addressLine1}</li>
											
											))
										}		
										{Array.isArray(this.state.users.userAddresses) && this.state.users.userAddresses.map(address => (
											
											<li key={address.city}>{address.city}</li>
											
											))
										}												
										</td>
										</td>
										
                                        <td>
                                            <button className="btn btn-success" style={{width:'80px'}} onClick={() => this.deleteUser(this.state.users.userId)}> Delete</button>
                                            <button className="btn btn-success" style={{width:'80px'}} onClick={() => this.editUser(this.state.users.userId)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>
                                    </tr>
                            
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListUserAccountComponent;