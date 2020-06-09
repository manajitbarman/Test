import axios from 'axios';

const USER_API_BASE_URL = 'http://ec2-35-174-156-7.compute-1.amazonaws.com:8080/api/registration/users/6';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+'http://ec2-35-174-156-7.compute-1.amazonaws.com:8080/api/registration/users', user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.userId, user);
    }

}

export default new ApiService();