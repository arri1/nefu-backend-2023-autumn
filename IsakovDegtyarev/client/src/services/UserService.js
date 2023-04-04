import api from '../http'
export default class UserService {
    static async findAll() {
        return api.get('/users/find-all')
    }
}